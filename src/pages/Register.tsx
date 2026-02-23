import LogoutSection from "@/features/auth/components/LogoutSection";
import RegisterForm from "@/features/auth/components/RegisterForm";
import { H2 } from "@/shared/components/Typography";
import { selectUser, useAuthStore } from "@/shared/store/auth-store";

export const Register = () => {
  const user = useAuthStore(selectUser);

  return (
    <>
      {user ? (
        <LogoutSection />
      ) : (
        <>
          <H2 className="text-center">Register</H2>
          <RegisterForm />
        </>
      )}
    </>
  );
};
