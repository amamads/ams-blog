import { useMutation, useQueryClient } from "@tanstack/react-query";
import { databaseId, tableId } from "../consts";
import { db } from "../services/appwrite";


export default function useDeleteTodo() {
    const queryClient = useQueryClient();
    return useMutation<void, Error, string>({
        // mutationFn:  (rowId) => {db.deleteRow(databaseId,tableId,rowId)},
        mutationFn:  async(rowId) => { await db.deleteRow(databaseId,tableId,rowId)},
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}