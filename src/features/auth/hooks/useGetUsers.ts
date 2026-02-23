import { databaseId } from "@/shared/consts";
import { db } from "@/shared/services/appwrite";
import { useQuery } from "@tanstack/react-query";
import { type Models } from "appwrite";
import type { User, UserRow } from "../types";

export default function useGetUsers() {
  return useQuery<Models.RowList<UserRow>, Error, User[]>({
    queryKey: ["users"],
    queryFn: async () =>
      await db.listRows({
        databaseId,
        tableId:'users',
        // queries: [Query.limit(100)],
      }),
    select: (data) =>
      data.rows.map(
        ({ $id: id, username,password }) => ({
          id,username,password
        }),
      ),
  });
}
