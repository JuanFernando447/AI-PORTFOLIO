import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Home, User, Briefcase, Settings, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { developerData } from '../../data/mockData';

type SectionType = 'hero' | 'about' | 'portfolio' | 'services' | 'contact';

const navigationItems = [
  { name: 'Home', section: 'hero' as SectionType, path: '/', icon: Home },
  { name: 'About', section: 'about' as SectionType, path: '/about', icon: User },
  // { name: 'Portfolio', section: 'portfolio' as SectionType, path: '/portfolio', icon: Briefcase },
  { name: 'Services', section: 'services' as SectionType, path: '/services', icon: Settings },
  { name: 'Contact', section: 'contact' as SectionType, path: '/contact', icon: Mail }
];

interface HeaderProps {
  currentSection: SectionType;
}

export const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.hamburger-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-cyan-400/5' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced logo */}
            <div className="flex-shrink-0 group cursor-pointer" onClick={() => handleNavigation('/')}>
              <img 
                src="/src/assets/JuanLogoV2.svg" 
                alt={developerData.name}
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Current section indicator */}
            <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 capitalize">
                {currentSection === 'hero' ? 'Home' : currentSection}
              </span>
            </div>

            {/* Enhanced hamburger menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger-button relative p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-800/50 rounded-xl group ${
                isMenuOpen ? 'z-50 text-white bg-gray-800/50' : 'z-40'
              }`}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced hamburger menu overlay */}
      <div className={`hamburger-menu fixed inset-0 z-50 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl"></div>
        
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Menu content */}
        <div className={`relative z-10 h-full flex items-center justify-center transform transition-all duration-700 ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="text-center space-y-6 max-w-md mx-auto px-8">
            {/* Menu title */}
            <div className={`mb-8 transform transition-all duration-500 delay-200 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-400 to-green-400 bg-clip-text text-transparent mb-3">
                Navigation
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full mx-auto"></div>
            </div>

            {/* Navigation items */}
            <nav className="space-y-3">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = currentSection === item.section;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`group w-full flex items-center space-x-4 px-6 py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    } ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-400/20 to-green-400/20 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/30 border border-transparent hover:border-gray-700/50'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-400 to-green-500 text-black' 
                        : 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <span className="text-lg font-semibold block">{item.name}</span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300">
                        {item.name === 'Home' && 'Welcome & Introduction'}
                        {item.name === 'About' && 'Skills & Experience'}
                        {item.name === 'Portfolio' && 'Projects & Work'}
                        {item.name === 'Services' && 'What I Offer'}
                        {item.name === 'Contact' && 'Get In Touch'}
                      </span>
                    </div>

                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-transparent'
                    }`}></div>
                  </button>
                );
              })}
            </nav>

            {/* Social links in menu */}
            <div className={`pt-6 border-t border-gray-800/50 transform transition-all duration-500 delay-700 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-gray-400 mb-4 text-sm">Connect with me</p>
              <div className="flex justify-center space-x-3">
                {[
                  { icon: Github, href: developerData.social.github, color: 'hover:text-purple-400' },
                  { icon: Linkedin, href: developerData.social.linkedin, color: 'hover:text-blue-400' },
                  // { icon: Twitter, href: developerData.social.twitter, color: 'hover:text-cyan-400' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 
                        transition-all duration-300 group hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-4 transform transition-all duration-500 delay-800 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleNavigation('/contact')}
                className="w-full group relative overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};