import { H3 } from "@/shared/components/Typography";
import { Button } from "@/shared/ui/button";

import {
    selectLogOut,
    useAuthStore
} from "@/shared/store/auth-store";

export default function LogoutSection() {
  const logOut = useAuthStore(selectLogOut);
  return (
    <>
      <H3 className="text-center mb-5">You Are logged in</H3>
      <Button size="lg" onClick={logOut}>
        Log out
      </Button>
    </>
  );
}
