import React, { useState } from 'react';
import { ArrowLeft, MapPin, Maximize2, Navigation, Layers, ShieldCheck, TreePine, Truck, Home, Box, Globe, Sparkles } from 'lucide-react';
import { ImageViewer } from './ImageViewer';

interface ObjectsPageProps {
  onBack: () => void;
  onShowMap: (id: string) => void;
  t: any;
  architectureT: any;
}

export const ObjectsPage: React.FC<ObjectsPageProps> = ({ onBack, onShowMap, t, architectureT }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const selectedObject = t.list.find((obj: any) => obj.id === selectedId);
  // ... existing getIcon function ...
  const getIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'логістика':
      case 'logistics': return <Truck className="w-4 h-4" />;
      case 'котеджі':
      case 'коттеджі':
      case 'cottages': return <Maximize2 className="w-4 h-4" />;
      case 'транспорт':
      case 'transport': return <Navigation className="w-4 h-4" />;
      case 'екологія':
      case 'ecology': return <TreePine className="w-4 h-4" />;
      default: return <ShieldCheck className="w-4 h-4" />;
    }
  };

  if (selectedObject) {
    return (
      <div className="min-h-screen bg-brand-dark text-white pt-32 md:pt-24 pb-20 px-4 md:px-12 relative animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-12">
          <button
            onClick={() => setSelectedId(null)}
            className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[9px] md:text-[10px] tracking-[0.4em] font-black group"
          >
            <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            {t.back}
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border-l-4 border-brand-accent pl-4 py-1">
                    {t.locationLabel}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none text-white">
                  {selectedObject.name}
                </h1>
                <p className="text-gray-400 text-lg flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  {selectedObject.location}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="text-2xl font-black text-brand-accent">{selectedObject.area}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{t.areaLabel}</div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="text-2xl font-black text-brand-accent">{selectedObject.price}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{t.priceLabel}</div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="text-2xl font-black text-brand-accent">{selectedObject.minLot}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{t.minLotLabel}</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent">{t.descriptionLabel}</h3>
                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {selectedObject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedObject.tags.map((tag: string) => (
                  <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] uppercase font-bold tracking-widest">
                    {getIcon(tag)}
                    {tag}
                  </div>
                ))}
              </div>

              <button
                onClick={() => onShowMap(selectedObject.id)}
                className="flex items-center gap-4 px-10 py-5 bg-brand-accent text-brand-dark text-xs font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all group w-full md:w-auto justify-center"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                {t.map}
              </button>
            </div>

            <div
              className="aspect-video rounded-[40px] bg-brand-dark/40 border border-white/10 relative overflow-hidden group cursor-zoom-in"
              onClick={() => setIsImageViewerOpen(true)}
            >
              {selectedObject.image ? (
                <img
                  src={selectedObject.image}
                  alt={selectedObject.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-32 h-32 text-brand-accent/10 group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </>
              )}

              {/* Overlay hint */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <Maximize2 className="w-12 h-12 text-white/80" />
              </div>
            </div>

            {isImageViewerOpen && selectedObject.image && (
              <ImageViewer
                src={selectedObject.image}
                alt={selectedObject.name}
                onClose={() => setIsImageViewerOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 md:pt-24 pb-20 px-4 md:px-12 relative overflow-visible animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-16">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-brand-accent hover:text-white transition-all uppercase text-[9px] md:text-[10px] tracking-[0.4em] font-black group opacity-0 animate-reveal-up stagger-1"
        >
          <div className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          {t.back}
        </button>

        <div className="space-y-10 opacity-0 animate-reveal-up stagger-2">
          <div className="inline-block">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border-l-4 border-brand-accent pl-4 py-1">
              {t.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-tighter leading-none text-white">
            {t.title1} <br />
            <span className="font-black text-brand-accent-light">{t.title2}</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.list.map((obj: any, index: number) => (
            <div
              key={obj.id}
              className={`group p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/20 transition-all duration-700 opacity-0 animate-reveal-up stagger-${index + 3}`}
            >
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-2xl bg-brand-dark/40 border border-white/5 relative overflow-hidden group-hover:border-brand-accent/10 transition-colors">
                  {obj.image ? (
                    <img
                      src={obj.image}
                      alt={obj.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-brand-accent/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-widest group-hover:text-brand-accent transition-colors">
                    {obj.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {obj.location}
                  </p>
                </div>
                <div className="flex gap-4 border-t border-white/5 pt-6">
                  <div className="space-y-1">
                    <div className="text-lg font-black text-brand-accent">{obj.area}</div>
                    <div className="text-[9px] uppercase tracking-tighter text-gray-600">{t.areaLabel}</div>
                  </div>
                  <div className="w-[1px] bg-white/5" />
                  <div className="space-y-1">
                    <div className="text-lg font-black text-white">{obj.price}</div>
                    <div className="text-[9px] uppercase tracking-tighter text-gray-600">{t.priceLabel}/с</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(obj.id)}
                  className="w-full py-4 rounded-xl border border-brand-accent/20 text-[10px] uppercase tracking-[0.3em] font-black text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"
                >
                  {t.details}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Housing Architecture Section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 opacity-0 animate-reveal-up stagger-5">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent">
                Housing & Architecture
              </span>
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter">
                {architectureT.totalUnits}
              </h2>
            </div>
            <p className="max-w-md text-gray-500 font-light text-sm leading-relaxed">
              Diverse residential solutions tailored for comfort, innovation and ecological preservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 opacity-0 animate-reveal-up stagger-6">
            {architectureT.types.map((type: any, i: number) => (
              <div key={i} className="group p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-accent/20 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-500">
                    {i === 0 && <Box className="w-6 h-6" />}
                    {i === 1 && <Globe className="w-6 h-6" />}
                    {i === 2 && <Sparkles className="w-6 h-6" />}
                    {i === 3 && <Home className="w-6 h-6" />}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-white">{type.count}</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{type.area}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">{type.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] -mr-96 -mt-96 opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -ml-64 -mb-64 opacity-20" />
      </div>
    </div>
  );
};
