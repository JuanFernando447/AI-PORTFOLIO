import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Eye, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlowCard } from '../ui/GlowCard';
import { projectsData } from '../../data/mockData';

const categories = ['all', 'frontend', 'fullstack', 'backend', 'mobile'];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col py-8">
        {/* Header with enhanced styling */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-5xl font-bold">
              <span className="text-white">My</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects that showcase creativity, technical expertise, and attention to detail.
          </p>
        </div>

        {/* Enhanced filter buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden group text-sm
                ${activeFilter === category
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-black shadow-lg shadow-purple-400/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-purple-400/50'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 capitalize">
                {category === 'all' ? 'All Projects' : category}
              </span>
              {activeFilter !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced projects grid - scrollable */}
        <div className="flex-1 overflow-y-auto pr-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {filteredProjects.map((project, index) => (
              <GlowCard
                key={project.id}
                className={`group overflow-hidden transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
                glowColor="purple"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced project image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Floating action buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        href={project.liveUrl}
                        className="shadow-lg backdrop-blur-sm"
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        icon={Github}
                        href={project.githubUrl}
                        className="shadow-lg backdrop-blur-sm border-white/20 hover:border-white/40"
                      >
                        Code
                      </Button>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-purple-400 text-xs font-medium rounded-full border border-purple-400/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Enhanced project info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 
                          hover:bg-purple-400/20 hover:text-purple-300 hover:border-purple-400/50 
                          transition-all duration-300 cursor-default transform hover:scale-105`}
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Mobile action buttons */}
                  <div className="flex space-x-3 md:hidden pt-4">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        href={project.liveUrl}
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        icon={Github}
                        href={project.githubUrl}
                        className="flex-1"
                      >
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};