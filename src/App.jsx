import { useEffect, useMemo } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CTA from "./components/sections/CTA";
import Cases from "./components/sections/Cases";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Solutions from "./components/sections/Solutions";
import { siteContent } from "./content/siteContent";
import { useLanguage } from "./hooks/useLanguage";

const SUPPORTED_LANGUAGES = new Set(["pt", "en"]);

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

      <Header
        content={content.header}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main id="main-content" className="space-y-24 pb-24 pt-10 md:space-y-28">
        <Hero content={content.hero} />
        <Solutions content={content.solutions} />
        <Process content={content.process} />
        <Cases content={content.cases} />
        <CTA content={content.cta} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
}

export default App;
