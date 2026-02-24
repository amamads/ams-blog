import type { Post } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import type { Row } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import DeleteDialog from "./DeleteDialog";
// import EditDialog from "./EditDialog";
import EditDialog from "./EditDialog";
import EditContentSheet from "./EditContentSheet";

export default function MenuDropdown({ row }: { row: Row<Post> }) {
  const id = row.getValue("id") as string;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <EditDialog row={row}/>
        <EditContentSheet row={row} />
        <DeleteDialog id={id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
