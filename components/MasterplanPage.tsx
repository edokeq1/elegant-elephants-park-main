import React, { useState } from 'react';
import { ArrowLeft, MapPin, Compass, Clock, Map as MapIcon, Layers, Building2, ArrowRight } from 'lucide-react';

interface MasterplanPageProps {
  onBack: () => void;
  onNavigate: (page: any) => void;
  onShowMap: (id: string) => void;
  t: any;
}

export const MasterplanPage: React.FC<MasterplanPageProps> = ({ onBack, onNavigate, onShowMap, t }) => {
  const [activeCycle, setActiveCycle] = useState(0);

  const cycles = t.masterplan.cycles;

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20 px-6 md:px-12 animate-fade-in overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] -mr-96 -mt-96 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -ml-48 -mb-48 opacity-30" />
      </div>

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

        {/* 1. Circular Development Plan Section */}
        <section className="mb-32">
          <div className="text-center mb-20 opacity-0 animate-reveal-up stagger-2">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent mb-4 block">
              {t.masterplan.badge}
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-tighter leading-none text-white">
              {t.masterplan.title}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Circular UI Component */}
            <div className="relative aspect-square flex items-center justify-center opacity-0 animate-reveal-up stagger-3">
              <div className="absolute inset-0 bg-brand-accent/5 rounded-full blur-3xl" />
              
              {/* The Circle */}
              <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/5 p-4 flex items-center justify-center shadow-2xl">
                
                {/* Rotating Needle */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-out z-20"
                  style={{ transform: `rotate(${activeCycle * 120 + 60}deg)` }}
                >
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-brand-accent to-transparent shadow-[0_0_20px_rgba(141,163,181,0.8)]" />
                </div>

                {/* SVG Segments */}
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {cycles.map((cycle: any, i: number) => {
                    const startAngle = i * 120;
                    const endAngle = (i + 1) * 120;
                    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                    const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                    const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                    
                    return (
                      <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 0 1 ${x2} ${y2} Z`}
                        className={`transition-all duration-500 cursor-pointer ${
                          activeCycle === i 
                            ? 'fill-brand-accent/20 stroke-brand-accent stroke-[0.5]' 
                            : 'fill-white/5 stroke-white/10 stroke-[0.2] hover:fill-white/10'
                        }`}
                        onClick={() => setActiveCycle(i)}
                      />
                    );
                  })}
                  {/* Outer Ring */}
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" className="text-white/5" strokeWidth="0.1" />
                </svg>

                {/* Central Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                   <div className="text-sm font-black text-brand-accent uppercase tracking-widest mb-2">
                     {cycles[activeCycle].area}
                   </div>
                   <div className="text-4xl font-black tabular-nums tracking-tighter">
                     {cycles[activeCycle].period.split(' ')[0]}
                   </div>
                   <div className="text-[10px] font-light uppercase tracking-[0.3em] text-white/40 mt-1">
                     {t.masterplan.yearTarget}
                   </div>
                </div>

                {/* Labels around the circle */}
                {cycles.map((cycle: any, i: number) => (
                  <div 
                    key={i}
                    className={`absolute text-[10px] font-black uppercase tracking-widest transition-all duration-500 cursor-pointer ${
                      activeCycle === i ? 'text-brand-accent' : 'text-white/20'
                    }`}
                    style={{
                      top: `${50 + 52 * Math.sin(((i * 120 + 60) * Math.PI) / 180)}%`,
                      left: `${50 + 52 * Math.cos(((i * 120 + 60) * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setActiveCycle(i)}
                  >
                    {t.masterplan.phaseLabel} {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Cycle Details */}
            <div className="space-y-12 opacity-0 animate-reveal-up stagger-4">
               {cycles.map((cycle: any, i: number) => (
                 <div 
                  key={i}
                  onClick={() => setActiveCycle(i)}
                  className={`transition-all duration-500 pl-8 border-l-2 cursor-pointer group/card ${
                    activeCycle === i ? 'border-brand-accent opacity-100 bg-brand-accent/5 py-6' : 'border-white/5 opacity-30 grayscale hover:opacity-50 hover:border-white/20'
                  }`}
                 >
                   <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 transition-colors ${activeCycle === i ? 'text-brand-accent' : 'text-white'}`}>
                     {cycle.phase}
                   </h3>
                   <div className="flex gap-4 mb-4">
                     <span className="text-[10px] font-black bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full uppercase tracking-widest border border-brand-accent/20">
                       {cycle.area}
                     </span>
                     <span className="text-[10px] font-black bg-white/5 text-white/60 px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                       {cycle.period}
                     </span>
                   </div>
                   <p className="text-gray-400 font-light leading-relaxed max-w-md mb-4 text-sm">
                     {cycle.description}
                   </p>
                   {activeCycle === i && cycle.features && (
                     <div className="flex flex-wrap gap-2 animate-fade-in">
                       {cycle.features.map((feature: string, idx: number) => (
                         <span key={idx} className="text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">
                           • {feature}
                         </span>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 2. Relief Map Section */}
        <section className="mb-32">
          <div className="relative w-full rounded-[40px] overflow-hidden bg-brand-charcoal/30 border border-white/5 min-h-[600px] flex flex-col opacity-0 animate-reveal-up stagger-5">
            
            {/* Map Background/Simulated Relief */}
            <div className="absolute inset-0 overflow-hidden">
               {/* Patterned Grid */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8DA3B5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
               
               {/* Decorative Gradient Terrain */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10" />
               
               {/* Kyiv Marker */}
               <div className="absolute top-[30%] left-[20%] text-center group cursor-help transition-all duration-500 hover:scale-110">
                 <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 animate-ping absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    <div className="w-5 h-5 rounded-full bg-brand-dark border-2 border-red-500 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                       <Building2 className="w-3 h-3 text-red-500" />
                    </div>
                 </div>
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-black uppercase tracking-[0.4em] bg-red-500 text-white px-3 py-1.5 rounded-sm shadow-xl border border-red-400/20 group-hover:bg-white group-hover:text-red-500 transition-colors">
                   {t.masterplan.kyiv}
                 </div>
               </div>

                {/* Project Marker */}
                <div 
                  onClick={() => onShowMap('elephant-park')}
                  className="absolute top-[60%] right-[30%] text-center group cursor-pointer hover:scale-110 transition-all duration-500"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center justify-center relative">
                     <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20" />
                     <div className="w-2 h-2 rounded-full bg-brand-dark relative z-10" />
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.4em] bg-brand-accent text-brand-dark px-4 py-2 rounded shadow-2xl group-hover:bg-white transition-colors">
                    {t.masterplan.location}
                  </div>
                 
                 {/* 25km radius line */}
                 <div className="absolute top-3 left-3 w-[200px] h-[200px] -translate-x-full -translate-y-full border-t border-l border-brand-accent/30 border-dashed rounded-tl-full pointer-events-none" />
                 <div className="absolute -top-12 -left-20 text-brand-accent/60 text-[8px] font-black lowercase tracking-widest whitespace-nowrap">
                   {t.masterplan.distance}
                 </div>
               </div>
            </div>

            {/* Overlays */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tighter mb-6">
                  {t.masterplan.tagline}
                </h3>
                <div className="flex flex-wrap gap-6 md:gap-8">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{t.masterplan.direction}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{t.masterplan.landscape}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => onShowMap('elephant-park')}
                className="group px-8 py-5 bg-white text-brand-dark rounded-full text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shrink-0"
              >
                <MapIcon className="w-4 h-4" />
                {t.objects.map}
              </button>
            </div>
          </div>
        </section>
        
        {/* 3. CTA Section */}
        <section className="py-20 text-center opacity-0 animate-reveal-up stagger-6">
          <div className="max-w-4xl mx-auto px-6 py-16 bg-white/[0.02] border border-white/5 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent mb-6 block">
              {t.contact.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter mb-8">
              {t.contact.title1} <br />
              <span className="font-black text-brand-accent">{t.contact.title2}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-lg font-light leading-relaxed">
              {t.contact.description}
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="group px-10 py-6 bg-brand-accent text-brand-dark rounded-full text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4 mx-auto hover:bg-white transition-all shadow-2xl"
            >
              {t.contact.submit}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
