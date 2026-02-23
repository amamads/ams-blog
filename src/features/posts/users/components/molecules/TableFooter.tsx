import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import type { Table as TableType } from "@tanstack/react-table";
import type { User } from "../../types";
import PaginationBtns from "./PaginationBtns";

export default function TableFooter({ table }: { table: TableType<User> }) {
  const defaultPageSize = table.getState().pagination.pageSize;

  const pageSizes = [10, 20, 30, 40, 50];

  if (!pageSizes.includes(defaultPageSize)) {
    pageSizes.push(defaultPageSize);
    pageSizes.sort((a, b) => a - b);
  }

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    <footer className="grid w-full justify-items-center mt-4 gap-3">
      <PaginationBtns table={table} pageDetails={{pageCount,currentPage}} />
      <div className="flex items-center justify-between w-full">
        <p className="text-nowrap">
          Page {currentPage} of {pageCount}
        </p>
        <Select
          onValueChange={(e) => table?.setPageSize(Number(e))}
          value={String(defaultPageSize)}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={table?.getState().pagination.pageSize ?? "?"}
            />
          </SelectTrigger>
          <SelectContent>
            {pageSizes.map((size, i) => (
              <SelectItem key={i} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </footer>
  );
}
