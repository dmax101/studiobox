import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Cases({ content }) {
  return (
    <section id="cases" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          pretitle={content.pretitle}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Card
              key={item.name}
              className="reveal flex h-full flex-col gap-4"
              style={{ "--reveal-delay": `${110 + index * 110}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                <Badge className="border-accent/30 bg-accent/10 text-accent">{item.segment}</Badge>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-foreground/75">
                <p>
                  <strong className="font-semibold text-foreground">{content.labels.challenge}:</strong>{" "}
                  {item.challenge}
                </p>
                <p>
                  <strong className="font-semibold text-foreground">{content.labels.solution}:</strong>{" "}
                  {item.solution}
                </p>
                <p>
                  <strong className="font-semibold text-foreground">{content.labels.impact}:</strong>{" "}
                  {item.impact}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/75 px-2.5 py-1 text-xs font-medium text-foreground/72"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Cases;
