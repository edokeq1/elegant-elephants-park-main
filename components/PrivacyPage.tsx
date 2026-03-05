import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
  t: any;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack, t }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-36 md:pt-32 pb-20 px-6 md:px-12 relative overflow-y-auto animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[10px] tracking-[0.4em] font-black group opacity-0 animate-reveal-up stagger-1"
        >
          <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          {t.return}
        </button>

        <div className="space-y-8 opacity-0 animate-reveal-up stagger-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none text-white">
                {t.privacy.title} <span className="font-light text-brand-accent-light opacity-50">{t.privacy.subtitle}</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2">{t.effectiveDate} January 21, 2026</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            {t.privacy.sections.map((section: any, index: number) => (
              <section key={index} className="space-y-4">
                <h2 className="text-xl font-bold uppercase tracking-widest text-brand-accent">{section.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] -mr-96 -mt-96 opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -ml-64 -mb-64 opacity-20" />
      </div>
    </div>
  );
};
