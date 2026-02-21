export const ROUTES = {
  blog:'/',
  blogDetail:'blog/:blogDetail',
  blogDetailFn:(id:string)=>`blog/${id}`,
  newsletter:'/newsletter',
  projects:'/projects',
  about:'/about',
};