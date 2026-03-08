import Button from "../ui/Button";
import Container from "../ui/Container";

function CTA({ content }) {
  return (
    <section aria-labelledby="cta-title">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-r from-primary to-cyan-500 p-8 text-primary-foreground shadow-glow md:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-orange-300/35 blur-2xl" aria-hidden="true" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 id="cta-title" className="font-display text-3xl leading-tight md:text-4xl">
                {content.title}
              </h2>
              <p className="text-sm leading-relaxed text-cyan-50 md:text-base">{content.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                href={content.primaryCta.href}
                variant="outline"
                className="border-white/45 bg-white/12 text-white hover:bg-white/20"
              >
                {content.primaryCta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="ghost"
                className="text-white hover:bg-white/14"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
