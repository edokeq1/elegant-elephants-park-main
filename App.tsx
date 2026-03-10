import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContactWidget } from './components/ContactWidget';
import { ContactPage } from './components/ContactPage';
import { ObjectsPage } from './components/ObjectsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { CookiePage } from './components/CookiePage';
import { CooperationPage } from './components/CooperationPage';
import { Footer } from './components/Footer';
import MapPage from './components/MapPage';
import { MasterplanPage } from './components/MasterplanPage';
import { InvestmentPage } from './components/InvestmentPage';
import { ColTownSection } from './components/ColTownSection';
import { RiverColSection } from './components/RiverColSection';
import { CountryResidenceSection } from './components/CountryResidenceSection';
import { CascadeLakesSection } from './components/CascadeLakesSection';
import { ElephantParkSection } from './components/ElephantParkSection';
import { IntroVideo } from './components/IntroVideo';
import { translations, Language } from './translations';
import { FAQSection } from './components/FAQSection';
import { NoiseOverlay } from './components/NoiseOverlay';


type AppPage = 'home' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'objects' | 'map' | 'masterplan' | 'investment' | 'cooperation';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('currentPage');
      return (saved as AppPage) || 'home';
    }
    return 'home';
  });
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedObjectId');
    }
    return null;
  });
  const [lang, setLang] = useState<Language>('en');
  const [history, setHistory] = useState<AppPage[]>([]);

  // Navigation handlers
  const handleNavigate = (page: AppPage, objectId: string | null = null) => {
    if (page !== currentPage) {
      setHistory(prev => [...prev, currentPage]);
      setCurrentPage(page);
    }

    // Always handle map selection state
    if (page === 'map') {
      setSelectedObjectId(objectId);
    }
  };


  const handleBack = () => {
    setHistory(prev => {
      if (prev.length === 0) {
        setCurrentPage('home');
        return [];
      }
      const newHistory = [...prev];
      const previous = newHistory.pop() || 'home';
      setCurrentPage(previous);
      return newHistory;
    });
  };

  // Persistence effects
  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage);
    // Reset scroll position on page change
    window.scrollTo(0, 0);

    // Clear map reload flag when we leave the map page
    if (currentPage !== 'map') {
      sessionStorage.removeItem('map_reloaded');
    }
  }, [currentPage]);

  useEffect(() => {
    if (selectedObjectId) {
      sessionStorage.setItem('selectedObjectId', selectedObjectId);
    } else {
      sessionStorage.removeItem('selectedObjectId');
    }
  }, [selectedObjectId]);

  // Multi-language support based on country
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code;

        // CIS Countries (including UA for this logic)
        const cisCountries = ['AM', 'AZ', 'BY', 'KZ', 'KG', 'MD', 'RU', 'TJ', 'UZ', 'TM', 'UA'];

        if (cisCountries.includes(country)) {
          setLang('ua');
        } else {
          setLang('en');
        }
      } catch (error) {
        console.warn('Country detection failed, defaulting to English');
        setLang('en');
      }
    };

    detectLanguage();
  }, []);

  // Debug logging as requested
  useEffect(() => {
    console.log(`[DEBUG] Page: ${currentPage} | Language: ${lang} | History: ${history.join(' -> ')}`);
  }, [currentPage, lang, history]);

  const t = translations[lang];

  return (
    <main className="w-full min-h-screen relative font-sans text-white bg-brand-dark overflow-x-hidden flex flex-col">
      <NoiseOverlay />
      <Navbar onNavigate={handleNavigate} t={t.nav} currentLang={lang} onLanguageChange={setLang} />

      <div className="flex-grow flex flex-col">
        <div key={currentPage} className="flex-grow flex flex-col">
          {currentPage === 'home' && (
            <>
              <Hero t={t.hero} onNavigate={handleNavigate} />
              <IntroVideo t={t} onNavigate={handleNavigate} />
              <ColTownSection t={t.colTown} />
              <RiverColSection t={t.riverCol} />
              <CountryResidenceSection t={t.countryResidence} />
              <CascadeLakesSection t={t.cascadeLakes} />
              <ElephantParkSection t={t.elephantPark} />
              <FAQSection t={t.faq} />

              {/* Map Widget - Updated to use dark theme if needed, or keep as is */}
            </>
          )}
          {currentPage === 'objects' && (
            <ObjectsPage
              onBack={handleBack}
              t={t.objects}
              architectureT={t.architecture}
              onShowMap={(id) => {
                handleNavigate('map', id);
              }}
            />
          )}
          {currentPage === 'masterplan' && (
            <MasterplanPage
              onBack={handleBack}
              onNavigate={handleNavigate}
              onShowMap={(id) => {
                handleNavigate('map', id);
              }}
              t={t}
            />
          )}
          {currentPage === 'investment' && (
            <InvestmentPage onBack={handleBack} onNavigate={handleNavigate} t={t} />
          )}
          {currentPage === 'map' && (
            <MapPage
              onBack={() => {
                handleBack();
                setSelectedObjectId(null);
              }}
              t={t}
              lang={lang}
              onContact={() => handleNavigate('contact')}
              initialSelectedId={selectedObjectId}
            />
          )}
          {currentPage === 'contact' && <ContactPage onBack={handleBack} t={t.contact} />}
          {currentPage === 'cooperation' && <CooperationPage onBack={handleBack} t={t.cooperation} />}
          {currentPage === 'privacy' && <PrivacyPage onBack={handleBack} t={t.legal} />}
          {currentPage === 'terms' && <TermsPage onBack={handleBack} t={t.legal} />}
          {currentPage === 'cookie' && <CookiePage onBack={handleBack} t={t.legal} />}
        </div>
      </div>

      <Footer onNavigate={handleNavigate} t={t.footer} />
      <ContactWidget t={t.widget} />
    </main>
  );
}

export default App;