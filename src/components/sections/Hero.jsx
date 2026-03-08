import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

function Hero({ content }) {
  return (
    <section id="home" className="relative pt-8">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-7">
          <Badge>{content.pretitle}</Badge>

          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={content.primaryCta.href} size="lg">
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="outline" size="lg">
              {content.secondaryCta.label}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {content.highlights.map((item, index) => (
              <Card
                key={item.label}
                className="reveal p-4"
                style={{ "--reveal-delay": `${120 + index * 100}ms` }}
              >
                <p className="font-display text-2xl text-foreground">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-foreground/58">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-3xl border-primary/20 bg-gradient-to-br from-cyan-100/60 via-white to-orange-100/60 p-7">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-accent/30 blur-2xl" aria-hidden="true" />

          <div className="relative space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Blueprint</p>
            <h2 className="font-display text-2xl leading-tight text-foreground">{content.spotlight.title}</h2>

            <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
              {content.spotlight.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-200 shadow-card">
              <p>
                <span className="text-cyan-300">const</span> roadmap = {"{"}
              </p>
              <p className="pl-4 text-slate-300">strategy: "validated",</p>
              <p className="pl-4 text-slate-300">delivery: "incremental",</p>
              <p className="pl-4 text-slate-300">scale: "ready"</p>
              <p>{"}"};</p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default Hero;
