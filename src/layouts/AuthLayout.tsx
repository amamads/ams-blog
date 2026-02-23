import { Card } from "@/shared/ui/card";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return <Card className="w-1/3 mx-auto px-5"><Outlet/></Card>;
}
