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
import { statuses } from "../../consts";
import {
  selectfilterStatus,
  selectsetFilterStatus,
  useUsersStore,
} from "../../store/users-store";
import type { User } from "../../types";

export default function StatusFilterMenu({
  table,
}: {
  table: TableType<User>;
}) {
  const filterStatuses = useUsersStore(selectfilterStatus);
  const setFilterStatuses = useUsersStore(selectsetFilterStatus);

  useEffect(() => {
    table.getColumn("status")?.setFilterValue(filterStatuses);
  }, [filterStatuses, table]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          <CirclePlus />
          <span>Status</span>
          {filterStatuses.length === 0 || (
            <>
              <Separator orientation="vertical" />
              <Badge variant="secondary" className="rounded-sm w-3 lg:hidden">
                {filterStatuses.length}
              </Badge>
              <div className="hidden lg:block space-x-1">
                {filterStatuses.length < 3 ? (
                  filterStatuses.map((filter) => (
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
          <CommandInput placeholder="Status" />
          <CommandGroup>
            {statuses.map((status, i) => (
              <CommandItem key={status} className="py-2">
                <Checkbox
                  id={status + i}
                  checked={filterStatuses.includes(status)}
                  onCheckedChange={(checked) => {
                    const arr = filterStatuses ?? [];
                    if (checked)
                      return setFilterStatuses(
                        arr.includes(status) ? arr : [...arr, status],
                      );
                    return setFilterStatuses(arr.filter((s) => s !== status));
                  }}
                />
                <Label className="w-full" htmlFor={status + i}>
                  <p>{capitalizeFirstLetter(status)}</p>
                  <p className="text-xs ml-auto">
                    {
                      table
                        .getCoreRowModel()
                        .rows.filter((row) => row.getValue("status") === status)
                        .length
                    }
                  </p>
                </Label>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        {filterStatuses.length === 0 || (
          <>
            <Separator />
            <Button
              variant="ghost"
              className="w-full m-1"
              size="sm"
              onClick={() => setFilterStatuses([])}
            >
              Clear filters
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
