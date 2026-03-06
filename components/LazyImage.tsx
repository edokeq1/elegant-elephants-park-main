import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // We add a tiny delay to ensure the blur effect is visible for a moment if cached, for UX feel
    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        if (img.complete) {
            setTimeout(() => setIsLoaded(true), 100);
        } else {
            img.onload = () => setIsLoaded(true);
        }
    }, [src]);

    return (
        <>
            <div
                className={`absolute inset-0 bg-brand-charcoal animate-pulse transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
                src={src}
                alt={alt}
                className={`${className} transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'}`}
                {...props}
            />
        </>
    );
};
