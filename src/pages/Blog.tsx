import PaginationBtns from "@/features/blog/components/Pagination";
import Post from "@/features/blog/components/Post";
import Post2 from "@/features/blog/components/Post2";
import { H1, H4 } from "@/shared/components/Typography";
import useResponsive from "@/shared/hooks/useResponsive";

export const Blog = () => {
  const {sm} = useResponsive();
  return (
    <div className="col-flex gap-5 md:px-28">
      <header className="border-t border-b border-foreground">
        <H1>the blog</H1>
      </header>
      <main className="px-8 md:px-0">
        <div className="py-7.5 grid gap-8 md:grid-cols-2">
          <H4 className="col-span-2">Recent blog posts</H4>
          <Post2 className="row-span-2"/>
          <Post toRow={sm}/>
          <Post toRow={sm}/>
        </div>
        <div className="py-7.5 grid">
          <Post2 />
        </div>
        <div className="py-7.5 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <H4 className="sm:col-span-2 md:col-span-3">All blog posts</H4>
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
      {/* <main className="px-8 md:px-0">
        <div className="py-7.5 grid gap-8">
          <H4>Recent blog posts</H4>
          <Post2 />
          <Post toRow={sm}/>
          <Post toRow={sm}/>
        </div>
        <div className="py-7.5 grid">
          <Post2 />
        </div>
        <div className="py-7.5 grid gap-8 sm:grid-cols-2">
          <H4 className="sm:col-span-2">All blog posts</H4>
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
      </main> */}
      {/* <main className="px-8">
        <div className="py-7.5 col-flex gap-8">
          <H4>Recent blog posts</H4>
          <Post />
          <Post />
          <Post />
        </div>
        <div className="py-7.5">
          <Post />
        </div>
        <div className="py-7.5 col-flex gap-8">
          <H4>All blog posts</H4>
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
      </main> */}
    </div>
  );
};
