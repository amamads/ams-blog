import { cn } from "@/shared/lib/utils";
import type { PropsWhitClassName } from "@/shared/types";
import { footerItems } from "./consts";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router";
import { Lead } from "../Typography";

export default function Footer({ className }: PropsWhitClassName) {
  return (
    <footer className={cn(className, "col-flex gap-7.5 py-7.5 items-center md:flex-row-reverse md:justify-end md:px-8 md:gap-3.5")}>
      <div className="col-flex gap-3.5 px-8 md:flex-row md:p-0">
        {footerItems.map(({ title, path }) => (
          <Button variant="ghost" size="lg" key={title}>
            <Link to={path}>{title}</Link>
          </Button>
        ))}
      </div>
      <Lead>© 2023</Lead>
    </footer>
  );
}
