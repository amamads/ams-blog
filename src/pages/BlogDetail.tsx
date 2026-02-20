import image3 from '@/assets/Image-4.png';
import DemoContent from "@/features/blog/components/DemoContent";
import Post from "@/features/blog/components/Post";
import Post2 from "@/features/blog/components/Post2";
import { Caption, H3, H4 } from "@/shared/components/Typography";

export const BlogDetail = () => {
  return (
    <div className="py-7.5 px-5.5 lg:px-0.5! flex gap-8">
      <div className="w-81 space-y-8 max-md:hidden">
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
        <Caption>Sunday , 1 Jan 2023</Caption>
        <H3>Grid system for better Design User Interface</H3>
        <img src={image3}/>
        <div className="col-flex gap-3">
          <DemoContent/>
          <DemoContent/>
          <DemoContent/>
        </div>
      </main>
    </div>
  );
};
