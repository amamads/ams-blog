import useEditPost from "@/shared/hooks/useEditPost";
import { selectUser, useAuthStore } from "@/shared/store/auth-store";
import { Button } from "@/shared/ui/button";
import { Heart } from "lucide-react";
import { FaHeart } from "react-icons/fa";

export default function LikeBtn({
  likes,
  rowId,
}: {
  likes: string[];
  rowId: string;
}) {
  const user = useAuthStore(selectUser);
  const { mutate: editPost, isPending } = useEditPost();
  function likeFn() {
    if (!user) return;

    if (likes.includes(user?.username)) {
      editPost({
        rowId,
        data: {
          likes: JSON.stringify(likes.filter((name) => name !== user.username)),
        },
      });
    } else {
      editPost({
        rowId,
        data: { likes: JSON.stringify([...likes, user?.username]) },
      });
    }
  }
  return (
    <Button variant="ghost" onClick={likeFn} disabled={!user}>
      {user && likes.includes(String(user?.username)) ? (
        <FaHeart className="size-6 text-destructive" />
      ) : (
        <Heart className="size-6" />
      )}
      {isPending && <span>loading...</span>}
    </Button>
  );
}
