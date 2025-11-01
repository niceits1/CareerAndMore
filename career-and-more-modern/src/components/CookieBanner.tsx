import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    try {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        setIsVisible(true);
      } else {
        try {
          const savedPreferences = JSON.parse(cookieConsent);
          // Validate the structure of saved preferences
          if (savedPreferences && 
              typeof savedPreferences.necessary === 'boolean' &&
              typeof savedPreferences.analytics === 'boolean' &&
              typeof savedPreferences.marketing === 'boolean') {
            setPreferences(savedPreferences);
          } else {
            // Invalid structure, clear and show banner
            localStorage.removeItem('cookieConsent');
            setIsVisible(true);
          }
        } catch (error) {
          // If JSON is invalid, clear localStorage and show banner
          localStorage.removeItem('cookieConsent');
          setIsVisible(true);
        }
      }
    } catch (error) {
      // localStorage might not be available (e.g., in private browsing)
      console.warn('localStorage not available:', error);
      setIsVisible(true);
    }
  }, []);

  const saveToLocalStorage = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    } catch (error) {
      console.warn('Failed to save cookie preferences to localStorage:', error);
      // Continue without saving - the banner will show again on next visit
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    saveToLocalStorage(allAccepted);
    setIsVisible(false);
    
    // Initialize Google Analytics if accepted
    if (allAccepted.analytics) {
      initializeGoogleAnalytics();
    }
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(necessaryOnly);
    saveToLocalStorage(necessaryOnly);
    setIsVisible(false);
  };

  const savePreferences = () => {
    saveToLocalStorage(preferences);
    setIsVisible(false);
    
    // Initialize Google Analytics if accepted
    if (preferences.analytics) {
      initializeGoogleAnalytics();
    }
  };

  const initializeGoogleAnalytics = () => {
    // This would initialize Google Analytics
    // For now, we'll just log that it would be initialized
    console.log('Google Analytics would be initialized here');
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Cookie className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cookie-Einstellungen
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Einige Cookies sind notwendig, andere helfen uns, die Website zu verbessern.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4" />
                  <span>Einstellungen</span>
                </button>
                
                <button
                  onClick={acceptNecessary}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                  <span>Nur notwendige</span>
                </button>
                
                <button
                  onClick={acceptAll}
                  className="flex items-center justify-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Check className="w-4 h-4" />
                  <span>Alle akzeptieren</span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Cookie-Einstellungen anpassen
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Notwendige Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Immer aktiv</span>
                    <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.analytics ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Werden verwendet, um Besuchern relevante Anzeigen zu zeigen.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.marketing ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                  <span>Abbrechen</span>
                </button>
                
                <button
                  onClick={savePreferences}
                  className="flex items-center justify-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Check className="w-4 h-4" />
                  <span>Einstellungen speichern</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
