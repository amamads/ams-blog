import { H4, P } from "@/shared/components/Typography";
import type { Post, PostContent } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import type { Row } from "@tanstack/react-table";
import EditSheet from "./EditSheet";

export default function EditDialog({ row }: { row: Row<Post> }) {
  const content: PostContent[] = row.getValue("content");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent
        className="h-3/4 w-screen"
        style={{ maxWidth: "95vw", width: "60vw" }}
      >
        <DialogTitle>
          <H4>Edit post</H4>
        </DialogTitle>

        <main className="overflow-auto col-flex gap-3">
          {content.map((item) => (
            <div className="flex justify-between gap-5 text-center">
              <Badge>{item.type}</Badge>
              {item.type === "text" ? (
                <P className="line-clamp-3">{item.content}</P>
              ) : (
                <div className="col-flex space-y-2">
                  <img src={item.src} />
                  <P>
                    <span className="font-bold text-foreground">Alt: </span>
                    {item.alt}
                  </P>
                </div>
              )}
              <EditSheet row={row} />
            </div>
          ))}
        </main>
      </DialogContent>
    </Dialog>
  );
}
