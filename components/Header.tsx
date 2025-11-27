import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Chi Siamo', href: '#about' },
    { name: 'ZES & Terziario', href: '#focus' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Proprietari', href: '#owners' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Chiudi menu mobile se aperto
    
    // Se è un link vuoto o esterno, non fare nulla
    if (href === '#') return;

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleScroll(e, '#root')} className="flex items-center gap-2 group">
              {/* IMPORTANTE: Sostituisci l'URL qui sotto con il percorso del tuo file logo (es. /logo.png) */}
              <img 
                src="https://placehold.co/300x100/transparent/2d3748?text=2D+LOGO+IMAGE" 
                alt="2D Sviluppo Immobiliare" 
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100 shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className={`px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wide transition-colors ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contattaci
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white bg-slate-900/50'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100 h-screen overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-6 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-800 font-medium hover:text-blue-700 text-xl w-full py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="w-full text-center bg-slate-900 text-white py-4 rounded-sm font-semibold hover:bg-slate-800 text-lg mt-4"
            >
              Contattaci
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;