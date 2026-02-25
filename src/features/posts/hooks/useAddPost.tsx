import { databaseId } from "@/shared/consts";
import { db } from "@/shared/services/appwrite";
import type { SendPost } from "@/shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ID, type Models } from "appwrite";

export default function useAddPost() {
  const queryClient = useQueryClient();
  return useMutation<Models.Row, Error, SendPost>({
    mutationFn: (data) =>
      db.createRow({ databaseId, tableId: "posts", data, rowId: ID.unique() }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
