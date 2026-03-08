import { cn } from "../../lib/cn";

function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
