import React from 'react';
import { ArrowLeft, Target, Eye, History, Sparkles, Wind, Coffee, UtensilsCrossed, Heart, TreePine, Sparkle } from 'lucide-react';
import { LazyImage } from './LazyImage';

interface AboutPageProps {
  onBack: () => void;
  t: any;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, t }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 md:pt-24 pb-20 px-4 md:px-12 relative overflow-visible animate-fade-in">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] -mr-96 -mt-96 pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] -ml-64 -mb-64 pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[9px] md:text-[10px] tracking-[0.4em] font-black mb-8 md:mb-12 group opacity-0 animate-reveal-up stagger-1"
        >
          <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          {t.return}
        </button>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center mb-24">
          <div className="space-y-10 opacity-0 animate-reveal-up stagger-2">
            <div className="inline-block">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border-l-4 border-brand-accent pl-4 py-1">
                {t.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-tighter leading-[0.8] text-white">
              {t.title1} <br />
              <span className="font-black text-brand-accent-light">{t.title2}</span>
            </h1>
            <div className="space-y-6 md:border-l border-white/10 md:pl-10">
              <p className="text-gray-200 text-xl md:text-2xl max-w-xl leading-snug font-medium italic">
                "{t.description}"
              </p>
              <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
                {t.longDescription}
              </p>
            </div>

            {/* Stats display */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {t.stats.map((stat: any, index: number) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-6xl font-black text-brand-accent tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square opacity-0 animate-reveal-up stagger-3 hidden lg:block">
            <div className="absolute inset-0 bg-brand-accent/20 rounded-[40px] rotate-3 blur-2xl opacity-50" />
            <div className="relative h-full bg-brand-dark/40 border border-white/10 rounded-[40px] flex items-center justify-center overflow-hidden group shadow-2xl">
              <LazyImage
                src={t.heroImage}
                alt="Luxury Forest Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-black drop-shadow-lg">ZEMRESURS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24 md:mb-32">
          {[
            { icon: <Eye className="w-6 h-6" />, ...t.vision },
            { icon: <Target className="w-6 h-6" />, ...t.mission },
            { icon: <History className="w-6 h-6" />, ...t.history }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/20 transition-all duration-500 group opacity-0 animate-reveal-up stagger-${index + 4}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Ideology Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent px-4 py-2 border border-brand-accent/20 rounded-full inline-block">
                {t.ideology.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter leading-tight">
                {t.ideology.subtitle}
              </h2>
              <div className="grid gap-6">
                {t.ideology.list.map((item: string, i: number) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all shrink-0">
                      <Wind className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed pt-2">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative aspect-square rounded-[60px] overflow-hidden border border-white/10 group shadow-2xl">
              <LazyImage
                src={t.ideology.image}
                alt="Protected Forest"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent">
                <p className="text-2xl md:text-3xl font-light italic text-white leading-tight">"{t.ideology.subtitle}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Lifestyle & Infrastructure Sections */}
        <div className="space-y-32 mb-20">

          {/* Gastronomy */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-[1px] flex-grow bg-white/5" />
              <h2 className="text-2xl font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <UtensilsCrossed className="w-6 h-6 text-brand-accent" />
                {t.lifestyle.gastronomy.title}
              </h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {t.lifestyle.gastronomy.items.map((item: any, i: number) => (
                <div key={i} className="rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-accent/20 transition-all group overflow-hidden flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent px-4 py-1 bg-brand-dark/80 backdrop-blur-md rounded-full border border-brand-accent/20">
                        {item.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:rotate-12 transition-transform">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">{item.name}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wellness */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-[1px] flex-grow bg-white/5" />
              <h2 className="text-2xl font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <Heart className="w-6 h-6 text-brand-accent" />
                {t.lifestyle.wellness.title}
              </h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {t.lifestyle.wellness.items.map((item: any, i: number) => (
                <div key={i} className="rounded-[40px] bg-brand-charcoal/30 border border-white/5 hover:border-brand-accent/30 transition-all group overflow-hidden flex flex-col shadow-2xl shadow-black/40">
                  <div className="h-64 relative overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent px-4 py-1 bg-brand-dark/80 backdrop-blur-md rounded-full border border-brand-accent/20">
                        {item.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                      <Sparkle className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">{item.name}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recreation */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-[1px] flex-grow bg-white/5" />
              <h2 className="text-2xl font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <TreePine className="w-6 h-6 text-brand-accent" />
                {t.lifestyle.recreation.title}
              </h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {t.lifestyle.recreation.items.map((item: any, i: number) => (
                <div key={i} className="rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-accent/20 transition-all group overflow-hidden flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent px-4 py-1 bg-brand-dark/80 backdrop-blur-md rounded-full border border-brand-accent/20">
                        {item.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:-translate-y-1 transition-transform">
                      <Wind className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">{item.name}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
