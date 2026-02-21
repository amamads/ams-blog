import MainPost from "@/features/blog/components/MainPost";
import PaginationBtns from "@/features/blog/components/Pagination";
import PageTitle from "@/shared/components/PageTitle";
import { H4 } from "@/shared/components/Typography";
import useGetPosts from "@/shared/hooks/useGetPosts";
import useResponsive from "@/shared/hooks/useResponsive";
import { cn } from "@/shared/lib/utils";
import type { Post as PostType, PropsWhitClassName } from "@/shared/types";

export const Blog = ({ className }: PropsWhitClassName) => {
  const { md } = useResponsive();
  const { data, isLoading } = useGetPosts();
  if (isLoading) return <PageTitle>Loading...</PageTitle>;
  if (!data) return <PageTitle>not Fontd</PageTitle>;

  return (
    <div className={cn(className, "col-flex gap-5")}>
      <PageTitle>the blog</PageTitle>
      <main className="px-8 lg:px-0">
        <div className="py-7.5 grid gap-8 lg:grid-cols-2">
          <H4 className="lg:col-span-2">Recent blog posts</H4>
          <MainPost data={data[0]} className="lg:row-span-2"/>
          <MainPost data={data[1]} toRow={md}/>
          <MainPost data={data[2]} toRow={md}/>
        </div>
        <div className="py-7.5 grid">
          <MainPost data={data[3]}/>
        </div>
        <div className="py-7.5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <H4 className="md:col-span-2 lg:col-span-3">All blog posts</H4>
          {data.slice(4,10).map((data) => (
          <MainPost data={data as PostType} key={data.id} />
        ))}
        </div>

        <footer className="border-t pt-4 col-flex">
          <PaginationBtns pageDetails={{ pageCount: 10, currentPage: 1 }} />
        </footer>
      </main>
    </div>
  );
};
