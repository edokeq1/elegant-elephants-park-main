import React from 'react';
import secondVideo from '../photo/second.mp4';
import { ArrowDown } from 'lucide-react';

export const IntroVideo: React.FC<{ t: any }> = ({ t }) => {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative w-full min-h-[100dvh] overflow-hidden bg-brand-dark text-white flex flex-col">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90"
            >
                <source src={secondVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content Overlay */}
            <div className="relative flex flex-col items-center justify-center z-20 px-6 pt-[120px] pb-24 text-center flex-grow min-h-[100dvh]">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-14 animate-reveal-up stagger-1 w-full">

                    {/* Partners Text - Moved to Top */}
                    <div className="mb-2 opacity-90 animate-pulse-slow px-2">
                        <span className="inline-block text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.4em] text-brand-accent border px-3 py-2 md:px-6 md:py-3 border-brand-accent/50 rounded-2xl md:rounded-full leading-relaxed max-w-full break-words">
                            {t.intro.partners}
                        </span>
                    </div>

                    {/* Yield */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-accent-light drop-shadow-2xl">
                            {t.intro.yield.split('%')[0]}%
                            <span className="text-3xl md:text-5xl font-light ml-2 tracking-normal opacity-80">
                                {t.intro.yield.split('%')[1]}
                            </span>
                        </h2>
                        <p className="text-sm md:text-lg uppercase tracking-widest text-gray-300 font-light border-t border-brand-accent/30 pt-4 w-full max-w-md mx-auto">
                            {t.intro.note}
                        </p>
                    </div>

                    {/* Investment Term */}
                    <div className="flex flex-col gap-1 md:gap-3 glass-panel p-4 md:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl shadow-black/40">
                        <div className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-brand-accent-light">
                            {t.intro.minTermLabel}
                        </div>
                        <div className="text-xl md:text-4xl font-light font-heading tracking-tight leading-tight">
                            {t.intro.term.replace(' - ', ' ')}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col gap-1">
                        {(() => {
                            const text = t.intro.price;
                            const match = text.match(/^(From|from|Від|від)\s+(.+)$/i);
                            if (match) {
                                return (
                                    <div className="flex items-baseline justify-center gap-3">
                                        <span className="text-xl md:text-2xl uppercase tracking-widest opacity-70 font-normal">{match[1]}</span>
                                        <span className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-xl">{match[2]}</span>
                                    </div>
                                );
                            }
                            return (
                                <div className="text-3xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
                                    {t.intro.price}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
                <button
                    onClick={handleScrollDown}
                    className="animate-bounce cursor-pointer p-4 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
                >
                    <ArrowDown className="w-8 h-8 text-white/50" />
                </button>
            </div>
        </div>
    );
};
