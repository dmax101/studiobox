import { cn } from "../../lib/cn";

function Container({ as: Component = "div", className, children }) {
  return <Component className={cn("container", className)}>{children}</Component>;
}

export default Container;
