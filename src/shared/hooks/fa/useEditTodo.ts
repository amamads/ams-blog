import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Models } from "appwrite";
import { databaseId, tableId } from "../consts";
import { db } from "../services/appwrite";
import { type InitialTodo } from "../types";

export default function useEditTodo() {
    const queryClient = useQueryClient();
    return useMutation<Models.Row, Error, { rowId: string, data: Partial<InitialTodo> }>({
        mutationFn: ({ rowId, data }) => db.updateRow({databaseId,tableId,rowId,data}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}