import type z from "zod";
import type { schema } from "./schema";
import type { Models } from "appwrite";

export type InitialUser = z.infer<typeof schema>;
export type UserRow = InitialUser & Models.Row;
export type User = InitialUser & {id:string};