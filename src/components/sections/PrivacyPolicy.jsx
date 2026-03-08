import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function PolicyBlock({ section }) {
  return (
    <article className="space-y-3 border-b border-border/80 pb-7 last:border-b-0 last:pb-0">
      <h3 className="font-display text-xl leading-tight text-foreground md:text-2xl">{section.title}</h3>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-sm leading-relaxed text-foreground/76 md:text-base">
          {paragraph}
        </p>
      ))}

      {section.bullets?.length ? (
        <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-foreground/76 md:text-base">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {section.email ? (
        <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
          <a
            href={`mailto:${section.email}`}
            className="font-semibold text-primary transition-colors hover:text-primary/85"
          >
            {section.email}
          </a>
        </p>
      ) : null}
    </article>
  );
}

function PrivacyPolicy({ content }) {
  return (
    <section id="privacy-policy" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          pretitle={content.pretitle}
          title={content.title}
          description={content.description}
        />

        <Card className="space-y-8 p-6 md:p-10">
          <div className="space-y-7">
            {content.sections.map((section) => (
              <PolicyBlock key={section.title} section={section} />
            ))}
          </div>

          <p className="border-t border-border/80 pt-5 text-xs uppercase tracking-[0.12em] text-foreground/58">
            {content.lastUpdatedLabel}: {content.lastUpdatedValue}
          </p>
        </Card>
      </Container>
    </section>
  );
}

export default PrivacyPolicy;
