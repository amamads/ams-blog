import Post from "@/features/blog/components/Post";
import Post2 from "@/features/blog/components/Post2";
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

  const { date, title, content } = data.find(
    (post) => post.id === pageId,
  ) as PostType;

  return (
    <div className="py-7.5 px-5.5 lg:px-0.5! grid md:grid-cols-[3fr_7fr] gap-8">
      <div className="space-y-8 max-md:hidden">
        <div className="py-7.5 space-y-8">
          <H4 className="">Recent blog posts</H4>
          <Post2 className="" />
          <Post />
          <Post />
        </div>
        <div className="py-7.5 grid">
          <Post2 />
        </div>
        <div className="py-7.5 col-flex gap-8">
          <H4 className="">All blog posts</H4>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <main className="space-y-8">
        <Caption>{formatDate(date)}</Caption>
        <H3>{title}</H3>
        {content.map((item) => {
          if (item.type === "text") return <P>{item.content}</P>;
          if (item.type === "image")
            return <img src={item.src} className="w-full" />;
        })}
      </main>
    </div>
    // <div className="py-7.5 px-5.5 lg:px-0.5! grid md:grid-cols-[3fr_7fr] gap-8">
    //   <div className="space-y-8 max-md:hidden">
    //     <div className="py-7.5 space-y-8">
    //       <H4 className="">Recent blog posts</H4>
    //       <Post2 className="" />
    //       <Post />
    //       <Post />
    //     </div>
    //     <div className="py-7.5 grid">
    //       <Post2 />
    //     </div>
    //     <div className="py-7.5 col-flex gap-8">
    //       <H4 className="">All blog posts</H4>
    //       <Post />
    //       <Post />
    //       <Post />
    //       <Post />
    //       <Post />
    //       <Post />
    //     </div>
    //   </div>
    //   <main className="space-y-8">
    //     <Caption>Sunday , 1 Jan 2023</Caption>
    //     <H3>Grid system for better Design User Interface</H3>
    //     <img src={image3} />
    //     <div className="col-flex gap-3">
    //       <DemoContent />
    //       <DemoContent />
    //       <DemoContent />
    //     </div>
    //   </main>
    // </div>
  );
};
