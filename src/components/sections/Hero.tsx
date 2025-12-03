import React, { useEffect, useState } from 'react';
import { Download, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimatedText } from '../ui/AnimatedText';
import { ParticleBackground } from '../ui/ParticleBackground';
import { FloatingElements } from '../ui/FloatingElements';
import { developerData, statsData } from '../../data/mockData';
import resumePDF from '../../assets/HojaDeVida.pdf';

export const Hero: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projectsCompleted: 0,
    yearsExperience: 0,
    technologiesMastered: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const animateValue = (key: keyof typeof statsData, target: number) => {
      let start = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 25);
    };

    setTimeout(() => {
      animateValue('projectsCompleted', statsData.projectsCompleted);
      animateValue('yearsExperience', statsData.yearsExperience);
      animateValue('technologiesMastered', statsData.technologiesMastered);
    }, 1000);
  }, []);

  const navigateToContact = () => {
    if ((window as any).navigateToSection) {
      (window as any).navigateToSection('contact');
    }
  };

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <ParticleBackground />
        <FloatingElements />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Greeting with icon */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-cyan-400 font-medium text-lg">Hello, World! I'm</span>
            </div>

            {/* Name with gradient and animation */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                <span className="bg-gradient-to-r from-white via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                  {developerData.name}
                </span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <Code className="w-8 h-8 text-cyan-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl text-gray-300 font-light">
                  <AnimatedText text={developerData.title} delay={500} />
                </h2>
              </div>
            </div>
            
            {/* Description with typewriter effect */}
            <div className="max-w-2xl">
              <p className="text-xl text-gray-400 leading-relaxed">
                <AnimatedText text={developerData.description} delay={2000} />
              </p>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              {[
                { value: animatedStats.projectsCompleted, label: 'Projects', icon: Code, color: 'text-cyan-400' },
                { value: animatedStats.yearsExperience, label: 'Months Exp', icon: Zap, color: 'text-green-400' },
                { value: animatedStats.technologiesMastered, label: 'Technologies', icon: Code, color: 'text-purple-400' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`text-center transform transition-all duration-700 hover:scale-110 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1500 + index * 200}ms` }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className={`w-6 h-6 mr-2 ${stat.color}`} />
                      <div className={`text-4xl font-bold ${stat.color}`}>
                        +{stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons with hover effects */}
            <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '2500ms' }}>
              <Button 
                variant="primary" 
                size="lg"
                icon={Mail}
                onClick={navigateToContact}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                icon={Download}
                href={resumePDF}
                download="Juan_Pabon_Resume.pdf"
                className="group relative overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-cyan-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>

          {/* Profile Image with advanced effects */}
          <div className={`relative transform transition-all duration-1200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-green-400/30 rounded-full blur-3xl animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse scale-125" style={{ animationDelay: '1s' }}></div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-transparent to-green-400 p-1">
                  <div className="w-full h-full rounded-full bg-black"></div>
                </div>
              </div>
              
              {/* Image container */}
              <div className="relative p-4">
                <img
                  src={developerData.image}
                  alt={developerData.name}
                  className="w-full h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <Sparkles className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};