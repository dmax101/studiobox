import { cn } from "../../lib/cn";

function SectionHeading({ pretitle, title, description, className }) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{pretitle}</p>
      <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">{title}</h2>
      <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{description}</p>
    </div>
  );
}

export default SectionHeading;
