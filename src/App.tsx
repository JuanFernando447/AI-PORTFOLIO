import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
// import { Portfolio } from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const location = useLocation();
  
  // Determine current section based on path for Header
  const getCurrentSection = () => {
    const path = location.pathname.substring(1); // Remove leading slash
    if (path === '') return 'hero';
    return path as 'hero' | 'about' | 'portfolio' | 'services' | 'contact';
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header currentSection={getCurrentSection()} />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={
            <>
              <Contact />
              <Footer />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;