import { ROUTES } from "@/router/paths";
import type { LinkItem, RouteValue } from "@/shared/types";

const filterNavPages:string[] = [ROUTES.blogDetail,ROUTES.register]

export const navbarItems: LinkItem[] = Object.entries(ROUTES)
  .map(([key, value]) => ({ 
    title: key, 
    path: value as RouteValue 
  }))
  .filter((item): item is LinkItem => typeof item.path === 'string')
  .filter(item => !filterNavPages.includes(item.path));
  
// export const navbarItems:LinkItem[] = [
//     {title:'blog',path:ROUTES.blog},
//     {title:'projects',path:ROUTES.projects},
//     {title:'about',path:ROUTES.about},
//     {title:'newsletter',path:ROUTES.newsletter},
//     {title:'posts',path:ROUTES.posts},
    
// ]