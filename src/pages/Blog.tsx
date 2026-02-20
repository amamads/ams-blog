import PaginationBtns from "@/features/blog/components/Pagination";
import Post from "@/features/blog/components/Post";
import Post2 from "@/features/blog/components/Post2";
import PageTitle from "@/shared/components/PageTitle";
import { H4 } from "@/shared/components/Typography";
import useResponsive from "@/shared/hooks/useResponsive";
import { cn } from "@/shared/lib/utils";
import type { PropsWhitClassName } from "@/shared/types";

export const Blog = ({className}:PropsWhitClassName) => {
  const {md} = useResponsive();
  console.log(md);
  return (
    <div className={cn(className,"col-flex gap-5")}>
      <PageTitle>the blog</PageTitle>
      <main className="px-8 lg:px-0">
        <div className="py-7.5 grid gap-8 lg:grid-cols-2">
          <H4 className="lg:col-span-2">Recent blog posts</H4>
          <Post2 className="lg:row-span-2"/>
          <Post toRow={md}/>
          <Post toRow={md}/>
        </div>
        <div className="py-7.5 grid">
          <Post2 />
        </div>
        <div className="py-7.5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <H4 className="md:col-span-2 lg:col-span-3">All blog posts</H4>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <footer className="border-t pt-4 col-flex">
          <PaginationBtns pageDetails={{ pageCount: 10, currentPage: 1 }} />
        </footer>
      </main>
    </div>
  );
};
