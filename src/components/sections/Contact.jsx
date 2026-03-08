import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Contact({ content }) {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          pretitle={content.pretitle}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.channels.map((channel, index) => (
              <Card
                key={channel.title}
                className="reveal flex h-full flex-col justify-between gap-4"
                style={{ "--reveal-delay": `${120 + index * 120}ms` }}
              >
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-foreground">{channel.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/74">{channel.description}</p>
                </div>
                <Button href={channel.href} variant="primary">
                  {channel.label}
                </Button>
              </Card>
            ))}
          </div>

          <Card className="reveal border-primary/20 bg-gradient-to-br from-white via-cyan-50/65 to-orange-50/70">
            <h3 className="font-display text-xl text-foreground">{content.panelTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/78">
              {content.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/8 p-4 text-sm text-foreground/80">
              <p className="font-semibold text-foreground">StudioBox</p>
              <p className="mt-1">{content.panelSummary}</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
