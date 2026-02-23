import { Badge } from "@/components/atoms/badge";
import type { Status } from "../../types";

export default function StatusBadge({ status }: { status: Status }) {
  switch (status) {
    case "inactive":
      return (
        <Badge className="rounded-md bg-[#e6e8ea] dark:bg-[#5b758a] border border-[#d4d4d4] text-foreground">
          Inactive
        </Badge>
      );
    case "active":
      return (
        <Badge className="rounded-md bg-[#e5f6f6] dark:bg-[#516873] border border-[#96f7e4] text-foreground dark:text-[#96f7e4]">
          Active
        </Badge>
      );
    case "invited":
      return (
        <Badge className="rounded-md bg-[#daeffb] dark:bg-[#5b758a] border border-[#74d4ff] text-foreground">
          Invited
        </Badge>
      );
    case "suspended":
      return (
        <Badge className="rounded-md bg-[#f0dde2] dark:bg-[#8e4651] dark:border-0 border border-[#f0c7cc] text-[#e7000b] dark:text-foreground">
          Suspended
        </Badge>
      );
  }
}
