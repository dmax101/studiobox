import { useEffect, useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { siteContent } from "./content/siteContent";
import { useLanguage } from "./hooks/useLanguage";
import DaggerDicePage from "./pages/DaggerDicePage";
import HomePage from "./pages/HomePage";

const SUPPORTED_LANGUAGES = new Set(["pt", "en"]);

function HashScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const elementId = decodeURIComponent(location.hash.slice(1));
    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  return null;
}

function SiteLayout({ content, language, onLanguageChange }) {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(20,184,166,0.2),transparent_40%),radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(245,247,250,0.94))]"
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        {content.meta.skipToContentLabel}
      </a>

      <Header content={content.header} language={language} onLanguageChange={onLanguageChange} />

      <main id="main-content" className="pb-24 pt-10">
        <HashScrollRestoration />
        <Routes>
          <Route path="/" element={<HomePage content={content} />} />
          <Route
            path="/products/dagger-dice"
            element={<DaggerDicePage privacyContent={content.privacyPolicy} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer content={content.footer} />
    </div>
  );
}

function App() {
  const { language, setLanguage } = useLanguage();
  const content = useMemo(() => siteContent[language] ?? siteContent.pt, [language]);

  useEffect(() => {
    document.title = content.meta.title;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [content.meta.title, language]);

  const handleLanguageChange = (nextLanguage) => {
    if (!SUPPORTED_LANGUAGES.has(nextLanguage)) {
      return;
    }

    setLanguage(nextLanguage);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteLayout content={content} language={language} onLanguageChange={handleLanguageChange} />
    </BrowserRouter>
  );
}

export default App;
