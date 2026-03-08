import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Process({ content }) {
  return (
    <section id="process" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          pretitle={content.pretitle}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {content.steps.map((step, index) => (
            <Card
              key={step.title}
              className="reveal relative border-primary/15 bg-card/92"
              style={{ "--reveal-delay": `${100 + index * 110}ms` }}
            >
              <span
                className="absolute right-5 top-5 font-display text-4xl text-primary/15"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <h3 className="pr-12 font-display text-xl leading-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/74">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
