import { cn } from "../../lib/cn";
import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-primary/50",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/6 focus-visible:ring-foreground/30",
  outline:
    "border border-border bg-card/70 text-foreground hover:border-primary/50 hover:bg-card focus-visible:ring-primary/40",
};

const sizeClasses = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

function buildClassName(variant, size, className) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className
  );
}

function getLinkSecurityProps(href) {
  const isExternalLink =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (!isExternalLink) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

function Button({
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  const classes = buildClassName(variant, size, className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...getLinkSecurityProps(href)} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
