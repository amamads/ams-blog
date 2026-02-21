import { ROUTES } from "@/router/paths";
import { Caption, H4, P } from "@/shared/components/Typography";
import formatDate from "@/shared/lib/formatDate";
import { cn } from "@/shared/lib/utils";
import type { Post, PropsWhitClassName } from "@/shared/types";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import PostBadge from "./PostBadge";

export default function MainPost({
  className,
  toRow,
  data: { title, date, badges, description, image, id },
}: PropsWhitClassName & { toRow?: boolean; data: Post }) {
  return (
    <Link
      className={cn(className, "col-flex gap-6", toRow && "flex-row")}
      to={ROUTES.blogDetailFn(id)}
    >
      <header className="h-50 min-w-80">
        <img src={image} className="size-full object-cover object-center" alt={description}/>
      </header>
      <main className="col-flex gap-6">
        <div className="col-flex gap-3">
          <Caption>{formatDate(date)}</Caption>
          <div className="flex justify-between">
            <H4>{title}</H4>
            <ArrowUpRight />
          </div>
          <P>{description}</P>
        </div>
        <footer className="flex gap-2">
          {badges.map((badge,i)=><PostBadge key={i} title={badge}/>)}
          {/* <Button variant="purple" size="special">
            Design
          </Button>
          <Button variant="blue" size="special">
            Research
          </Button>
          <Button variant="red" size="special">
            Presentation
          </Button> */}
        </footer>
      </main>
    </Link>
  );
}
