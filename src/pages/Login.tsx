import LoginForm from "@/features/auth/components/LoginForm";
import LogoutSection from "@/features/auth/components/LogoutSection";
import { H2 } from "@/shared/components/Typography";
import { selectUser, useAuthStore } from "@/shared/store/auth-store";

export const Login = () => {
  const user = useAuthStore(selectUser);

  return (
    <>
      {user ? (
        <LogoutSection />
      ) : (
        <>
          <H2 className="text-center">Login</H2>
          <LoginForm />
        </>
      )}
    </>
  );
};
