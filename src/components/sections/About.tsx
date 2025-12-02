import React, { useEffect, useState, useRef } from 'react';
import { GlowCard } from '../ui/GlowCard';
import { skillsData } from '../../data/mockData';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const skillCategories = {
  frontend: { name: 'Frontend', icon: Code, color: 'cyan' },
  backend: { name: 'Backend', icon: Database, color: 'green' },
  tools: { name: 'Tools', icon: Wrench, color: 'purple' },
  design: { name: 'Design', icon: Palette, color: 'blue' }
};

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillLevels, setSkillLevels] = useState<Record<string, number>>({});

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate skill bars
    setTimeout(() => {
      skillsData.forEach((skill, index) => {
        setTimeout(() => {
          setSkillLevels(prev => ({ ...prev, [skill.name]: skill.level }));
        }, index * 100);
      });
    }, 500);
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
                  I'm a passionate junior developer who believes in the power of clean code 
                  and user-centered design. My journey in web development started with curiosity 
                  and has evolved into a dedication to creating digital experiences that matter.
                </p>
                <p className="transform transition-all duration-700 delay-500">
                  With a strong foundation in modern web technologies, I specialize in 
                  building responsive, accessible, and performant applications. I'm always 
                  eager to learn new technologies and tackle challenging problems.
                </p>
                <p className="transform transition-all duration-700 delay-700">
                  When I'm not coding, you can find me contributing to open-source projects, 
                  reading tech blogs, or exploring the latest developments in web technologies. 
                  I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Quick Facts with enhanced styling */}
            <GlowCard className="p-8" glowColor="cyan">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Location', value: 'San Francisco, CA', delay: '200ms' },
                  { label: 'Experience', value: '2+ Years', delay: '400ms' },
                  { label: 'Education', value: 'Computer Science', delay: '600ms' },
                  { label: 'Status', value: 'Available for hire', delay: '800ms' }
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
            
            <div className="space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto pr-4">
              {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
                const categoryInfo = skillCategories[category as keyof typeof skillCategories];
                const IconComponent = categoryInfo.icon;
                
                return (
                  <GlowCard 
                    key={category} 
                    className="p-6"
                    glowColor={categoryInfo.color as any}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${
                          categoryInfo.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                          categoryInfo.color === 'green' ? 'from-green-400 to-emerald-500' :
                          categoryInfo.color === 'purple' ? 'from-purple-400 to-pink-500' :
                          'from-blue-400 to-indigo-500'
                        } rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-black" />
                        </div>
                        <h4 className="text-xl font-semibold text-white">
                          {categoryInfo.name}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {skills.map((skill, skillIndex) => (
                          <div 
                            key={skill.name} 
                            className={`space-y-2 transform transition-all duration-700 ${
                              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{ 
                              transitionDelay: `${500 + categoryIndex * 200 + skillIndex * 100}ms` 
                            }}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 font-medium">{skill.name}</span>
                              <span className="text-gray-400 text-sm font-mono">
                                {skillLevels[skill.name] || 0}%
                              </span>
                            </div>
                            
                            <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
                              <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                                  categoryInfo.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' :
                                  categoryInfo.color === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                                  categoryInfo.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-pink-500' :
                                  'bg-gradient-to-r from-blue-400 to-indigo-500'
                                }`}
                                style={{ 
                                  width: `${skillLevels[skill.name] || 0}%`,
                                  transitionDelay: `${800 + categoryIndex * 200 + skillIndex * 100}ms`
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
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
        </div>
      </div>
    </section>
  );
};