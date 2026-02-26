import TextAreaFormField from "@/shared/components/TextAreaFormField";
import TextFormField from "@/shared/components/TextFormField";
import type { Post, PostContent } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  Form,
  FormDescription
} from "@/shared/ui/form";
import { Separator } from "@/shared/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Row } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import useEditPost from "../../../shared/hooks/useEditPost";

const schema = z.object({
  text: z.string().min(1).max(10000).nullable(),
  imageUrl: z.url().nullable(),
  iamgeAlt: z.string().min(2).max(100).nullable(),
});
type FormStateType = z.infer<typeof schema>;

export default function EditContentDialog({
  row,
  data,
  index,
}: {
  row: Row<Post>;
  data: PostContent;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { mutate: editPost, isPending } = useEditPost();
  const title: string = row.getValue("title");
  const rowId: string = row.getValue("id");
  const content: PostContent[] = row.getValue("content");

  const form = useForm<FormStateType>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: data.type === "text" ? data.content : null,
      imageUrl: data.type === "image" ? data?.src : null,
      iamgeAlt: data.type === "image" ? data.alt : null,
    },
  });
  const {
    control,
    setError,
    formState: { errors },
  } = form;

  function fromOnSubmit(formData: FormStateType) {
    const newContent = [...content];

    if (data.type === "text") {
      newContent[index] = {
        type: "text",
        content: formData.text || "",
      };
    } else if (data.type === "image") {
      newContent[index] = {
        type: "image",
        src: formData.imageUrl || "",
        alt: formData.iamgeAlt || "",
      };
    }

    console.log("New Array to Send:", newContent);
    editPost(
      {
        rowId,
        data: { content: JSON.stringify(newContent) },
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: () => {
          setError("root", {
            message: "Failed to update post. Please try again.",
          });
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-200! w-[90vw] h-[80vh] flex flex-col">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(fromOnSubmit)}
            className="space-y-5 col-flex size-full"
          >
            <DialogTitle>{title}</DialogTitle>

            <Separator />

            <div className="overflow-auto">
              {data.type === "text" ? (
                // <FormField
                //   control={control}
                //   name={"text"}
                //   render={({ field }) => (
                //     <FormItem>
                //       <FormLabel>Content</FormLabel>
                //       <FormControl>
                //         <Textarea
                //           className="overflow-auto resize-none"
                //           {...field}
                //         />
                //       </FormControl>
                //       <FormMessage />
                //     </FormItem>
                //   )}
                // />
                <TextAreaFormField
                  control={control}
                  name="text"
                  label="Content"
                  placeholder="Enter Content"
                />
              ) : (
                <>
                  <TextFormField
                    control={control}
                    name="imageUrl"
                    label="Image URL"
                    placeholder="Enter URL"
                  />
                  <TextFormField
                    control={control}
                    name="iamgeAlt"
                    label="Image Alt"
                    placeholder="Enter Alt"
                  />
                </>
              )}
            </div>

            <Separator className="mt-auto" />

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
