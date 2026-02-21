import image from "@/assets/Image-4.png";
import { Caption, H4, P } from "@/shared/components/Typography";
import { cn } from "@/shared/lib/utils";
import type { PropsWhitClassName } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Post2({ className }: PropsWhitClassName) {
  return (
    <div className={cn(className, "col-flex gap-6 md:gap-8")}>
      <header className="sm:max-h-57">
        <img src={image} className="size-full object-cover object-center" />
      </header>
      <main className="col-flex gap-3 md:gap-6">
        <div className="col-flex gap-3">
        <Caption>Sunday , 1 Jan 2023</Caption>
        <div className="flex justify-between">
          <H4>UX review presentations</H4>
          <ArrowUpRight />
        </div>
        <P>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </P>
        </div>
      <footer className="flex gap-2">
       
          <Badge variant='purple'>Design</Badge>
        <Badge variant='blue'>Research</Badge>
          <Badge variant='red'>Presentation</Badge>
      </footer>
      </main>
    </div>
    // <div className={cn(className, "col-flex gap-6")}>
    //   <header className="sm:max-h-57">
    //     <img src={image} className="size-full object-cover object-center" />
    //   </header>
    //   <main className="col-flex gap-3">
    //     <Caption>Sunday , 1 Jan 2023</Caption>
    //     <div className="flex justify-between">
    //       <H4>UX review presentations</H4>
    //       <ArrowUpRight />
    //     </div>
    //     <P>
    //       How do you create compelling presentations that wow your colleagues
    //       and impress your managers?
    //     </P>
    //   </main>
    //   <footer className="flex gap-2">
    //     <Button variant="purple" size="special">
    //       Design
    //     </Button>
    //     <Button variant="blue" size="special">
    //       Research
    //     </Button>
    //     <Button variant="red" size="special">
    //       Presentation
    //     </Button>
    //   </footer>
    // </div>
  );
}
