import Post from "@/features/blog/components/Post";
import { Caption, H2, H4, P, Small } from "@/shared/components/Typography";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const Newsletter = () => {
  return (
    <div>
      <header className="py-7.5 flex-center flex-col gap-10 text-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <Caption>Newsletter</Caption>
            <H2>Stories and interviews</H2>
          </div>
          <P className="text-xl! mx-auto">
            Subscribe to learn about new product features, the latest in
            technology, <br /> solutions, and updates.
          </P>
        </div>
        <div className="grid grid-cols-[auto_1fr] justify-items-start gap-y-2 gap-x-4">
          <Input placeholder="Enter your email" className="dark:bg-foreground! w-90 h-12"/>
          <Button variant="secondary" size="secondary">
            Subscribe
          </Button>
          <Small>We care about your data in our <span className="underline">privacy policy</span></Small>
        </div>
      </header>
      <main className="py-8">
          <H4 className="col-span-2">Recent blog posts</H4>
          <div className="flex gap-12">
          <Post />
          <Post />
          <Post />
          </div>
      </main>
    </div>
  );
};
