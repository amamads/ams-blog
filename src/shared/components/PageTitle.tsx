import { type PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import type { PropsWhitClassName } from "../types";
import { H1 } from "./Typography";

export default function PageTitle({
  className,
  titleClassName,
  children,
}: PropsWithChildren & PropsWhitClassName & { titleClassName?: string }) {
  return (
    <header className={cn(className, "border-t border-b border-foreground flex-center")}>
      <H1 className={titleClassName}>{children}</H1>
    </header>
  );
}
