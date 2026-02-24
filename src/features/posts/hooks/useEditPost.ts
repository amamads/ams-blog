import { databaseId } from "@/shared/consts";
import { db } from "@/shared/services/appwrite";
import type { PostRow } from "@/shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Models } from "appwrite";

export default function useEditPost() {
    const queryClient = useQueryClient();
    // return useMutation<Models.Row, Error, { rowId: string, data: Partial<Post> }>({
    return useMutation<Models.Row, Error, { rowId: string, data: Partial<PostRow> }>({
        mutationFn: ({ rowId, data }) => db.updateRow({databaseId,tableId:'posts',rowId,data}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })
}