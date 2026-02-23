import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/atoms/command";
import { Label } from "@/components/atoms/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import { Separator } from "@/components/atoms/separator";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import type { Table as TableType } from "@tanstack/react-table";
import { CirclePlus } from "lucide-react";
import { useEffect } from "react";
import { roles } from "../../consts";
import {
  selectfilterRole,
  selectsetFilterRole,
  useUsersStore,
} from "../../store/users-store";
import type { User } from "../../types";
import RoleIcon from "./RoleIcon";

export default function RoleFilterMenu({ table }: { table: TableType<User> }) {
  const filterRole = useUsersStore(selectfilterRole);
  const setFilterRole = useUsersStore(selectsetFilterRole);

  useEffect(() => {
    table.getColumn("role")?.setFilterValue(filterRole);
  }, [filterRole, table]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          <CirclePlus />
          <span>Role</span>
          {filterRole.length === 0 || (
            <>
              <Separator orientation="vertical" />
              <Badge variant="secondary" className="rounded-sm w-3 lg:hidden">
                {filterRole.length}
              </Badge>
              <div className="hidden lg:block space-x-1">
                {filterRole.length < 3 ? (
                  filterRole.map((filter) => (
                    <Badge variant="secondary" className="rounded-sm">
                      {capitalizeFirstLetter(filter)}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="secondary" className="rounded-sm font-normal">
                    3 selected
                  </Badge>
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-55" align="start">
        <Command>
          <CommandInput placeholder="Role" />
          <CommandGroup>
            {roles.map((role, i) => (
              <CommandItem key={role} className="py-2">
                <Checkbox
                  id={role + i}
                  checked={filterRole.includes(role)}
                  onCheckedChange={(checked) => {
                    const arr = filterRole ?? [];
                    if (checked)
                      return setFilterRole(
                        arr.includes(role) ? arr : [...arr, role],
                      );
                    return setFilterRole(arr.filter((s) => s !== role));
                  }}
                />
                <Label className="w-full" htmlFor={role + i}>
                  <RoleIcon role={role} />
                  <p>{capitalizeFirstLetter(role)}</p>
                  <p className="text-xs ml-auto">
                    {
                      table
                        .getCoreRowModel()
                        .rows.filter((row) => row.getValue("role") === role)
                        .length
                    }
                  </p>
                </Label>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        {filterRole.length === 0 || (
          <>
            <Separator />
            <Button
              variant="ghost"
              className="w-full m-1"
              size="sm"
              onClick={() => setFilterRole([])}
            >
              Clear filters
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
