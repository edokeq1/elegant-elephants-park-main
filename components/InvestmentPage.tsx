import React from 'react';
import { ArrowLeft, TrendingUp, Shield, Users, Wallet, BarChart3, Rocket } from 'lucide-react';

interface InvestmentPageProps {
  onBack: () => void;
  onNavigate: (page: any) => void;
  t: any;
}

export const InvestmentPage: React.FC<InvestmentPageProps> = ({ onBack, onNavigate, t }) => {
  const echelons = t.investment.echelons;

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20 px-6 md:px-12 animate-fade-in relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Navigation */}
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[10px] tracking-[0.4em] font-black mb-16 group opacity-0 animate-reveal-up stagger-1"
        >
          <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          {t.objects.back}
        </button>

        <div className="text-center max-w-4xl mx-auto mb-20 opacity-0 animate-reveal-up stagger-2">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border px-4 py-2 border-brand-accent/30 rounded-full mb-6 inline-block">
            {t.investment.badge}
          </span>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-light uppercase tracking-tighter leading-tight mb-8">
            {t.investment.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            {t.investment.description}
          </p>
        </div>

        {/* Echelons Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {echelons.map((echelon: any, i: number) => (
            <div
              key={i}
              className="group relative p-8 md:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/30 transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[500px] opacity-0 animate-reveal-up stagger-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-500 group-hover:text-brand-dark">
                  {i === 0 && <Rocket className="w-6 h-6" />}
                  {i === 1 && <Users className="w-6 h-6" />}
                  {i === 2 && <TrendingUp className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 group-hover:text-brand-accent transition-colors">
                  {echelon.tier}
                </h3>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-2">{t.investment.labels.threshold}</span>
                    <div className="text-brand-accent-light">
                      {(() => {
                        const text = echelon.entry;
                        const match = text.match(/^(from|від)\s+(.+)$/i);
                        if (match) {
                          return (
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm uppercase tracking-wider opacity-60 font-normal">{match[1]}</span>
                              <span className="text-4xl md:text-5xl font-black tracking-tight text-white">{match[2]}</span>
                            </div>
                          );
                        }
                        return <span className="text-3xl md:text-4xl font-black text-white">{text}</span>;
                      })()}
                    </div>
                  </div>
                  <div className="pb-6 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-2">{t.investment.labels.yield}</span>
                    <div className="text-brand-accent-light">
                      {(() => {
                        const text = echelon.return;
                        // Check for percentage at the start (e.g. "25% per annum")
                        const matchPercent = text.match(/^(\d+%)\s+(.+)$/);
                        if (matchPercent) {
                          return (
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl md:text-5xl font-black tracking-tight text-brand-accent">{matchPercent[1]}</span>
                              <span className="text-sm uppercase tracking-wider opacity-60 font-normal">{matchPercent[2]}</span>
                            </div>
                          );
                        }
                        return <span className="text-3xl md:text-4xl font-black text-brand-accent">{text}</span>;
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-2">{t.investment.labels.strategy}</span>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      {echelon.details}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="relative z-10 mt-12 w-full py-5 rounded-full border border-brand-accent/20 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent active:scale-95"
              >
                {t.investment.cta.learn}
              </button>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* Closing trust block */}
        <div className="rounded-[50px] bg-brand-charcoal/40 border border-white/5 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 opacity-0 animate-reveal-up stagger-4 shadow-2xl shadow-black/50">
          <div className="flex-1 space-y-6">
            <h4 className="text-3xl font-light uppercase tracking-tighter">{t.investment.trust.title}</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              {t.investment.trust.text}
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{t.investment.trust.p1}</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{t.investment.trust.p2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{t.investment.trust.p3}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full md:w-auto px-12 py-8 bg-white text-brand-dark rounded-full text-[12px] font-black uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl shrink-0"
          >
            {t.investment.cta.book}
          </button>
        </div>

      </div>
    </div>
  );
};
