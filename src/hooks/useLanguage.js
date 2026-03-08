import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "studiobox-language";
const DEFAULT_LANGUAGE = "pt";
const SUPPORTED_LANGUAGES = new Set(["pt", "en"]);

function isLanguageSupported(language) {
  return SUPPORTED_LANGUAGES.has(language);
}

export function useLanguage() {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const persistedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (persistedLanguage && isLanguageSupported(persistedLanguage)) {
      setLanguageState(persistedLanguage);
    }
  }, []);

  const setLanguage = useCallback((nextLanguage) => {
    if (!isLanguageSupported(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  return {
    language,
    setLanguage,
  };
}
