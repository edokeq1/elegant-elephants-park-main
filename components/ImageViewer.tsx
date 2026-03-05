import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface ImageViewerProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, onClose }) => {
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    // Reset zoom/position when src changes (though this component likely unmounts)
    useEffect(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, [src]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(prev => Math.max(prev - 0.5, 1));
        if (scale <= 1.5) setPosition({ x: 0, y: 0 }); // Reset position if zoomed out
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true);
            setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            setPosition({
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const content = (
        <div
            className="fixed inset-0 z-[9999] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
            onClick={onClose}
        >
            {/* Close Button - Top Right (High Contrast) */}
            <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white transition-all group z-[10000]"
                aria-label="Close"
            >
                <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>

            {/* Zoom Controls - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-4 bg-black/50 backdrop-blur-md rounded-full p-2 border border-white/10">
                <button
                    onClick={handleZoomOut}
                    disabled={scale <= 1}
                    className="p-3 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                >
                    <ZoomOut className="w-6 h-6" />
                </button>
                <span className="text-sm font-mono text-white/80 min-w-[4ch] text-center font-bold">
                    {Math.round(scale * 100)}%
                </span>
                <button
                    onClick={handleZoomIn}
                    disabled={scale >= 4}
                    className="p-3 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                >
                    <ZoomIn className="w-6 h-6" />
                </button>
            </div>

            {/* Image Container */}
            <div
                className="w-full h-full flex items-center justify-center overflow-hidden p-4 md:p-12 cursor-move"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-100 ease-out shadow-2xl"
                    style={{
                        transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                    }}
                    draggable={false}
                />
            </div>
        </div>
    );

    return createPortal(content, document.body);
};
