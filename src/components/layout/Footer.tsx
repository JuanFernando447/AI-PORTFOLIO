import React from 'react';
import { Github, Linkedin, Twitter, Heart, ArrowUp, Zap } from 'lucide-react';
import { GlowCard } from '../ui/GlowCard';
import { developerData } from '../../data/mockData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: developerData.social.github, label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Linkedin, href: developerData.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: developerData.social.twitter, label: 'Twitter', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Enhanced brand section */}
          <div className="space-y-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {developerData.name}
              </span>
            </button>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                {developerData.title}
              </p>
              <p className="text-gray-500 text-sm">
                📍 {developerData.location}
              </p>
            </div>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center">
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 
                      transition-all duration-300 group hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Enhanced back to top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-green-400/10 
                border border-cyan-400/30 rounded-xl text-cyan-400 hover:text-white hover:bg-cyan-400/20 
                transition-all duration-300 group hover:scale-105"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Enhanced divider */}
        <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Enhanced bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by {developerData.name.split(' ')[0]}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">© {currentYear}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <p className="text-gray-400">
              Open to new opportunities and exciting projects
            </p>
            <a
              href={`mailto:${developerData.email}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              {developerData.email}
            </a>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-12">
          <GlowCard className="p-8 text-center" glowColor="cyan">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Ready to work together?</h3>
              <p className="text-gray-400">Let's create something amazing!</p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-500 
                  text-black font-medium rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <span>Start a Project</span>
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </GlowCard>
        </div>
      </div>
    </footer>
  );
};