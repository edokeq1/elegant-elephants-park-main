import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import mainVideo from '../photo/main.mp4';


export const Hero: React.FC<{ t: any; onNavigate: (page: any) => void }> = ({ t, onNavigate }) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Calculate scroll relative to the start of this section
        const start = sectionRef.current.offsetTop;
        const currentScroll = window.scrollY;

        // Only apply parallax if we're near/in the section to avoid huge values
        if (currentScroll >= start - window.innerHeight && currentScroll <= start + window.innerHeight) {
          setOffsetY(currentScroll - start);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-brand-dark text-white">

      {/* 1. Background Video with Parallax */}
      <div
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          {/* Main header video */}
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Deep Blue-Grey Overlays for text readability */}
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/40 opacity-90" />
      </div>

      {/* 2. Large Background Decorative Text (Parallax Layer 2) */}
      <div
        className="absolute top-[25%] md:top-[20%] w-full text-center z-10 pointer-events-none overflow-hidden select-none"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      >
        <div className="whitespace-nowrap text-[22vw] md:text-[12vw] font-thin uppercase text-brand-accent/10 tracking-widest leading-none font-sans mix-blend-overlay blur-[1px]">
          {t.title1}
        </div>
      </div>

      {/* 3. Bottom Decorative Text (Layer 2.5) */}
      <div className="absolute bottom-[10%] right-0 z-10 pointer-events-none select-none hidden md:block opacity-20">
        <div className="text-[10vw] font-black uppercase text-transparent stroke-text tracking-tighter leading-none" style={{ WebkitTextStroke: '2px rgba(141, 163, 181, 0.2)' }}>
          {t.title2.split(' ')[1] || t.title2}
        </div>
      </div>

      {/* 4. Main Content (Layer 3) */}
      <div className="relative z-20 flex flex-col items-center min-h-[100dvh] w-full px-6 text-center pt-32 pb-24 md:pt-[150px] md:pb-32">

        {/* Animated Content Group */}
        <div className="flex flex-col items-center gap-6 md:gap-10 max-w-5xl mx-auto my-auto">

          {/* Title */}
          <div className="opacity-0 animate-reveal-up stagger-2">
            <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-light uppercase tracking-tighter leading-[0.85] text-white">
              {t.title1} <br />
              <span className="font-black text-brand-accent-light bg-clip-text">{t.title2}</span>
            </h1>
          </div>

          <div className="space-y-6">
            {/* Badge - Positioned explicitly above description */}
            <div className="opacity-0 animate-reveal-up stagger-1">
              {t.partners && (
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-brand-accent-light border px-4 py-2 md:px-5 md:py-2.5 border-brand-accent/30 rounded-full backdrop-blur-md bg-brand-dark/30">
                  {t.partners}
                </span>
              )}
            </div>

            {/* description */}
            <div className="opacity-0 animate-reveal-up stagger-3">
              <p className="text-gray-300 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-light uppercase tracking-wider md:tracking-widest px-4">
                {t.description}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center opacity-0 animate-reveal-up stagger-4 w-full max-w-[280px] sm:max-w-sm mx-auto md:max-w-none">
            <a
              href={t.exploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-auto px-4 sm:px-8 py-4 md:px-14 md:py-6 bg-brand-accent text-brand-dark transition-all duration-500 ease-out overflow-hidden rounded-full hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.4)] active:scale-95 text-center flex items-center justify-center whitespace-nowrap"
            >
              <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest md:tracking-[0.3em] group-hover:text-brand-dark transition-colors flex items-center justify-center gap-2 md:gap-3">
                {t.explore}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </span>
            </a>
            <button
              onClick={() => onNavigate('objects')}
              className="w-full md:w-auto px-4 sm:px-8 py-4 md:px-14 md:py-6 border border-white/20 text-white font-black uppercase tracking-widest md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-full whitespace-nowrap"
            >
              {t.masterplan}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
        {/* Scroll Down Button */}
        <button
            onClick={() => {
              window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
              })
            }}
            className="animate-bounce cursor-pointer p-4 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
        >
            <ArrowDown className="w-8 h-8 text-white/50" />
        </button>
      </div>
    </div>
  );
};