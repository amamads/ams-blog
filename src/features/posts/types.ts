import type { Post } from "@/shared/types";
import type { Table } from "@tanstack/react-table";

export type PropsWithTable = { table: Table<Post> };