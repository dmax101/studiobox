import { cn } from "../../lib/cn";

function Card({ as: Component = "article", className, children }) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-border/80 bg-card/88 p-6 shadow-card backdrop-blur-sm",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Card;
