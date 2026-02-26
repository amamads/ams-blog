import useGetPosts from "@/shared/hooks/useGetPosts";
import type { Post } from "@/shared/types";
import type { RowSelectionState, VisibilityState } from "@tanstack/react-table";
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { postsColumns } from "../config/posts-columns";

export default function usePostsTable() {
  const { data: posts, isLoading, isError, error } = useGetPosts();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  // const [pagination, setPagination] = useState({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    image: false,
  });

  const table = useReactTable({
    data: (posts as Post[]) ?? [],
    columns: postsColumns,
    getCoreRowModel: getCoreRowModel(),

    columnResizeMode: "onChange",
    enableColumnResizing: true,

    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,

    // getPaginationRowModel: getPaginationRowModel(),
    // onPaginationChange: setPagination,

    onRowSelectionChange: setRowSelection,

    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      globalFilter,
      columnFilters,
      // pagination,
      rowSelection,
      columnVisibility,
    },
  });

  return {
    table,
    isLoading,
    isError,
    error,
  };
}
