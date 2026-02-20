import { ROUTES } from "@/router/paths";
import type { LinkItem } from "@/shared/types";

export const navbarItems:LinkItem[] = [
    {title:'blog',path:ROUTES.blog},
    {title:'projects',path:ROUTES.projects},
    {title:'about',path:ROUTES.about},
    {title:'newsletter',path:ROUTES.newsletter},
]