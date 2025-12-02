import React from 'react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-green-400/30 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 right-40 w-5 h-5 bg-blue-400/30 rotate-12 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-60 right-10 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};