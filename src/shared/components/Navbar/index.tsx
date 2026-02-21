import capitalize, { cn } from "@/shared/lib/utils";
import { H4 } from "../Typography";
import type { PropsWhitClassName } from "@/shared/types";
import MenuSheet from "./components/MenuSheet";
import { Link, useLocation } from "react-router";
import ThemeButton from "./components/ThemeButton";
import { navbarItems } from "./consts";
import { Button } from "@/shared/ui/button";

export default function Navbar({ className }: PropsWhitClassName) {
  const { pathname } = useLocation();
  return (
    <nav
      className={cn(className, "w-full p-5 lg:px-0! flex justify-between items-center")}
    >
      <H4 className="text-nowrap">Your Name</H4>
      <MenuSheet className="md:hidden" />

      <div className="max-md:hidden flex items-center gap-3.5">
        {navbarItems.map(({ title, path }) => (
          <Button
          key={title}
            variant="ghost"
            size="lg"
            className={cn(
              "rounded-none p-0 m-2",
              pathname === path && "border-b border-foreground font-bold",
            )}
           >
            <Link to={path}>{capitalize(title)}</Link>
          </Button>
        ))}
        <ThemeButton />
      </div>
    </nav>
  );
}
