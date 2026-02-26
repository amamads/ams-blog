import TextAreaFormField from "@/shared/components/TextAreaFormField";
import { postBadges } from "@/shared/consts";
import type { Post } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Form, FormDescription } from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Row } from "@tanstack/react-table";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import TextFormField from "../../../shared/components/TextFormField";
import useEditPost from "../../../shared/hooks/useEditPost";
import DatePicker from "./DatePicker";
import BadgesSelectBox from "./BadgesSelectBox";

const schema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(400),
  image: z.url(),
  badges: z.array(z.enum(postBadges)),
  date: z.string().datetime({ offset: true }),
});
type FormStateType = z.infer<typeof schema>;

export default function EditDialog({ row }: { row: Row<Post> }) {
  const [open, setOpen] = useState(false);
  const { mutate: editPost, isPending } = useEditPost();
  const rowId: string = row.getValue("id");

  const defaultValues: FormStateType = {
    title: row.getValue("title"),
    description: row.getValue("description"),
    image: row.getValue("image"),
    badges: row.getValue("badges"),
    date: row.getValue("date"),
  };
  const form = useForm<FormStateType>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const {
    control,
    setError,
    formState: { errors },
  } = form;

  function fromOnSubmit(data: FormStateType) {
    editPost(
      {
        rowId,
        data: { ...data, badges: data.badges.join("|") },
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: (err) => {
          setError("root", {
            // message: "Failed to update post. Please try again.",
            message:err.message
          });
        },
      },
    );
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(fromOnSubmit)}
            className="space-y-5 grid"
          >
            <TextFormField
              control={control}
              name="title"
              label="Title"
              placeholder="Enter Title"
            />
            <TextAreaFormField
              control={control}
              name="description"
              label="Description"
              placeholder="Enter description"
            />
            <TextFormField
              control={control}
              name="image"
              label="Image URL"
              placeholder="Enter URL"
            />

            <div className="flex justify-between">
              <BadgesSelectBox control={control} name="badges" />
              <DatePicker control={control} name="date" />
            </div>

            <Button type="submit" size="lg">
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
            {errors.root && (
              <FormDescription className="text-destructive">
                {errors.root.message}
              </FormDescription>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
