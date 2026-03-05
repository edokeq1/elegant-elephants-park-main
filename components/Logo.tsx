import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pointer-events-none select-none">
      <h1 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] leading-none text-white">
        ZEMRESURS
      </h1>
    </div>
  );
};