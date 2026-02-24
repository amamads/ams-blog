import { H4, P } from "@/shared/components/Typography";
import type { Post, PostContent } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import type { Row } from "@tanstack/react-table";
import EditContentDialog from "./EditContentDialog";

export default function EditContentSheet({ row }: { row: Row<Post> }) {
  const content: PostContent[] = row.getValue("content");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit Content
        </DropdownMenuItem>
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        side="left"
        className="min-w-[50vw] p-5"
      >
        <H4>Edit post</H4>

        <main className="overflow-auto col-flex gap-3">
          {content.map((item,i) => (
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
              <EditContentDialog row={row} data={item} index={i}/>
            </div>
          ))}
        </main>
      </SheetContent>
    </Sheet>
  );
}
