import { CreditCard, Shield, UserCheck, Users } from "lucide-react";
import type { Role } from "../../types";

export default function RoleIcon({
  role,
  className = "",
}: {
  role: Role;
  className?: string;
}) {
  switch (role) {
    case "cashier":
      return <CreditCard className={className} />;
    case "admin":
      return <UserCheck className={className} />;
    case "manager":
      return <Users className={className} />;
    case "superadmin":
      return <Shield className={className} />;
  }
}
