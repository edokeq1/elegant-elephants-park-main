import React from 'react';
import { Youtube, Send, MapPin, ArrowRight } from 'lucide-react';

interface InfoBlockProps {
  t: any;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ t }) => {
  return (
    <section className="relative w-full py-24 bg-brand-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Video Embed */}
          <div className="relative group rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 aspect-video border border-white/10 opacity-0 animate-reveal-up stagger-1">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/u_JBVuSOqkU?autoplay=0&mute=1&loop=1&playlist=u_JBVuSOqkU" 
              title="ZEMRESURS Air Survey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-[32px]" />
          </div>

          {/* Right: Info & Links */}
          <div className="space-y-8 lg:space-y-10 opacity-0 animate-reveal-up stagger-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest">
                <MapPin className="w-3 h-3" />
                {t.infoblock.location}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter leading-tight text-white">
                {t.infoblock.title.split(' ')[0]} <br />
                <span className="font-black text-brand-accent-light">{t.infoblock.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-xl">
                {t.infoblock.info}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Route Button */}
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=50.485,29.950" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-accent text-brand-dark rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4" />
                {t.infoblock.route}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* YouTube Channel Button */}
              <a 
                href="https://youtu.be/u_JBVuSOqkU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-300 group"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                {t.infoblock.youtube}
              </a>

              {/* Telegram Button */}
              <a 
                href="https://t.me/zemresurs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-[#229ED9] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:brightness-110 hover:scale-105 transition-all duration-300 sm:col-span-2 shadow-xl shadow-[#229ED9]/20"
              >
                <Send className="w-4 h-4" />
                {t.infoblock.telegram}
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
