import React, { useRef } from 'react';
import { MapPin, TrendingUp, Calendar, ExternalLink, ArrowRight, Anchor, Home } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import colTownImage from '../photo/1.jpg';

interface ColTownSectionProps {
    t: any;
}

export const ColTownSection: React.FC<ColTownSectionProps> = ({ t }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { isVisible } = useScrollAnimation(sectionRef);

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-brand-dark text-white overflow-hidden z-10">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1800px] mx-auto relative z-10">
                {/* Header */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-brand-accent"></span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">{t.badge}</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-[0.9] mb-4 text-white">
                        {t.title}
                    </h2>
                    <h3 className="text-2xl md:text-4xl font-light text-gray-400 uppercase tracking-widest mb-12">
                        {t.subtitle}
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Description & Image */}
                    <div className={`space-y-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative group border border-white/10">
                            <img
                                src={colTownImage}
                                alt="Col-Town Forest"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-5 h-5 text-brand-accent" />
                                    <span className="text-xs uppercase tracking-widest font-bold">{t.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-300">
                            <p>{t.description}</p>
                            <p className="font-medium text-brand-accent">{t.infrastructure}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://kadastrova-karta.com/dilyanka/3222782600:06:003:0091"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-5 border border-brand-accent text-brand-accent rounded-full hover:bg-brand-accent hover:text-brand-dark transition-all uppercase text-xs font-black tracking-[0.2em] group"
                            >
                                <ExternalLink className="w-4 h-4" />
                                {t.cadastralLink}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Stats & Financials */}
                    <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                        {/* Financial Card */}
                        <div className="p-8 md:p-12 bg-white/5 rounded-[40px] border border-white/10 space-y-8 backdrop-blur-sm">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-brand-accent">
                                    <TrendingUp className="w-6 h-6" />
                                    <span className="text-xs font-black uppercase tracking-widest">{t.priceTitle}</span>
                                </div>
                                <div className="text-3xl md:text-5xl font-light tracking-tight text-white">
                                    {t.priceValue}
                                </div>
                                <p className="text-sm text-gray-400 uppercase tracking-widest">{t.priceSubtitle}</p>
                            </div>

                            <div className="w-full h-[1px] bg-white/10" />

                            <div className="space-y-2">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t.capitalizationTitle}</span>
                                <div className="text-4xl md:text-6xl font-black text-brand-accent tracking-tighter">
                                    {t.capitalizationValue}
                                </div>
                            </div>
                        </div>

                        {/* Construction Details */}
                        <div className="space-y-6 pt-8">
                            <h4 className="text-2xl font-light uppercase tracking-wide border-l-4 border-brand-accent pl-6 text-white">
                                {t.constructionTitle}
                            </h4>

                            <div className="grid grid-cols-1 gap-6">
                                {/* Lake */}
                                <div className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
                                            <Anchor className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                                            {t.lakeTitle}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {t.lakeDescription}
                                    </p>
                                </div>

                                {/* Housing Legacy */}
                                {t.housingTitle && t.housingDescription && (
                                    <div className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
                                                <Home className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                                                {t.housingTitle}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {t.housingDescription}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Detailed Infrastructure List */}
                        {t.infrastructureList && (
                            <div className="space-y-6 pt-4">
                                <h4 className="text-xl font-light uppercase tracking-wide border-l-4 border-brand-accent pl-6 text-white/90">
                                    {t.infrastructureList.title}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {t.infrastructureList.items.map((item: any, i: number) => (
                                        <div key={i} className="flex flex-col justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-gray-300 text-xs font-light leading-tight pr-2">{item.name}</span>
                                                <span className="text-brand-accent font-bold text-xs whitespace-nowrap">{item.area}</span>
                                            </div>
                                            {item.count && <span className="text-gray-500 text-[9px] uppercase tracking-wider">{item.count}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Detailed Housing List */}
                        {t.housingList && (
                            <div className="space-y-6 pt-4">
                                <h4 className="text-xl font-light uppercase tracking-wide border-l-4 border-brand-accent pl-6 text-white/90">
                                    {t.housingList.title}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {t.housingList.items.map((item: any, i: number) => (
                                        <div key={i} className="flex flex-col justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-gray-300 text-xs font-light leading-tight pr-2">{item.name}</span>
                                                <span className="text-brand-accent font-bold text-xs whitespace-nowrap">{item.count}</span>
                                            </div>
                                            {item.area && <span className="text-gray-500 text-[9px] uppercase tracking-wider">{item.area}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section >
    );
};
