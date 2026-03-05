import { useState, useEffect, RefObject } from 'react';

export const useScrollAnimation = (ref: RefObject<HTMLElement>, threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [ref, threshold]);

    return { isVisible };
};
