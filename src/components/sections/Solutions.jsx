import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Solutions({ content }) {
  return (
    <section id="solutions" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          pretitle={content.pretitle}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Card
              key={item.title}
              className="reveal space-y-5"
              style={{ "--reveal-delay": `${120 + index * 120}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">{item.tag}</p>
              <h3 className="font-display text-2xl leading-tight text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/72">{item.description}</p>

              <ul className="space-y-2 pt-2 text-sm text-foreground/80">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
