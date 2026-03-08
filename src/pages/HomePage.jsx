import CTA from "../components/sections/CTA";
import Cases from "../components/sections/Cases";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import Solutions from "../components/sections/Solutions";

function HomePage({ content }) {
  return (
    <div className="space-y-24 md:space-y-28">
      <Hero content={content.hero} />
      <Solutions content={content.solutions} />
      <Process content={content.process} />
      <Cases content={content.cases} />
      <CTA content={content.cta} />
      <Contact content={content.contact} />
    </div>
  );
}

export default HomePage;
