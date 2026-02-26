import CommentDialog from "@/features/blog/components/CommentDialog";
import FakePost from "@/features/blog/components/FakePost";
import FakePost2 from "@/features/blog/components/FakePost2";
import LikeBtn from "@/features/blog/components/LikeBtn";
import PageTitle from "@/shared/components/PageTitle";
import { Caption, H3, H4, P } from "@/shared/components/Typography";
import useGetPosts from "@/shared/hooks/useGetPosts";
import formatDate from "@/shared/lib/formatDate";
import type { Post as PostType } from "@/shared/types";
import { useParams } from "react-router";

export const BlogDetail = () => {
  const { blogDetail: pageId } = useParams();
  const { data, isLoading } = useGetPosts();
  if (isLoading) return <PageTitle>Loading...</PageTitle>;
  if (!data) return <PageTitle>not Fontd</PageTitle>;

  const { date, title, content, likes, id, comments } = data.find(
    (post) => post.id === pageId,
  ) as PostType;

  return (
    <div className="py-7.5 px-5.5 lg:px-0.5! grid md:grid-cols-[3fr_7fr] gap-8">
      <div className="space-y-8 max-md:hidden">
        <div className="py-7.5 space-y-8">
          <H4 className="">Recent blog posts</H4>
          <FakePost2 className="" />
          <FakePost />
          <FakePost />
        </div>
        <div className="py-7.5 grid">
          <FakePost2 />
        </div>
        <div className="py-7.5 col-flex gap-8">
          <H4 className="">All blog posts</H4>
          <FakePost />
          <FakePost />
          <FakePost />
          <FakePost />
          <FakePost />
          <FakePost />
        </div>
      </div>
      <main className="space-y-8">
        <div className="flex gap-3">
          <Caption>{formatDate(date)}</Caption>
          <LikeBtn likes={likes} rowId={id} />
          <CommentDialog comments={comments} title={title} rowId={id} />
        </div>
        <H3>{title}</H3>
        {content.map((item, i) => {
          if (item.type === "text") return <P key={i}>{item.content}</P>;
          if (item.type === "image")
            return <img key={i} src={item.src} className="w-full" />;
        })}
      </main>
    </div>
  );
};
