import { useQuery } from "@tanstack/react-query";
import { Query, type Models } from "appwrite";
import { databaseId } from "../consts";
import { db } from "../services/appwrite";
import type { Post, PostBadge, PostContent, PostRow } from "../types";

export default function useGetPosts() {
  return useQuery<Models.RowList<PostRow>, Error, Post[]>({
    queryKey: ["posts"],
    queryFn: async () =>
      await db.listRows({
        databaseId,
        tableId:'posts',
        queries: [Query.limit(100)],
      }),
    select: (data) =>
      data.rows.map(
        ({ $id: id, title, date, badges, description, image, content }) => ({
          id,
          title,
          date,
          description,
          image,
          badges: badges.split("|") as PostBadge[],
          content: JSON.parse(content) as PostContent[],
        }),
      ),
  });
}
