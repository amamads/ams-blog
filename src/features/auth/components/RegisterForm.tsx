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
import useAddUser from "../hooks/useAddUser";
import TextFormField from "./TextFormField";

export default function RegisterForm() {
  const { data: users, isError, error } = useGetUsers();
  const { mutate: addUser,isPending } = useAddUser();
  const setUser = useAuthStore(selectSetUser);

  const form = useForm<InitialUser>({
    resolver: zodResolver(schema),
    // defaultValues: {
    //   username: "yas",
    //   password: "Yas12345",
    // },
  });
  const {
    control,
    setError,
    formState: { errors },
  } = form;

  function fromOnSubmit(data: InitialUser) {
    if (isError) return setError("root", { message: error.message });
    if (users?.some((user) => user.username === data.username))
      return setError("root", { message: "this username does exist" });

    addUser(data, {
      onSuccess: () => {
        setUser(data);
      },
      onError: (err) => {
        setError("root", { message: err.message });
      },
      // onSettled
    });
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
          {isPending ? "Loading..." : "Submit"}
        </Button>
        {errors.root && (
          <FormDescription className="text-destructive">
            {errors.root.message}
          </FormDescription>
        )}
        <Button variant="link">
          <Link to={ROUTES.login}>Login</Link>
        </Button>
      </form>
    </Form>
  );
}
