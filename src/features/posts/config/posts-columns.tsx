import PostBadge from "@/shared/components/PostBadge";
import { P } from "@/shared/components/Typography";
import formatDate from "@/shared/lib/formatDate";
import type { Post, PostBadge as PostBadgeType } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { type ColumnDef } from "@tanstack/react-table";

export const postsColumns: ColumnDef<Post>[] = [
  {
    id: "checkbox",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => (
      <P className="text-foreground! truncate w-20">{String(getValue())}</P>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ getValue }) => (
      <P className="text-foreground! truncate w-40">{String(getValue())}</P>
    ),
  },
  {
    accessorKey: "description",
    header: "description",
    cell: ({ getValue }) => (
      <P className="text-foreground! truncate w-40">{String(getValue())}</P>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => (
      <P className="text-foreground!">{formatDate(String(getValue()))}</P>
    ),
  },
  {
    accessorKey: "badges",
    header: "Badges",
    cell: ({ getValue }) => (
      <div className="space-x-1">
        {(getValue() as PostBadgeType[]).map((badge, i) => (
          <PostBadge key={i} title={badge} />
        ))}
      </div>
    ),
  },
  {
    
    accessorKey: "content",
    header: "Content",
    cell: () => {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="px-3">Show
            </Button>
          </PopoverTrigger>
          <PopoverContent className="h-40 overflow-auto">
            {/* <p>{JSON.stringify(getValue(),null,2)}</p> */}
          </PopoverContent>
        </Popover>
      );
    },
    // cell: ({ row }) => (
    //   <Button className="px-3">
    //     <Link to={ROUTES.blogDetailFn(row.getValue("id"))}>get Page</Link>
    //   </Button>
    // ),
  },
];
