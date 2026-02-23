import { Checkbox } from "@/components/atoms/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import type { Role, Status, User } from "../types";
import { SortableHeader } from "@/components/SortableHeader";
import StatusBadge from "../components/molecules/StatusBadge";
import RoleIcon from "../components/molecules/RoleIcon";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import TableMenu from "../components/molecules/TableMenu";

export const usersColumns: ColumnDef<User>[] = [
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
    accessorKey: "username",
    header: ({ column }) => (
      <SortableHeader column={column} lable="Username" showHideOption={false} />
    ),
    cell: ({ renderValue }) => <p className="py-2">{String(renderValue())}</p>,
  },
  {
    id: "fullName",
    header: "Name",
    cell: ({ row }) => (
      <p>
        {row.getValue("firstName")} {row.getValue("lastName")}
      </p>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableHeader column={column} lable="Email" />,
  },
  {
    accessorKey: "phoneNumber",
  },
  {
    accessorKey: "status",
    cell: ({ renderValue }) => (
      <StatusBadge status={String(renderValue()) as Status} />
    ),
    filterFn: (row, columnId, filterValues: string[]) => {
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ renderValue }) => (
      <div className="flex items-center gap-2">
        <RoleIcon
          className="size-4 text-muted-foreground"
          role={String(renderValue()) as Role}
        />
        <p>{capitalizeFirstLetter(String(renderValue()))}</p>
      </div>
    ),
    filterFn: (row, columnId, filterValues: string[]) => {
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
  },
  {
    id: "menu",
    cell: ({ row }) => <TableMenu row={row} />,
  },
  { accessorKey: "firstName" },
  { accessorKey: "lastName" },
];
