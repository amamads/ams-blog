import TextAreaFormField from "@/shared/components/TextAreaFormField";
import TextFormField from "@/shared/components/TextFormField";
import { H3, H4, H5 } from "@/shared/components/Typography";
import { postBadges } from "@/shared/consts";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Form, FormDescription } from "@/shared/ui/form";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import useAddPost from "../hooks/useAddPost";
import BadgesSelectBox from "./BadgesSelectBox";
import DatePicker from "./DatePicker";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible";
import { ChevronDown } from "lucide-react";

const schema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(400),
  image: z.url(),
  badges: z.array(z.enum(postBadges)),
  date: z.string().datetime({ offset: true }),
  content: z.array(
    z.discriminatedUnion("type", [
      z.object({ type: z.literal("text"), content: z.string().min(10) }),
      z.object({
        type: z.literal("image"),
        src: z.url(),
        alt: z.string().min(1),
      }),
    ]),
  ),
});
type FormStateType = z.infer<typeof schema>;

const defaultValues: FormStateType = {
  title: "Title 001",
  date: "2025-02-10T00:00:00.000+00:00",
  description:
    "Core leadership skills required to manage and scale modern technology-driven teams.",
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  badges: ["Tools", "design", "SaaS"],
  content: [
    {
      type: "text",
      content:
        "stent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Team meeting",
    },
    {
      type: "text",
      content:
        "High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      alt: "Leadership coaching",
    },
    {
      type: "text",
      content:
        "adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      alt: "Team collaboration",
    },
    {
      type: "text",
      content:
        "Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.Modern leadership focuses on empowerment, trust, and psychological safety. Leaders must foster environments where teams feel safe to experiment, fail, and learn. Transparent communication, clarity of vision, and consistent feedback loops help align individual contributions with organizational goals.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Team meeting",
    },
    {
      type: "text",
      content:
        "High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.High-performance cultures prioritize autonomy, mastery, and purpose. Leaders who delegate effectively and trust their teams create sustainable momentum and innovation. Continuous coaching and mentorship allow individuals to grow while delivering exceptional results.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      alt: "Leadership coaching",
    },
    {
      type: "text",
      content:
        "Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.Resilient leadership adapts to change, manages uncertainty, and provides stability during turbulent periods. Decision-making grounded in data, empathy, and long-term thinking enables organizations to navigate complexity and achieve lasting success.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      alt: "Team collaboration",
    },
  ],
};

export default function AddPostSheet() {
  const [open, setOpen] = useState(false);
  const { mutate: addPost, isPending } = useAddPost();
  const form = useForm<FormStateType>({
    resolver: zodResolver(schema),
    defaultValues,
    // defaultValues: {
    //   date: new Date().toISOString(),
    //   content: [
    //     { type: "text", content: "" },
    //     // { type: "image" },
    //     // { type: "text", content: "" },
    //   ],
    // },
  });
  const {
    control,
    setError,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "content",
    control,
  });

  function fromOnSubmit(data: FormStateType) {
    addPost(
      {
        ...data,
        content: JSON.stringify(data.content),
        badges: data.badges.join("|"),
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: (err) => {
          setError("root", {
            message: err.message,
          });
        },
      },
    );
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="lg">Add Post</Button>
      </SheetTrigger>
      <SheetContent className="min-w-2/3! p-10 overflow-auto">
        <H3>Add Post</H3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(fromOnSubmit)}
            className="col-flex gap-5 h-full"
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

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button className="mb-5 py-5">
                  <H4>Content</H4>
                  <ChevronDown className="-rotate-90 [[data-state=open]>&]:rotate-0" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-5 border p-3 rounded-lg">
                  {fields.map((field, i) => {
                    if (field.type === "image")
                      return (
                        <Card key={field.id} className="px-5">
                          <H5>Image</H5>
                          <TextFormField
                            control={control}
                            name={`content.${i}.src`}
                            label="Image URL"
                            placeholder="Enter Image URL"
                          />
                          <TextFormField
                            control={control}
                            name={`content.${i}.alt`}
                            label="Image ALT"
                            placeholder="Enter Image ALT"
                          />
                          <Button
                            className="py-5"
                            onClick={() => remove(i)}
                            type="button"
                          >
                            Delete
                          </Button>
                        </Card>
                      );

                    return (
                      <Card key={field.id} className="px-5">
                        <H5>Text</H5>
                        <TextAreaFormField
                          control={control}
                          name={`content.${i}.content`}
                          label="Content"
                          placeholder="Enter Content"
                        />
                        <Button
                          className="py-5"
                          onClick={() => remove(i)}
                          type="button"
                        >
                          Delete
                        </Button>
                      </Card>
                    );
                  })}
                  <div className="flex  justify-center gap-5">
                    <Button
                      type="button"
                      className="p-5"
                      onClick={() => append({ type: "text", content: "" })}
                    >
                      Add Text
                    </Button>
                    <Button
                      type="button"
                      className="p-5"
                      onClick={() =>
                        append({ type: "image", src: "", alt: "" })
                      }
                    >
                      Add Image
                    </Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Button type="submit" size="lg" className="mt-auto">
              {isPending ? "Submiting..." : "Submit"}
            </Button>

            {errors.root && (
              <FormDescription className="text-destructive">
                {errors.root.message}
              </FormDescription>
            )}
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
