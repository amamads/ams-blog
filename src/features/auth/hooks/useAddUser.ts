import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ID, type Models } from "appwrite";
import { databaseId } from "@/shared/consts";
import { type InitialUser } from "../types";
import { db } from "@/shared/services/appwrite";


export default function useAddUser() {
    const queryClient = useQueryClient();
    return useMutation<Models.Row, Error, InitialUser>({
        mutationFn:  (data) =>db.createRow({databaseId,tableId:'users',data,rowId:ID.unique()}) ,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })
}