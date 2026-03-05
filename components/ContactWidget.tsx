import React, { useState } from 'react';
import { MessageCircle, Send, Phone, X, Leaf } from 'lucide-react';

interface ContactWidgetProps {
  t: {
    whatsapp: string;
    telegram: string;
    callUs: string;
    contactUs: string;
  };
}

export const ContactWidget: React.FC<ContactWidgetProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: t.whatsapp, 
      href: 'https://wa.me/380975675577', 
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]'
    },
    { 
      icon: <Send className="w-5 h-5" />, 
      label: t.telegram, 
      href: 'https://t.me/+380975675577', 
      color: 'bg-[#0088cc]',
      hoverColor: 'hover:bg-[#0077b5]'
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: t.callUs, 
      href: 'tel:+380975675577', 
      color: 'bg-brand-accent',
      hoverColor: 'hover:bg-brand-accent/80'
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-4">
      {/* Contact Menu */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-white shadow-2xl transition-all duration-300 group ${option.color} ${option.hoverColor} hover:scale-105 active:scale-95`}
            style={{ 
              transitionDelay: isOpen ? `${index * 100}ms` : '0ms' 
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
              {option.label}
            </span>
            <div className="p-1.5 rounded-lg bg-white/20 group-hover:rotate-12 transition-transform">
              {option.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Pulse Button */}
      <div className="relative group/widget">
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-20" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-10 p-4 md:p-5 rounded-full shadow-2xl transition-all duration-500 group border-2 ${
            isOpen 
              ? 'bg-white text-brand-dark border-white rotate-90 scale-110' 
              : 'bg-brand-dark/40 text-brand-accent border-brand-accent/30 backdrop-blur-xl hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent hover:scale-110'
          }`}
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <div className="relative">
              <Leaf className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 border-2 border-brand-dark rounded-full" />
            </div>
          )}
        </button>

        {/* Tooltip for Main Button - Hidden on mobile */}
        {!isOpen && (
          <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-brand-dark/80 backdrop-blur-md rounded-xl border border-brand-accent/20 text-white text-[10px] tracking-widest uppercase pointer-events-none opacity-0 group-hover/widget:opacity-100 transition-opacity whitespace-nowrap">
            {t.contactUs}
          </div>
        )}
      </div>
    </div>
  );
};
