import capitalize, { cn } from "@/shared/lib/utils";
import type { PropsWhitClassName } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { H4 } from "../../Typography";
import { navbarItems } from "../consts";
import ThemeButton from "./ThemeButton";

export default function MenuSheet({ className }: PropsWhitClassName) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent
          showCloseButton={false}
          className={cn(
            "w-[101vw]! inset-0 flex-center bg-card text-card-foreground",
          )}
        >
          <H4>Your Name</H4>

          <div className="col-flex gap-5 items-center">
            {navbarItems.map(({ title, path }) => (
              <Button variant="ghost" size="lg" onClick={() => setOpen(false)}>
                <Link to={path}>{capitalize(title)}</Link>
              </Button>
            ))}
            <ThemeButton />
          </div>

          <SheetClose asChild>
            <X className="size-8 absolute bottom-5" />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
