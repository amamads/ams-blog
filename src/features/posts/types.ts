import type { Post } from "@/shared/types";
import type { Table } from "@tanstack/react-table";
import type { Control, FieldValues, Path } from "react-hook-form";

export type PropsWithTable = { table: Table<Post> };
export interface FieldFormProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}