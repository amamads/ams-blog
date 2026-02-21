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
};

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

// const typographyStyles = {
//   base:'scroll-m-20'
// }

// function Base({
//   children,
//   className = "",
//   tag: Tag,
// }: BaseProps & {
//   tag: keyof JSX.IntrinsicElements;
// }) {
//   return <Tag className={cn("", className)}>{children}</Tag>;
// }

// export function H1({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="h1"
//       className={cn(
//         "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
//         className,
//       )}
//     >
//       {children}
//     </Base>
//   );
// }
// export function H2({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="h2"
//       className={cn(
//         "text-2xl sm:text-3xl font-semibold tracking-tight pb-1 sm:pb-2",
//         className,
//       )}
//     >
//       {children}
//     </Base>
//   );
// }
// export function H3({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="h3"
//       className={cn(
//         "text-xl sm:text-2xl font-semibold tracking-tight",
//         className,
//       )}
//     >
//       {children}
//     </Base>
//   );
// }
// export function H4({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="h4"
//       className={cn("text-lg sm:text-xl font-semibold", className)}
//     >
//       {children}
//     </Base>
//   );
// }
// export function H5({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="h5"
//       className={cn("text-base sm:text-lg font-semibold", className)}
//     >
//       {children}
//     </Base>
//   );
// }
// export function H6({ children, className }: BaseProps) {
//   return (
//     <Base tag="h6" className={cn("text-base font-semibold", className)}>
//       {children}
//     </Base>
//   );
// }

// export function TextLgLight({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="p"
//       className={cn("text-lg sm:text-lg font-light leading-relaxed", className)}
//     >
//       {children}
//     </Base>
//   );
// }
// export function P({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="p"
//       className={cn("text-base sm:text-lg leading-relaxed", className)}
//     >
//       {children}
//     </Base>
//   );
// }
// export function Small({ children, className }: BaseProps) {
//   return (
//     <Base tag="small" className={cn("text-xs sm:text-sm", className)}>
//       {children}
//     </Base>
//   );
// }
// export function Figcaption({ children, className }: BaseProps) {
//   return (
//     <Base
//       tag="figcaption"
//       className={cn("text-xs sm:text-sm text-muted-foreground", className)}
//     >
//       {children}
//     </Base>
//   );
// }
