import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Header({ content, language, onLanguageChange }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-card backdrop-blur-md md:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link to="/#home" className="group inline-flex items-end gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {content.brand}
              </span>
              <span className="pb-0.5 text-xs uppercase tracking-[0.16em] text-foreground/60">
                {content.tagline}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
              {content.navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/78 transition-colors hover:bg-foreground/6 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <div className="group relative">
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/78 transition-colors hover:bg-foreground/6 hover:text-foreground"
                >
                  {content.productsMenu.label}
                </button>

                <div className="pointer-events-none absolute left-0 top-full mt-2 min-w-[13rem] rounded-xl border border-border bg-card/95 p-2 opacity-0 shadow-card transition-all group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  {content.productsMenu.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/82 transition-colors hover:bg-foreground/6 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <div className="inline-flex items-center rounded-lg border border-border bg-background/70 p-1">
                {Object.entries(content.languages).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onLanguageChange(key)}
                    className={cn(
                      "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
                      language === key
                        ? "bg-foreground text-background"
                        : "text-foreground/65 hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <Button to={content.primaryCta.to} size="md">
                {content.primaryCta.label}
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((currentValue) => !currentValue)}
            >
              <span className="sr-only">{content.menuToggleLabel}</span>
              <span className="text-lg leading-none">{isMenuOpen ? "x" : "="}</span>
            </button>
          </div>

          <div
            id="mobile-menu"
            className={cn(
              "grid transition-all duration-300 md:hidden",
              isMenuOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <nav className="flex flex-col gap-1 border-t border-border/80 pt-3" aria-label="Mobile navigation">
                {content.navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-foreground/6 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-1 border-t border-border/80 pt-3">
                  <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/56">
                    {content.productsMenu.label}
                  </p>
                  <div className="mt-1 flex flex-col gap-1">
                    {content.productsMenu.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeMobileMenu}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-foreground/6 hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/80 pt-3">
                <div className="inline-flex items-center rounded-lg border border-border bg-background/70 p-1">
                  {Object.entries(content.languages).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => onLanguageChange(key)}
                      className={cn(
                        "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
                        language === key
                          ? "bg-foreground text-background"
                          : "text-foreground/65 hover:text-foreground"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <Button to={content.primaryCta.to} size="md" className="min-w-[9rem]">
                  {content.primaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
