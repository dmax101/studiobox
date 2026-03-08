import Container from "../ui/Container";
import { Link } from "react-router-dom";

function Footer({ content }) {
  return (
    <footer className="border-t border-border/80 bg-background/90 py-10">
      <Container className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-end">
        <div className="space-y-3">
          <p className="font-display text-xl text-foreground">StudioBox</p>
          <p className="max-w-xl text-sm leading-relaxed text-foreground/70">{content.summary}</p>
        </div>

        <div className="space-y-4 md:text-right">
          <nav className="flex flex-wrap gap-4 text-sm text-foreground/75 md:justify-end" aria-label="Footer navigation">
            {content.navigation.map((item) => (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-foreground/60">{content.legal}</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
