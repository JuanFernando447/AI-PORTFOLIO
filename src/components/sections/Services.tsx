import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Layers, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlowCard } from '../ui/GlowCard';
import { servicesData } from '../../data/mockData';

const iconMap = {
  Code,
  Server,
  Layers
};

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <section className="min-h-screen lg:h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative lg:overflow-hidden pt-20">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 flex flex-col lg:h-full">
        {/* Enhanced header */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-white">My</span>{' '}
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <p className="text-base lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive web development services to transform your ideas into powerful digital solutions.
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="pb-8 lg:flex-1 lg:overflow-y-auto lg:pr-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const colors = ['cyan', 'green', 'purple'];
              const glowColor = colors[index % colors.length];
              
              return (
                <GlowCard
                  key={service.id}
                  className={`p-5 lg:p-8 transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                  glowColor={glowColor as any}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Enhanced icon */}
                  <div className="mb-4 lg:mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${
                      glowColor === 'cyan' ? 'from-cyan-400 to-blue-500' :
                      glowColor === 'green' ? 'from-green-400 to-emerald-500' :
                      'from-purple-400 to-pink-500'
                    } rounded-2xl flex items-center justify-center mb-3 lg:mb-4 transform transition-all duration-200 ${
                      hoveredService === service.id ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                    }`}>
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold transition-colors duration-200 ${
                      hoveredService === service.id 
                        ? glowColor === 'cyan' ? 'text-cyan-400' :
                          glowColor === 'green' ? 'text-green-400' : 'text-purple-400'
                        : 'text-white'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Enhanced features list */}
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className={`flex items-center text-sm text-gray-300 transform transition-all duration-200 ${
                            hoveredService === service.id ? 'translate-x-2' : 'translate-x-0'
                          }`}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                            glowColor === 'cyan' ? 'bg-cyan-400' :
                            glowColor === 'green' ? 'bg-green-400' : 'bg-purple-400'
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Enhanced CTA */}
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={navigateToContact}
                      className={`mt-4 p-0 transition-all duration-200 ${
                        glowColor === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' :
                        glowColor === 'green' ? 'text-green-400 hover:text-green-300' :
                        'text-purple-400 hover:text-purple-300'
                      } ${hoveredService === service.id ? 'translate-x-2' : 'translate-x-0'}`}
                    >
                      Get Started
                    </Button>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Enhanced CTA section */}
          <div className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <GlowCard className="p-5 lg:p-8 text-center relative overflow-hidden" glowColor="green">
              <div className="relative z-10 space-y-4 lg:space-y-6">
                <div className="flex items-center justify-center space-x-3 lg:space-x-4 mb-3 lg:mb-4">
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-green-400 animate-pulse" />
                  <h3 className="text-xl lg:text-2xl font-bold text-white">Ready to Start Your Project?</h3>
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate to bring your vision to life. I'm here to help you build something amazing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={navigateToContact}
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                  </Button>
                  
                  {/* <Button
                    variant="outline"
                    size="lg"
                    onClick={navigateToPortfolio}
                    className="group relative overflow-hidden border-2 border-green-400/50 hover:border-green-400"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-green-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                  </Button> */}
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};