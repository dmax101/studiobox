import PrivacyPolicy from "../components/sections/PrivacyPolicy";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";

const COVER_IMAGE = `${import.meta.env.BASE_URL}dagger-dice-concept.png`;

const featureBlocks = [
  {
    title: "Duality Dice",
    icon: "🎲",
    description:
      "Roll the iconic Daggerheart Duality with a single tap. The app instantly reads the result:",
    bullets: [
      "Critical Success - both dice match (confetti)",
      "Success with Hope - Hope die is higher",
      "Success/Fail with Fear - Fear die is higher (GM gains Fear)",
    ],
  },
  {
    title: "Hope & Fear Tracking",
    icon: "⚡",
    description: "No more paper tokens or physical counters.",
    bullets: [
      "Track each player's individual Hope tokens (up to 6)",
      "Track the GM's Fear pool (up to 12)",
      "One-tap increment and decrement for both",
      "Background shifts from green to red as Fear rises",
    ],
  },
  {
    title: "D20 & Custom Dice Roller",
    icon: "🎯",
    description: "Beyond Duality, Dagger Dice includes a full-featured roller:",
    bullets: [
      "Roll a D20 for any flat check",
      "Roll multiple custom dice: d2, d4, d6, d8, d10, d12, d100",
      "Set dice quantity and type with an intuitive selector",
      "See individual roll results and totals",
    ],
  },
  {
    title: "Party Management",
    icon: "👥",
    description: "Manage your whole group in one place:",
    bullets: [
      "Add and remove players by name",
      "Switch the active player with one tap",
      "Sort players by last roll time",
      "Manage multiple parties/sessions separately",
    ],
  },
  {
    title: "Session History & Undo",
    icon: "📜",
    description: "Every roll is logged automatically:",
    bullets: [
      "Full timestamped history of Duality, D20, and custom rolls",
      "Undo the last action, including Fear gains",
      "Clear history with a session reset",
    ],
  },
  {
    title: "Built for the Table",
    icon: "📱",
    description: "Polished UX for in-session use:",
    bullets: [
      "Screen Always On option during play",
      "Optimized for one-handed portrait use",
      "Dark theme for low-light tables",
      "Smooth animations that stay out of the way",
    ],
  },
];

const languages = [
  "🇺🇸 English",
  "🇧🇷 Portugues",
  "🇪🇸 Espanol",
  "🇫🇷 Francais",
  "🇨🇳 中文",
  "🇰🇷 한국어",
  "🇯🇵 日本語",
];

const screenshotPlaceholders = [
  "Duality roll and result",
  "Hope and Fear tracker",
  "Party management and history",
  "Custom dice roller",
];

function FeatureCard({ feature }) {
  return (
    <Card className="space-y-4">
      <h3 className="font-display text-2xl leading-tight text-foreground">
        <span aria-hidden="true" className="mr-2">
          {feature.icon}
        </span>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/76 md:text-base">{feature.description}</p>
      <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-foreground/76 md:text-base">
        {feature.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Card>
  );
}

function DaggerDicePage({ privacyContent }) {
  return (
    <div className="space-y-24 md:space-y-28">
      <section id="dagger-dice" className="pt-6">
        <Container className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge>Dagger Dice</Badge>
              <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
                The ultimate companion app for Daggerheart RPG sessions
              </h1>
              <p className="text-base leading-relaxed text-foreground/74 md:text-lg">
                Available for Android · Free · No ads · No account required
              </p>

              <Card className="space-y-4 border-primary/20 bg-card/92">
                <h2 className="font-display text-2xl text-foreground">What is Dagger Dice?</h2>
                <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
                  Dagger Dice is a mobile companion app built specifically for the Daggerheart
                  tabletop roleplaying game. Designed to keep your table focused on the story,
                  not the math, it handles dice rolls, tracks Hope and Fear tokens for your entire
                  party, and keeps a log of everything that happened during your session.
                </p>
                <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
                  Whether you're the Game Master or a player, Dagger Dice fits naturally at the table.
                </p>
              </Card>
            </div>

            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-cyan-100/65 via-white to-rose-100/55 p-3">
              <img
                src={COVER_IMAGE}
                alt="Dagger Dice app presentation artwork"
                className="w-full rounded-2xl object-cover shadow-card"
              />
            </Card>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Features</p>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Built for fast, story-first sessions
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {featureBlocks.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <Card className="space-y-5 border-primary/18">
            <h2 className="font-display text-2xl text-foreground md:text-3xl">7 Languages</h2>
            <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
              Language preference is saved automatically and persists across restarts.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {languages.map((language) => (
                <div
                  key={language}
                  className="rounded-xl border border-border bg-background/65 px-4 py-3 text-sm font-medium text-foreground/82"
                >
                  {language}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section id="screenshots" className="scroll-mt-24">
        <Container className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Screenshots</p>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Add your store-ready captures here
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {screenshotPlaceholders.map((label, index) => (
              <Card
                key={label}
                className="flex aspect-[9/16] flex-col items-center justify-center border-dashed border-primary/35 bg-background/68 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/85">
                  Screenshot {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 max-w-[11rem] text-sm text-foreground/72">{label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-5 lg:grid-cols-2">
          <Card className="space-y-4">
            <h2 className="font-display text-2xl text-foreground">About</h2>
            <p className="text-sm leading-relaxed text-foreground/76 md:text-base">
              Dagger Dice is an independent fan-made project. Daggerheart is a trademark of
              Darrington Press. This app is not affiliated with or endorsed by Darrington Press.
            </p>
          </Card>

          <Card className="space-y-4">
            <h2 className="font-display text-2xl text-foreground">Links</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-foreground/76 md:text-base">
              <li>
                <a href="#privacy-policy" className="font-semibold text-primary hover:text-primary/85">
                  Privacy Policy
                </a>
              </li>
              <li>
                Contact: <a href="mailto:contact@studiobox101.com" className="font-semibold text-primary">contact@studiobox101.com</a>
              </li>
            </ul>
          </Card>
        </Container>
      </section>

      <PrivacyPolicy content={privacyContent} />

      <section>
        <Container>
          <p className="text-center text-sm text-foreground/62">
            Version 1.0 · March 2026 · Made with love for the TTRPG community
          </p>
        </Container>
      </section>
    </div>
  );
}

export default DaggerDicePage;
