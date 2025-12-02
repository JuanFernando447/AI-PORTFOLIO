import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

type SectionType = 'hero' | 'about' | 'portfolio' | 'services' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('hero');

  // Completely disable all scrolling
  useEffect(() => {
    // Prevent all scroll events
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent wheel events
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent keyboard scrolling
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = [
        'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 
        'Home', 'End', 'Space'
      ];
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Prevent touch scrolling
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add all event listeners with capture and passive false
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
    document.addEventListener('scroll', preventScroll, { passive: false, capture: true });
    document.addEventListener('keydown', handleKeyDown, { passive: false, capture: true });
    
    // Prevent scrolling on window
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
    window.addEventListener('scroll', preventScroll, { passive: false, capture: true });

    // Set body styles to prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';
    document.body.style.left = '0';
    
    // Set html styles
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100vh';

    // Cleanup function
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
      document.removeEventListener('touchmove', handleTouchMove, { capture: true });
      document.removeEventListener('scroll', preventScroll, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('touchmove', handleTouchMove, { capture: true });
      window.removeEventListener('scroll', preventScroll, { capture: true });

      // Reset body styles
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      
      // Reset html styles
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, []);

  // Function to navigate to a section (called from Header)
  const navigateToSection = (section: SectionType) => {
    setCurrentSection(section);
  };

  // Make navigation function available globally
  useEffect(() => {
    (window as any).navigateToSection = navigateToSection;
    return () => {
      delete (window as any).navigateToSection;
    };
  }, []);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'services':
        return <Services />;
      case 'contact':
        return (
          <>
            <Contact />
            <Footer />
          </>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      <Header currentSection={currentSection} />
      <main className="h-full w-full overflow-hidden">
        <div className="h-full w-full transition-all duration-700 ease-in-out">
          {renderCurrentSection()}
        </div>
      </main>
    </div>
  );
}

export default App;