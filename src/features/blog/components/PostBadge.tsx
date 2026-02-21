import capitalize from "@/shared/lib/utils";
import type { PostBadge } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";

export default function PostBadge({ title }: { title: PostBadge }) {
  switch (title) {
    case "design":
      return <Badge variant="purple">{capitalize(title)}</Badge>;
    case "research":
      return <Badge variant="blue">{capitalize(title)}</Badge>;
    case "presenation":
      return <Badge variant="red">{capitalize(title)}</Badge>;
    case "frameworks":
      return <Badge variant="yellow">{capitalize(title)}</Badge>;
    case "management":
      return <Badge variant="gray">{capitalize(title)}</Badge>;
    case "leadership":
      return <Badge variant="purple">{capitalize(title)}</Badge>;
    case "product":
      return <Badge variant="gray">{capitalize(title)}</Badge>;
    case "customer success":
      return <Badge variant="purple">{capitalize(title)}</Badge>;
    case "Tools":
      return <Badge variant="red">{capitalize(title)}</Badge>;
    case "SaaS":
      return <Badge variant="yellow">{capitalize(title)}</Badge>;
    default:
      return <Badge variant="gray">{capitalize(title)}</Badge>;
  }
}
