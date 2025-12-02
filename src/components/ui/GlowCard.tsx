import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  hoverScale = true 
}) => {
  const glowColors = {
    cyan: 'hover:shadow-cyan-400/25 hover:border-cyan-400/50',
    green: 'hover:shadow-green-400/25 hover:border-green-400/50',
    purple: 'hover:shadow-purple-400/25 hover:border-purple-400/50',
    blue: 'hover:shadow-blue-400/25 hover:border-blue-400/50'
  };

  return (
    <div 
      className={`
        relative group bg-gradient-to-br from-gray-900/50 to-black/50 
        backdrop-blur-sm border border-gray-800/50 rounded-2xl 
        transition-all duration-500 ease-out
        ${glowColors[glowColor as keyof typeof glowColors]}
        hover:shadow-2xl
        ${hoverScale ? 'hover:scale-105 hover:-translate-y-2' : ''}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-transparent to-green-400/20 animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};