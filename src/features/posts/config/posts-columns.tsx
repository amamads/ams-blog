import { ROUTES } from "@/router/paths";
import PostBadge from "@/shared/components/PostBadge";
import { P } from "@/shared/components/Typography";
import formatDate from "@/shared/lib/formatDate";
import type { Post, PostBadge as PostBadgeType } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import MenuDropdown from "../components/MenuDropdown";

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
    cell: ({ row }) => {
      return (
        <Button className="px-3">
          <Link to={ROUTES.blogDetailFn(row.getValue("id"))}>Show</Link>
        </Button>
      );
    },
  },
  {
    id:'menu',
     cell: ({row})=><MenuDropdown row={row}/>
  },
  {accessorKey:'image'}
];
