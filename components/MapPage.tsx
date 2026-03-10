import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { ArrowLeft, MapPin, Maximize2, X, Navigation, Phone, ExternalLink } from 'lucide-react';
import { ImageViewer } from './ImageViewer';
import { LazyImage } from './LazyImage';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Types
interface Property {
  id: string;
  name: string;
  location: string;
  area: string;
  price: string;
  minLot: string;
  description: string;
  image?: string;
  coordinates?: [number, number];
  position: [number, number];
}

interface Translation {
  objects: {
    list: Array<any>;
    back: string;
    priceLabel: string;
    areaLabel: string;
    minLotLabel: string;
  };
  map: {
    viewDetails: string;
    widgetTitle: string;
    widgetSubtitle: string;
    widgetDescription: string;
    legendLand: string;
    legendPlanned: string;
    modalBadge: string;
    modalDescription: string;
    bookConsultation: string;
    downloadPdf: string;
  };
}

interface MapPageProps {
  onBack: () => void;
  onContact: () => void;
  t: Translation;
  initialSelectedId?: string | null;
}

// Constants
const DEFAULT_CENTER: [number, number] = [50.474000, 29.942000];
const DEFAULT_ZOOM = 13;
const ANIMATION_DURATION = 1.5;

interface CustomMarkerProps {
  position: [number, number];
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  position,
  children,
  onClick
}) => {
  const map = useMap();

  const customIcon = useMemo(() => L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="marker-wrapper">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
               <circle cx="12" cy="10" r="3"/>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  }), []);

  const handleClick = useCallback((e: L.LeafletMouseEvent) => {
    map.invalidateSize();
    map.flyTo(e.latlng, map.getZoom(), {
      animate: true,
      duration: 1,
      easeLinearity: 0.25
    });
    onClick?.();
  }, [map, onClick]);

  return (
    <Marker
      position={position}
      icon={customIcon}
      eventHandlers={{ click: handleClick }}
    >
      {children}
    </Marker>
  );
};

// Map Effects Component
const MapEffects = ({ onMapReady }: { onMapReady: (map: L.Map) => void }) => {
  const map = useMap();

  useEffect(() => {
    onMapReady(map);
    const container = map.getContainer();
    container.classList.add('premium-map-theme');

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(container);

    // Initial invalidation
    const timer = setTimeout(() => map.invalidateSize(), 100);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, [map, onMapReady]);

  return null;
};

// Recenter Map Component
const RecenterMap = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  const prevCenterRef = useRef(center);

  useEffect(() => {
    // Only fly if center actually changed
    const [prevLat, prevLng] = prevCenterRef.current;
    const [newLat, newLng] = center;

    if (prevLat !== newLat || prevLng !== newLng) {
      map.flyTo(center, zoom, {
        animate: true,
        duration: ANIMATION_DURATION,
        easeLinearity: 0.25
      });
      prevCenterRef.current = center;
    }
  }, [center, zoom, map]);

  return null;
};

// Property Card Component (reusable)
const PropertyCard = ({
  property,
  onViewDetails,
  t,
  compact = false
}: {
  property: Property;
  onViewDetails: () => void;
  t: Translation;
  compact?: boolean;
}) => {
  const containerClass = compact
    ? "w-[220px] md:w-[300px] p-2 md:p-4"
    : "w-full p-4 md:p-6";

  return (
    <div className={`${containerClass} bg-brand-dark text-white rounded-[32px] overflow-hidden border border-white/10 shadow-3xl flex flex-col items-center text-center`}>
      <div className="aspect-video bg-white/5 rounded-2xl mb-4 flex items-center justify-center relative group overflow-hidden w-full">
        {property.image ? (
          <LazyImage
            src={property.image}
            className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:scale-110 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 duration-700"
            alt={property.name}
          />
        ) : (
          <MapPin className="w-12 h-12 text-brand-accent/20 group-hover:scale-110 transition-transform duration-700" />
        )}
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-brand-accent text-brand-dark text-[7px] md:text-[8px] font-black uppercase tracking-widest rounded-full">
          {property.area}
        </div>
      </div>

      <div className="space-y-3 md:space-y-4 px-1 pb-1 w-full">
        <div>
          <h3 className="text-sm md:text-lg font-black uppercase tracking-widest text-brand-accent leading-tight mb-1">
            {property.name}
          </h3>
          <p className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            {property.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 md:py-4 border-y border-white/5 w-full">
          <div className="flex flex-col items-center text-center space-y-0.5 md:space-y-1">
            <div className="text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold">
              {t.objects.priceLabel}
            </div>
            <div className="text-xs md:text-sm font-black text-white">{property.price}</div>
          </div>
          <div className="flex flex-col items-center text-center space-y-0.5 md:space-y-1">
            <div className="text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold">
              {t.objects.areaLabel || "Min. Lot"}
            </div>
            <div className="text-xs md:text-sm font-black text-white">{property.minLot || property.area}</div>
          </div>
        </div>

        <button
          onClick={onViewDetails}
          className="w-full py-2 md:py-3 bg-brand-accent text-brand-dark text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl hover:bg-white transition-all flex items-center justify-center gap-1.5 md:gap-2"
          aria-label={`View details for ${property.name}`}
        >
          <Maximize2 className="w-3 md:w-3.5 h-3 md:h-3.5" />
          {t.map.viewDetails}
        </button>
      </div>
    </div>
  );
};

// Property Modal Component
const PropertyModal = ({
  property,
  onClose,
  onContact,
  t
}: {
  property: Property;
  onClose: () => void;
  onContact: () => void;
  t: Translation;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab as any);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', handleTab as any);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-end p-0 md:p-8 animate-fade-in pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md pointer-events-auto"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-2xl h-full bg-brand-dark border-l border-white/10 shadow-3xl pointer-events-auto flex flex-col md:animate-reveal-left animate-slide-up"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-white z-10 bg-brand-dark/50 backdrop-blur-md"
          aria-label="Close property details"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="flex-grow overflow-y-auto p-6 md:p-12 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent border-l-4 border-brand-accent pl-4 py-1">
                {t.map.modalBadge}
              </span>
              <h2
                id="modal-title"
                className="text-2xl md:text-7xl font-light uppercase tracking-tighter leading-none pr-8"
              >
                {property.name}
              </h2>
              <p className="text-gray-400 text-[10px] md:text-xl flex items-center gap-2 md:gap-3">
                <MapPin className="w-3.5 h-3.5 md:w-6 md:h-6 text-brand-accent" />
                {property.location}
              </p>
            </div>

            <div
              className="aspect-video bg-white/5 rounded-[40px] border border-white/10 overflow-hidden relative group cursor-zoom-in"
              onClick={() => setIsImageViewerOpen(true)}
            >
              {property.image ? (
                <LazyImage
                  src={property.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 group-hover:contrast-110 group-hover:brightness-105 group-hover:saturate-110 transition-all duration-1000"
                  alt={property.name}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Maximize2 className="w-20 h-20 text-brand-accent/10 group-hover:scale-125 transition-transform duration-1000" />
                </div>
              )}

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <Maximize2 className="w-12 h-12 text-white/80" />
              </div>
            </div>

            {isImageViewerOpen && property.image && (
              <ImageViewer
                src={property.image}
                alt={property.name}
                onClose={() => setIsImageViewerOpen(false)}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-4 space-y-0 md:space-y-2">
                <div className="text-xl md:text-2xl font-black text-brand-accent">{property.area}</div>
                <div className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                  {t.objects.areaLabel}
                </div>
              </div>
              <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-4 space-y-0 md:space-y-2">
                <div className="text-xl md:text-2xl font-black text-brand-accent">{property.price}</div>
                <div className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                  {t.objects.priceLabel}
                </div>
              </div>
              <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-4 space-y-0 md:space-y-2">
                <div className="text-xl md:text-2xl font-black text-brand-accent">{property.minLot}</div>
                <div className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                  {t.objects.minLotLabel}
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-accent">
                {t.map.modalDescription}
              </h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/5">
              <button
                onClick={onContact}
                className="flex-1 px-6 md:px-10 py-4 md:py-6 bg-brand-accent text-brand-dark text-[9px] md:text-xs font-black uppercase tracking-[0.4em] rounded-xl md:rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-2 md:gap-3"
                aria-label="Book a consultation"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                {t.map.bookConsultation}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const MapPage: React.FC<MapPageProps> = ({ onBack, onContact, t, initialSelectedId }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  // Memoize properties transformation
  const properties = useMemo<Property[]>(() =>
    t.objects.list.map((obj) => ({
      ...obj,
      position: obj.coordinates || DEFAULT_CENTER,
    })),
    [t.objects.list]
  );

  // Handle initial selection
  useEffect(() => {
    if (initialSelectedId) {
      const prop = properties.find((p) => p.id === initialSelectedId);
      if (prop) {
        setSelectedProperty(prop);
      }
    }
  }, [initialSelectedId, properties]);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProperty]);

  // Mount animation
  useEffect(() => {
    // Hard reload fix for Leaflet rendering issues
    const hasReloaded = sessionStorage.getItem('map_reloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('map_reloaded', 'true');
      window.location.reload();
      return;
    }

    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectProperty = useCallback((property: Property) => {
    if (!mapInstance) {
      setSelectedProperty(property);
      return;
    }

    // Close current popup first
    setSelectedProperty(null);

    const target = L.latLng(property.position);
    const current = mapInstance.getCenter();

    // If we are already close enough, just open
    if (current.distanceTo(target) < 10) {
      setSelectedProperty(property);
      return;
    }

    mapInstance.invalidateSize();
    mapInstance.flyTo(target, DEFAULT_ZOOM, {
      animate: true,
      duration: 1.5,
      easeLinearity: 0.25
    });

    mapInstance.once('moveend', () => {
      setSelectedProperty(property);
    });
  }, [mapInstance]);

  const handleCloseModal = useCallback(() => {
    setSelectedProperty(null);
  }, []);

  return (
    <div className="h-[100dvh] w-full bg-brand-dark text-white relative overflow-hidden animate-fade-in">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        {isMounted ? (
          <MapContainer
            center={DEFAULT_CENTER}
            zoom={DEFAULT_ZOOM}
            zoomControl={false}
            className="w-full h-full outline-none"
          >
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            />

            <MapEffects onMapReady={setMapInstance} />
            <ZoomControl position="topright" />

            {properties.map((prop) => (
              <CustomMarker
                key={prop.id}
                position={prop.position}
                onClick={() => handleSelectProperty(prop)}
              >
              </CustomMarker>
            ))}
          </MapContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Header UI */}
      <header className="absolute top-20 md:top-28 left-4 md:left-12 z-50 pointer-events-none">
        <button
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 backdrop-blur-xl bg-brand-dark/80 border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full text-brand-accent hover:text-white transition-all uppercase text-[8px] md:text-[10px] tracking-[0.4em] font-black group shadow-2xl pointer-events-auto"
          aria-label="Go back"
        >
          <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1" />
          {t.objects.back}
        </button>
      </header>

      {/* Floating Info Card */}
      <aside className="absolute bottom-16 md:bottom-12 left-4 md:left-12 right-4 md:right-auto z-40 pointer-events-none">
        <div className="w-full md:w-[400px] bg-brand-dark/90 backdrop-blur-2xl border border-white/10 rounded-[24px] md:rounded-[40px] p-4 md:p-10 shadow-3xl pointer-events-auto animate-reveal-up group">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors duration-500">
                <Navigation className="w-4 h-4 md:w-7 md:h-7 text-brand-accent" />
              </div>
              <div>
                <h2 className="text-[8px] md:text-[13px] font-black uppercase tracking-[0.3em] text-white/90">
                  {t.map.widgetTitle}
                </h2>
                <p className="text-[6px] md:text-[10px] text-brand-accent/80 tracking-widest font-black uppercase mt-0.5">
                  {t.map.widgetSubtitle}
                </p>
              </div>
            </div>

            <p className="text-[11px] md:text-[12px] text-gray-400 leading-relaxed font-light line-clamp-3 md:line-clamp-none">
              {t.map.widgetDescription}
            </p>

            <div className="flex items-center gap-4 md:gap-8 pt-1 md:pt-2">
              <div className="flex items-center gap-1.5 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-brand-accent shadow-[0_0_12px_rgba(141,163,181,0.6)]" />
                <span className="text-[7px] md:text-[10px] uppercase tracking-widest text-gray-400 font-black">
                  {t.map.legendLand}
                </span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 animate-pulse-slow shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                <span className="text-[7px] md:text-[10px] uppercase tracking-widest text-gray-400 font-black">
                  {t.map.legendPlanned}
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={handleCloseModal}
          onContact={onContact}
          t={t}
        />
      )}

      {/* Styles */}
      <style>{`
        .leaflet-container {
          background: #16202A !important;
        }
        /* .premium-map-theme .leaflet-tile {
          filter: grayscale(1) invert(0.9) brightness(0.8) contrast(1.2) !important;
        } */
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
          border-radius: 32px !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip-container {
          margin-top: -1px;
        }
        .leaflet-popup-tip {
          background: #16202A !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .leaflet-popup-close-button {
          color: white !important;
          font-size: 16px !important;
          padding: 12px !important;
          top: 10px !important;
          right: 10px !important;
        }
        .marker-wrapper {
          width: 40px;
          height: 40px;
          background: #8FA3B5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16202A;
          box-shadow: 0 0 20px rgba(141,163,181,0.6);
          border: 2px solid rgba(255,255,255,0.2);
          animation: soft-pulse 3s infinite;
        }
        @keyframes soft-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        .premium-map-theme .leaflet-control-zoom {
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin-top: 80px !important;
        }
        @media (min-width: 768px) {
          .premium-map-theme .leaflet-control-zoom {
            margin-top: 110px !important;
          }
        }
        .premium-map-theme .leaflet-control-zoom-in,
        .premium-map-theme .leaflet-control-zoom-out {
          background: rgba(13, 15, 17, 0.8) !important;
          color: white !important;
          border: none !important;
          width: 44px !important;
          height: 44px !important;
          line-height: 44px !important;
          backdrop-filter: blur(10px) !important;
        }
        .premium-map-theme .leaflet-control-zoom-in:hover,
        .premium-map-theme .leaflet-control-zoom-out:hover {
          background: #8FA3B5 !important;
          color: #0D0F11 !important;
        }
        @keyframes reveal-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal-up {
          animation: reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        @keyframes reveal-left {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-reveal-left {
          animation: reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .animate-reveal-left {
            animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default MapPage;