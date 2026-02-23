import { Card } from "@/components/atoms/card";
import TableHeader from "../molecules/TableHeader";
import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";
import useUserTable from "../../../hooks/usePostsTable";
import Table from "@/components/Table";
import type { User } from "../../types";
import TableFooter from "../molecules/TableFooter";

export default function UserTable() {
  const { table, isLoading } = useUserTable();
  // const { table, isLoading, isError, error } = useTasksTable();

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  // if (isError)
  //   return <h1 className="text-center text-2xl font-bold">{error?.message}</h1>;

  return (
    <div className="mt-4">
      <TableHeader table={table}  />
      <main className="mt-3">
        <Card className="p-0 rounded-md w-full">
          <ScrollArea className="w-full">
            <Table<User> table={table} />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Card>
      </main>
      <TableFooter table={table} />
    </div>
  );
}
