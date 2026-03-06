import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    t: {
        badge: string;
        title: string;
        items: FAQItem[];
    };
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef(null);
    const { isVisible } = useScrollAnimation(sectionRef);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-brand-dark border-t border-brand-charcoal overflow-hidden z-10">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className={`text-center space-y-6 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-12 h-[1px] bg-brand-accent"></span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">{t.badge}</span>
                        <span className="w-12 h-[1px] bg-brand-accent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter text-white">
                        {t.title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {t.items.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group hover:bg-white/5 transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-base md:text-lg font-medium text-white group-hover:text-brand-accent transition-colors pr-8">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-accent transform transition-transform duration-500 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-sm md:text-base text-gray-400 font-light leading-relaxed border-t border-white/5">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
