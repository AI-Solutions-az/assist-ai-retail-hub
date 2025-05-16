
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gradient">AIvito Assistant</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-primary transition-colors">Use Cases</a>
          <a href="#integration" className="text-sm font-medium hover:text-primary transition-colors">Integration</a>
          <Button asChild variant="ghost" className="hover-scale">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild className="hover-scale">
            <a href="#get-started">Get Started</a>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 space-y-4 flex flex-col">
            <a 
              href="#features" 
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#integration" 
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integration
            </a>
            <a 
              href="#contact" 
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild className="w-full">
              <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
