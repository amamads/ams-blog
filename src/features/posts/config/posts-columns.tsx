import { Checkbox } from "@/shared/ui/checkbox";
import type { Post, PostBadge as PostBadgeType, PostContent } from "@/shared/types";
import { type ColumnDef } from "@tanstack/react-table";
import { P } from "@/shared/components/Typography";
import formatDate from "@/shared/lib/formatDate";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router";
import { ROUTES } from "@/router/paths";
import PostBadge from "@/shared/components/PostBadge";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

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
    cell: ({ row, getValue }) => {
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
