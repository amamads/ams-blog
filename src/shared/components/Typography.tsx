import { type JSX, type PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import type { PropsWhitClassName } from "../types";

const textStyls = {
  base: "scroll-m-20",
  h1: "font-bold uppercase text-center text-nowrap leading-none text-[clamp(3rem,18vw,250px)]",
  h2: "text-5xl font-semibold tracking-[-0.2%]",
  h3: "text-4xl font-bold leading-8",
  h4: "font-semibold text-2xl",
  h5: "text-lg md:text-xl font-semibold",
  h6: "font-bold",
  p: "text-base text-card-foreground",
  lead: "text-lg",
  small: "text-sm text-card-foreground",
  caption: "text-secondary text-sm",
} satisfies Record<string, string>;

function createTypograghy(
  tag: keyof JSX.IntrinsicElements,
  baseClass?: string,
) {
  const Tag = tag;
  return ({ children, className }: PropsWithChildren & PropsWhitClassName) => (
    <Tag className={cn(textStyls.base, className, baseClass)}>{children}</Tag>
  );
}
export const H1 = createTypograghy("h1", textStyls.h1);
export const H2 = createTypograghy("h2", textStyls.h2);
export const H3 = createTypograghy("h3", textStyls.h3);
export const H4 = createTypograghy("h4", textStyls.h4);
export const H5 = createTypograghy("h5", textStyls.h5);
export const H6 = createTypograghy("h6", textStyls.h6);
export const P = createTypograghy("p", textStyls.p);
export const Lead = createTypograghy("p", textStyls.lead);
export const Small = createTypograghy("small", textStyls.small);
export const Caption = createTypograghy("figcaption", textStyls.caption);