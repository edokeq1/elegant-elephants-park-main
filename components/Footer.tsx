import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { translations } from '../translations';

interface FooterProps {
  onNavigate: (page: 'home' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'about' | 'objects' | 'map' | 'masterplan' | 'investment') => void;
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  return (
    <footer className="w-full relative z-30 bg-brand-dark border-t border-white/5 pt-16 pb-8 px-6 md:px-12 flex-shrink-0">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-6 max-w-sm flex flex-col items-center md:items-start">
            <div
              onClick={() => onNavigate('home')}
              className="group cursor-pointer"
            >
              <h2 className="text-xl font-black uppercase tracking-[0.4em] text-white group-hover:text-brand-accent transition-colors">
                ZEMRESURS
              </h2>
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 w-full">
            <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{t.nav}</h4>
              <ul className="space-y-3 font-light">
                {t.home && <li><button onClick={() => onNavigate('home')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.home}</button></li>}
                {t.objects && <li><button onClick={() => onNavigate('objects')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.objects}</button></li>}
                {t.map && <li><button onClick={() => onNavigate('map')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.map}</button></li>}
                {t.masterplan && <li><button onClick={() => onNavigate('masterplan')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.masterplan}</button></li>}
                {t.investment && <li><button onClick={() => onNavigate('investment')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.investment}</button></li>}
                {t.contact && <li><button onClick={() => onNavigate('contact')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.contact}</button></li>}
              </ul>
            </div>

            <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{t.legal}</h4>
              <ul className="space-y-3 font-light">
                <li><button onClick={() => onNavigate('privacy')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.privacy}</button></li>
                <li><button onClick={() => onNavigate('terms')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.terms}</button></li>
                <li><button onClick={() => onNavigate('cookie')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t.cookies}</button></li>
              </ul>
            </div>

            <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{t.assistance}</h4>
              <ul className="space-y-3 font-light">
                <li className="flex items-center gap-3 text-xs uppercase tracking-widest text-white">
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  097 567 55 77
                </li>
                <li className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400">
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  PARTNERS@ZEMRESURS.COM
                </li>
                <li className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  {t.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 leading-loose">
            {t.rights}
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-gray-700 font-black mb-4 md:mb-0">
            <span>{t.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
