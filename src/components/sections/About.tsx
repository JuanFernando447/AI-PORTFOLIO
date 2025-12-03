import React, { useEffect, useState, useRef } from 'react';
import { GlowCard } from '../ui/GlowCard';
import { skillsData } from '../../data/mockData';
import { Code, Database, Palette, Wrench, FileCode, Package } from 'lucide-react';

const skillCategories = {
  languages: { name: 'Languages', icon: FileCode, color: 'yellow' },
  frontend: { name: 'Frontend', icon: Code, color: 'cyan' },
  design: { name: 'Frontend Design', icon: Palette, color: 'blue' },
  backend: { name: 'Backend', icon: Package, color: 'green' },
  database: { name: 'Databases', icon: Database, color: 'orange' },
  others: { name: 'Others', icon: Wrench, color: 'purple' }
};

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-start w-full py-8">
          {/* About Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-5xl font-bold">
                  <span className="text-white">About</span>{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Me</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="transform transition-all duration-700 delay-300">
                  I'm a passionate developer who believes in the power of 
                  user-centered design. My journey in web development started with curiosity 
                  and has evolved into a dedication to creating digital experiences that matter.
                </p>
                <p className="transform transition-all duration-700 delay-500">
                  With a strong foundation in modern web technologies, I specialize in 
                  building responsive, accessible, and performant applications. I'm always 
                  eager to learn new technologies and tackle challenging problems.
                </p>
                <p className="transform transition-all duration-700 delay-700">
                  When I'm not coding, you can find me reading tech blogs, or exploring 
                  the latest developments in web technologies. I believe in continuous 
                  learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Quick Facts with enhanced styling */}
            <GlowCard className="p-8" glowColor="cyan">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Location', value: 'Barranquilla, Co', delay: '200ms' },
                  { label: 'Experience', value: '9+ Months', delay: '400ms' },
                  { label: 'Education', value: 'Software Engineer', delay: '600ms' },
                  { label: 'Status', value: 'Willing to talk', delay: '800ms' }
                ].map((fact, index) => (
                  <div 
                    key={fact.label}
                    className={`transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: fact.delay }}
                  >
                    <h4 className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">
                      {fact.label}
                    </h4>
                    <p className="text-white font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

          {/* Skills with enhanced animations */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
            </div>
            
            {/* Scrollable container with custom scrollbar and indicators */}
            <div className="relative">
              {/* Top gradient indicator */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"></div>
              
              {/* Bottom gradient indicator with scroll hint */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none flex items-end justify-center pb-2">
                <div className="text-gray-500 text-xs animate-bounce">
                  ↓ Scroll for more ↓
                </div>
              </div>
              
              <div className="space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
                  const categoryInfo = skillCategories[category as keyof typeof skillCategories];
                  const IconComponent = categoryInfo.icon;
                  
                  return (
                    <GlowCard 
                      key={category} 
                      className="p-6"
                      glowColor={categoryInfo.color as any}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${
                            categoryInfo.color === 'yellow' ? 'from-yellow-400 to-amber-500' :
                            categoryInfo.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                            categoryInfo.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                            categoryInfo.color === 'green' ? 'from-green-400 to-emerald-500' :
                            categoryInfo.color === 'orange' ? 'from-orange-400 to-red-500' :
                            'from-purple-400 to-pink-500'
                          } rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-black" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">
                            {categoryInfo.name}
                          </h4>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {skills.map((skill, skillIndex) => (
                            <div 
                              key={skill.name} 
                              className={`transform transition-all duration-500 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                              }`}
                              style={{ 
                                transitionDelay: `${500 + categoryIndex * 200 + skillIndex * 100}ms` 
                              }}
                            >
                              <div className={`group px-4 py-2.5 rounded-lg border-2 transition-all duration-300 cursor-default ${
                                categoryInfo.color === 'yellow' 
                                  ? 'bg-yellow-400/10 border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/20' :
                                categoryInfo.color === 'cyan' 
                                  ? 'bg-cyan-400/10 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20' :
                                categoryInfo.color === 'blue' 
                                  ? 'bg-blue-400/10 border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/20' :
                                categoryInfo.color === 'green' 
                                  ? 'bg-green-400/10 border-green-400/30 hover:border-green-400 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/20' :
                                categoryInfo.color === 'orange' 
                                  ? 'bg-orange-400/10 border-orange-400/30 hover:border-orange-400 hover:bg-orange-400/20 hover:shadow-lg hover:shadow-orange-400/20' :
                                  'bg-purple-400/10 border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/20 hover:shadow-lg hover:shadow-purple-400/20'
                              } hover:scale-105`}>
                                <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors duration-300">
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  );
                })}
              </div>
            </div>
            
            {/* Custom scrollbar styles */}
            <style dangerouslySetInnerHTML={{__html: `
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(31, 41, 55, 0.5);
                border-radius: 10px;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(to bottom, #34d399, #10b981);
                border-radius: 10px;
                transition: background 0.3s ease;
              }
              
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(to bottom, #10b981, #059669);
              }
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
};