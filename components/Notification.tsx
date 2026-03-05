import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'error' | 'success';
  isVisible: boolean;
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, type, isVisible, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95'
    }`}>
      <div className={`
        relative overflow-hidden
        px-6 py-4 rounded-2xl 
        bg-brand-dark/95 backdrop-blur-xl
        border flex items-center gap-4 min-w-[320px] max-w-[90vw]
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        ${type === 'error' ? 'border-red-500/20' : 'border-green-500/20'}
      `}>
        {/* Progress Bar Background */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full" />
        
        {/* Animated Progress Bar */}
        {isVisible && (
          <div 
            className={`absolute bottom-0 left-0 h-1 transition-all duration-[5000ms] ease-linear ${
              type === 'error' ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: '0%', animation: 'progress-shink 5s linear forwards' }}
          />
        )}

        {/* Shine effect */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />

        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
        }`}>
          {type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
        </div>

        <div className="flex-grow space-y-0.5">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">
            {type === 'error' ? 'Validation Error' : 'Success'}
          </p>
          <p className="text-sm font-medium text-white/90">
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <style>{`
        @keyframes progress-shink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};
