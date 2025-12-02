import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlowCard } from '../ui/GlowCard';
import { developerData } from '../../data/mockData';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: developerData.email,
      href: `mailto:${developerData.email}`,
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: developerData.phone,
      href: `tel:${developerData.phone}`,
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: developerData.location,
      href: '#',
      color: 'purple'
    }
  ];

  return (
    <section className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col py-8">
        {/* Enhanced header */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-5xl font-bold">
              <span className="text-white">Get In</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced contact information */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently open to new opportunities and would love to hear about your project.
                </p>
              </div>

              {/* Enhanced contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <GlowCard
                      key={index}
                      className={`p-6 transform transition-all duration-700 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 200}ms` }}
                      glowColor={item.color as any}
                    >
                      <div className="flex items-center space-x-4 group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${
                          item.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                          item.color === 'green' ? 'from-green-400 to-emerald-500' :
                          'from-purple-400 to-pink-500'
                        } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{item.label}</h4>
                          {item.href.startsWith('#') ? (
                            <p className="text-gray-300">{item.value}</p>
                          ) : (
                            <a
                              href={item.href}
                              className={`transition-colors duration-300 ${
                                item.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' :
                                item.color === 'green' ? 'text-green-400 hover:text-green-300' :
                                'text-purple-400 hover:text-purple-300'
                              }`}
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </GlowCard>
                  );
                })}
              </div>

              {/* Enhanced additional info */}
              <GlowCard className="p-6" glowColor="cyan">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Quick Response Guarantee</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I typically respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>

            {/* Enhanced contact form */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <GlowCard className="p-8 relative overflow-hidden" glowColor="green">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <CheckCircle className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Thank you for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 
                            transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                            focusedField === 'name' 
                              ? 'border-cyan-400 focus:ring-cyan-400/50 bg-black/70' 
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 
                            transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                            focusedField === 'email' 
                              ? 'border-cyan-400 focus:ring-cyan-400/50 bg-black/70' 
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Project Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 
                          transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                          focusedField === 'subject' 
                            ? 'border-cyan-400 focus:ring-cyan-400/50 bg-black/70' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        placeholder="What's your project about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 
                          transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm resize-none ${
                          focusedField === 'message' 
                            ? 'border-cyan-400 focus:ring-cyan-400/50 bg-black/70' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        placeholder="Tell me about your project vision and requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={isSubmitting ? undefined : Send}
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          'Send Message'
                        )}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      )}
                    </Button>
                  </form>
                )}
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};