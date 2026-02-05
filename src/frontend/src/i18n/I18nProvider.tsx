import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Safely load language from localStorage with fallback to 'en'
    try {
      const stored = localStorage.getItem('brain-language');
      return (stored === 'en' || stored === 'da') ? stored : 'en';
    } catch {
      // If localStorage is unavailable, default to English
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('brain-language', lang);
    } catch {
      // Silently fail if localStorage is unavailable
    }
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key];
  };

  // Update document metadata when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].documentTitle;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18nContext() {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error('useI18nContext must be used within I18nProvider');
  }
  return context;
}
