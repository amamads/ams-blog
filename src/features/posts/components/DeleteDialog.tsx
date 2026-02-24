import { H4 } from "@/shared/components/Typography";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { useState, type MouseEvent } from "react";
import useDeletePost from "../hooks/useDeletePost";

export default function DeleteDialog({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const { mutate: deletePost, isPending } = useDeletePost();

  function onDeletePost(e: MouseEvent) {
    e.preventDefault();
    deletePost(id, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: () => {
        alert("fiald connect to server");
      },
    });
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          variant="destructive"
          onSelect={(e) => e.preventDefault()}
        >
          Delete
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <H4 className="text-center mb-5">Are you sure want delete this post</H4>
        <AlertDialogAction asChild onClick={onDeletePost}>
          <Button variant="destructive" className="py-4">
            {isPending ? "Deleteing..." : "Delete"}
          </Button>
        </AlertDialogAction>
        <AlertDialogCancel className="py-4">Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
