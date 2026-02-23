import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/atoms/dropdown-menu";
import type { Row } from "@tanstack/react-table";
import { Ellipsis, Trash2, UserPen } from "lucide-react";
import type { User } from "../../types";

export default function TableMenu({ row }: { row: Row<User> }) {
    // const [openDialog, setOpenDialog] = useState(false)
    console.log(row);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <p className="font-semibold">Edit</p>
          <UserPen className="size-4 text-muted-foreground ml-auto"/>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <p className="text-chart-5 font-semibold">Delete</p>
          <Trash2 className="size-4 text-muted-foreground ml-auto"/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
