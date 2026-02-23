import { useQuery } from "@tanstack/react-query";
import { db } from "../services/appwrite";
import { databaseId,tableId } from "../consts";
import type { Models } from "appwrite";
import type { InitialTodo, Todo } from "../types";

export default function useGetTodos() {
    return useQuery<Models.RowList<Models.Row & InitialTodo>,Error,Todo[]>({
        queryKey: ["todos"],
        queryFn:  () => db.listRows({databaseId,tableId}),
        select:(data)=>data.rows.map(({$id:id,isDone,text})=>({id,isDone,text}))
    })
}