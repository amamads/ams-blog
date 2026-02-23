import { Input } from "@/components/atoms/input";
import type { Table as TableType } from "@tanstack/react-table";
import type { User } from "../../types";
import StatusFilterMenu from "./StatusFilterMenu";
import RoleFilterMenu from "./RoleFilterMenu";
import {
  useUsersStore,
  selectfilterRole,
  selectsetFilterRole,
  selectfilterStatus,
  selectsetFilterStatus,
} from "../../store/users-store";
import { Button } from "@/components/atoms/button";
import { X } from "lucide-react";
import { ViewColumnsDropDown } from "./ViewColumnsDropdown";

export default function TableHeader({ table }: { table: TableType<User> }) {
  const filterRole = useUsersStore(selectfilterRole);
  const setFilterRole = useUsersStore(selectsetFilterRole);
  const filterStatuses = useUsersStore(selectfilterStatus);
  const setFilterStatuses = useUsersStore(selectsetFilterStatus);

  const showResetBtn = [filterStatuses, filterRole].some(
    (filter) => filter.length > 0,
  );

  function resetFilter() {
    setFilterRole([]);
    setFilterStatuses([]);
  }

  return (
    // <header className="grid gap-2">
    //   <div className="flex flex-col items-start gap-2">
    //     {showResetBtn && (
    //       <Button variant="ghost" onClick={resetFilter}>
    //         Reset <X />
    //       </Button>
    //     )}
    //     <div className="space-x-2">
    //       <StatusFilterMenu table={table} />
    //       <RoleFilterMenu table={table} />
    //     </div>
    //   </div>
    //   <Input
    //     placeholder="Filter By Users..."
    //     className="w-35"
    //     onChange={(e) =>
    //       table.getColumn("username")?.setFilterValue(e.target.value)
    //     }
    //   />
    // </header>
    // <header className="flex flex-col gap-2 items-start sm:flex-row-reverse sm:justify-end">
    //   <div className="flex flex-col items-start gap-2">
    //     <ViewColumnsDropDown table={table}/>
    //     {showResetBtn && (
    //       <Button variant="ghost" onClick={resetFilter}>
    //         Reset <X />
    //       </Button>
    //     )}
    //     <div className="space-x-2">
    //       <StatusFilterMenu table={table} />
    //       <RoleFilterMenu table={table} />
    //     </div>
    //   </div>
    //   <Input
    //     placeholder="Filter By Users..."
    //     className="w-35"
    //     onChange={(e) =>
    //       table.getColumn("username")?.setFilterValue(e.target.value)
    //     }
    //   />
    // </header>
    <header className="flex flex-col gap-2 items-start sm:flex-row-reverse sm:justify-end">
      <ViewColumnsDropDown table={table} />
      {showResetBtn && (
        <Button variant="ghost" onClick={resetFilter}>
          Reset <X />
        </Button>
      )}
      <div className="space-x-2 flex">
        <StatusFilterMenu table={table} />
        <RoleFilterMenu table={table} />
      </div>
      <Input
        placeholder="Filter By Users..."
        className="w-35"
        onChange={(e) =>
          table.getColumn("username")?.setFilterValue(e.target.value)
        }
      />
    </header>
  );
}
