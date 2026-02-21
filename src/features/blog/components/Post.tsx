import image from "@/assets/Image.png";
import { Caption, H4, P } from "@/shared/components/Typography";
import { cn } from "@/shared/lib/utils";
import type { PropsWhitClassName } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function Post({
  className,toRow,
}: PropsWhitClassName & { toRow?: boolean }) {
  return (
    <Link className={cn(className, "col-flex gap-6", toRow && "flex-row")} to='/blog/demo'>
      <header className="h-50 min-w-80">
        <img src={image} className="size-full object-cover object-center" />
      </header>
      <main className="col-flex gap-6">
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
    </Link>
    // <div className={cn(className, "col-flex gap-6", toRow && "flex-row")} onClick={()=>console.log('ahasfd')}>
    //   <header className="h-50 min-w-80">
    //     <img src={image} className="size-full object-cover object-center" />
    //   </header>
    //   <main className="col-flex gap-6">
    //     <div className="col-flex gap-3">
    //       <Caption>Sunday , 1 Jan 2023</Caption>
    //       <div className="flex justify-between">
    //         <H4>UX review presentations</H4>
    //         <ArrowUpRight />
    //       </div>
    //       <P>
    //         How do you create compelling presentations that wow your colleagues
    //         and impress your managers?
    //       </P>
    //     </div>
    //     <footer className="flex gap-2">
    //       <Button variant="purple" size="special">
    //         Design
    //       </Button>
    //       <Button variant="blue" size="special">
    //         Research
    //       </Button>
    //       <Button variant="red" size="special">
    //         Presentation
    //       </Button>
    //     </footer>
    //   </main>
    // </div>
  );
}
