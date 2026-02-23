import type { RouteValue } from "@/shared/types";

export const ROUTES = {
  blog:'/',
  blogDetail:'/blog/:blogDetail',
  blogDetailFn:(id:string)=>`/blog/${id}`,
  projects:'/projects',
  about:'/about',
  newsletter:'/newsletter',
  posts:'/posts',
  login:'/login',
  register:'/register',
} as const satisfies Record<string,RouteValue>