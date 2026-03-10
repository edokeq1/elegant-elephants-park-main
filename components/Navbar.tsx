import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Globe, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'about' | 'objects' | 'map' | 'masterplan' | 'investment') => void;
  t: any;
  currentLang: 'en' | 'ua';
  onLanguageChange: (lang: 'en' | 'ua') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, t, currentLang, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (page: 'home' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'about' | 'objects' | 'map' | 'masterplan' | 'investment') => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full text-white pointer-events-none">
      {/* Top bar for mobile and desktop */}
      <div className="flex justify-between items-center px-4 md:px-8 xl:px-12 py-4 bg-gradient-to-b from-brand-dark/95 via-brand-dark/50 to-transparent pointer-events-auto gap-2">

        {/* Mobile: Menu Toggle (Hidden at XL) | Desktop: Contact */}
        <div className="flex flex-1 items-center min-w-[50px]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="2xl:hidden p-2 -ml-2 text-brand-accent hover:text-white transition-colors pointer-events-auto"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden 2xl:flex flex-col items-start pointer-events-auto">
            <button
              onClick={() => handleNavigate('contact')}
              className="text-[10px] 2xl:text-[12px] font-black tracking-[0.1em] 2xl:tracking-[0.3em] text-brand-accent hover:text-white transition-all uppercase border-b border-brand-accent/0 hover:border-white pb-1 whitespace-nowrap"
            >
              {t.contact}
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div
          className="pointer-events-auto flex justify-center items-center cursor-pointer transition-transform hover:scale-105 active:scale-95 mx-2 z-10 shrink-0"
          onClick={() => handleNavigate('home')}
        >
          <Logo />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 lg:gap-6 pointer-events-auto flex-1 justify-end min-w-[50px] relative z-20">
          {/* Desktop Nav */}
          <div className="hidden 2xl:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-black tracking-widest uppercase">
            <button onClick={() => handleNavigate('objects')} className="relative group hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
              {t.objects}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigate('masterplan')} className="relative group hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
              {t.masterplan}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigate('investment')} className="relative group hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
              {t.investment}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigate('map')} className="relative group hover:text-brand-accent transition-colors duration-300 whitespace-nowrap">
              {t.map}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/20 hidden 2xl:block"></div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 md:space-x-3 text-xs xl:text-sm font-black tracking-widest shrink-0">
            <button
              onClick={() => onLanguageChange('en')}
              className={`transition-all duration-300 border-b-2 ${currentLang === 'en' ? 'text-brand-accent border-brand-accent' : 'text-gray-500 border-transparent hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-white/20 select-none">/</span>
            <button
              onClick={() => onLanguageChange('ua')}
              className={`transition-all duration-300 border-b-2 ${currentLang === 'ua' ? 'text-brand-accent border-brand-accent' : 'text-gray-500 border-transparent hover:text-white'}`}
            >
              UA
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark/98 backdrop-blur-2xl z-[200] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] 2xl:hidden overflow-y-auto ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="flex flex-col items-center min-h-[100dvh] pt-32 pb-10 gap-8 px-8 relative">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => handleNavigate('objects')}
              className={`text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-brand-accent transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
              {t.objects}
            </button>
            <button
              onClick={() => handleNavigate('map')}
              className={`text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-brand-accent transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              {t.map}
            </button>
            <button
              onClick={() => handleNavigate('masterplan')}
              className={`text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-brand-accent transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              {t.masterplan}
            </button>
            <button
              onClick={() => handleNavigate('investment')}
              className={`text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-brand-accent transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: '250ms' }}
            >
              {t.investment}
            </button>
          </div>

          <div className={`h-[1px] w-12 bg-brand-accent transition-all duration-1000 ${isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

          <button
            onClick={() => handleNavigate('contact')}
            className={`flex items-center gap-4 px-10 py-5 bg-brand-accent text-brand-dark text-xs font-black uppercase tracking-[0.4em] rounded-full transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Phone className="w-4 h-4" />
            {t.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};