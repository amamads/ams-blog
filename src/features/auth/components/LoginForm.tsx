import useGetUsers from "@/features/auth/hooks/useGetUsers";
import { schema } from "@/features/auth/schema";
import type { InitialUser } from "@/features/auth/types";
import { ROUTES } from "@/router/paths";
import { selectSetUser, useAuthStore } from "@/shared/store/auth-store";
import { Button } from "@/shared/ui/button";
import { Form, FormDescription } from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import TextFormField from "../../../shared/components/TextFormField";

export default function LoginForm() {
  const { data: users, isError, error } = useGetUsers();
  const setUser = useAuthStore(selectSetUser);

  const form = useForm<InitialUser>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "yas",
      password: "Yas12345",
    },
  });
  const {
    control,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  function fromOnSubmit(data: InitialUser) {
    if (isError) return setError("root", { message: error.message });
    if (!users?.some((user) => user.username === data.username))
      return setError("root", { message: "not found user" });

    setUser(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(fromOnSubmit)}
        className="space-y-5 grid"
      >
        <TextFormField
          control={control}
          name="username"
          label="Username"
          placeholder="Enter username"
        />
        <TextFormField
          control={control}
          name="password"
          label="Password"
          placeholder="Enter password"
        />

        <Button type="submit" size="lg">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
        {errors.root && (
          <FormDescription className="text-destructive">
            {errors.root.message}
          </FormDescription>
        )}
        <Button variant="link">
          <Link to={ROUTES.register}>Register</Link>
        </Button>
      </form>
    </Form>
  );
}
