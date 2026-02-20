import Post from "@/features/blog/components/Post";
import Post2 from "@/features/blog/components/Post2";
import PageTitle from "@/shared/components/PageTitle";
import { H4 } from "@/shared/components/Typography";

export const Projects = () => {
  return (
    <div>
      <PageTitle>projects</PageTitle>
      <main className="px-8 md:px-0">
        <div className="py-7.5 grid gap-8 md:grid-cols-2">
          <H4 className="col-span-2">List Projects</H4>
          <Post />
          <Post />
          <Post2 className="col-span-2" />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
};
