import FakePost from "@/features/blog/components/FakePost";
import FakePost2 from "@/features/blog/components/FakePost2";
import PageTitle from "@/shared/components/PageTitle";
import { H4 } from "@/shared/components/Typography";

export const Projects = () => {
  return (
    <div className="space-y-15">
      <PageTitle>projects</PageTitle>
      <main className="grid gap-8 md:grid-cols-2 max-lg:px-5">
        <H4 className="md:col-span-2">List Projects</H4>
        <FakePost />
        <FakePost />
        <FakePost2 className="md:col-span-2" />
        <FakePost />
        <FakePost />
      </main>
    </div>
  );
};
