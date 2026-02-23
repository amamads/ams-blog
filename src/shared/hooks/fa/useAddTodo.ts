import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ID, type Models } from "appwrite";
import { databaseId, tableId } from "../consts";
import { db } from "../services/appwrite";
import { type InitialTodo } from "../types";


export default function useAddTodo() {
    const queryClient = useQueryClient();
    return useMutation<Models.Row, Error, InitialTodo>({
        mutationFn:  (data) =>db.createRow({databaseId,tableId,data,rowId:ID.unique()}) ,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}