import { Caption, H4, P, Small } from "@/shared/components/Typography";
import useEditPost from "@/shared/hooks/useEditPost";
import useInput from "@/shared/hooks/useInput";
import formatDate from "@/shared/lib/formatDate";
import { selectUser, useAuthStore } from "@/shared/store/auth-store";
import type { PostComment } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Separator } from "@/shared/ui/separator";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function CommentDialog({
  comments,
  title,
  rowId,
}: {
  comments: PostComment[];
  title: string;
  rowId: string;
}) {
  const user = useAuthStore(selectUser);
  const { value: inputComment, attr, setValue } = useInput();
  const { mutate: editPost, isPending } = useEditPost();
  const [error, setError] = useState<Error | undefined>(undefined);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputComment.trim()) return;

    const newComment: PostComment = {
      username: user?.username as string,
      comment: inputComment,
      createdAt: new Date().toISOString(),
    };
    editPost(
      {
        rowId,
        data: { comments: JSON.stringify([...comments, newComment]) },
      },
      {
        onSuccess: () => {
          setValue("");
        },
        onError: (err) => {
          setError(err);
        },
      },
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <MessageCircle className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="col-flex gap-5">
        <H4>{title}</H4>
        <Separator />
        <main className="overflow-auto space-y-5  max-h-[60vh]">
          {comments.map(({ comment, createdAt, username }) => (
            <>
              <div className="flex gap-3 px-3">
                <P>{username}:</P>
                <P>{comment}</P>
                <Caption className="ml-auto">{formatDate(createdAt)}</Caption>
              </div>
              <Separator className="last:hidden" />
            </>
          ))}
        </main>
        <Separator />
        <form className="relative" onSubmit={onSubmit}>
          <Input className="mt-auto" placeholder="Write a comment" {...attr} />

          <button
            className=" disabled:pointer-events-none disabled:opacity-50 bg-chart-1 py-1 px-2 rounded-lg absolute right-1 bottom-1/2 translate-y-1/2"
            disabled={!user}
            type="submit"
          >
            {isPending ? <span>Loading...</span> : <Send className="size-5" />}
            {error && (
              <Small className="text-destructive">{error.message}</Small>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
