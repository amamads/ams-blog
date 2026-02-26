import { ROUTES } from "@/router/paths";
import { Caption, H4, P } from "@/shared/components/Typography";
import formatDate from "@/shared/lib/formatDate";
import { cn } from "@/shared/lib/utils";
import type { Post, PropsWhitClassName } from "@/shared/types";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import PostBadge from "../../../shared/components/PostBadge";
import CommentDialog from "./CommentDialog";
import LikeBtn from "./LikeBtn";

export default function Post({
  className,
  toRow,
  data: { title, date, badges, description, image, id, likes, comments },
}: PropsWhitClassName & { toRow?: boolean; data: Post }) {

  return (
    <div className={cn(className, "col-flex gap-6", toRow && "flex-row")}>
      <header className="h-50 min-w-80">
        <Link to={ROUTES.blogDetailFn(id)}>
          <img
            src={image}
            className="size-full object-cover object-center"
            alt={description}
          />
        </Link>
      </header>
      <main className="col-flex gap-6">
        <Link to={ROUTES.blogDetailFn(id)}>
          <div className="col-flex gap-3">
            <Caption>{formatDate(date)}</Caption>
            <div className="flex justify-between">
              <H4>{title}</H4>
              <ArrowUpRight />
            </div>
            <P>{description}</P>
          </div>
        </Link>
        <footer className="flex gap-2">
          <div className="space-x-2">
            {badges.map((badge, i) => (
              <PostBadge key={i} title={badge} />
            ))}
          </div>

          <LikeBtn likes={likes} rowId={id} />
          <CommentDialog comments={comments} title={title} rowId={id} />
        </footer>
      </main>
    </div>
  );
}
