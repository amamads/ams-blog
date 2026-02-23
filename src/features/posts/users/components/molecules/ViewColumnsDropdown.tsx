import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import type { Table as TableType } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";
import type { User } from "../../types";

export const ViewColumnsDropDown = ({ table }: { table: TableType<User> }) => {
  const dropdownColumnsIds = ['email','phoneNumber'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto hidden lg:flex">
          <Settings2 />
          <p>View</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) =>
            dropdownColumnsIds.some((columnId) => columnId === column.id),
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              id={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
