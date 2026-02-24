import { useMutation, useQueryClient } from "@tanstack/react-query";
import { databaseId } from "@/shared/consts";
import { db } from "@/shared/services/appwrite";

export default function useDeletePost() {
    const queryClient = useQueryClient();
    return useMutation<void, Error, string>({
        mutationFn:  async(rowId) => { await db.deleteRow({databaseId,tableId:'posts',rowId})},
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })
}