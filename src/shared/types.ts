import type { Models } from "appwrite";

export type PropsWhitClassName = {className?:string};
export type LinkItem = {title:string,path:string};

export type PostBadge = 'design' | 'research' |'presenation' | 'frameworks' | 'management'|'leadership'|'product'|'customer success'|'Tools'|'SaaS'
export type PostContent = {type:'text';content:string}|{type:'image';src:string;alt?:string}

export type Post = {
    id:string;
    title:string;
    date:string;
    badges:PostBadge[];
    description:string;
    image:string;
    content:PostContent[];
}

export type PostRow = Models.Row & {
  title: string;
  date: string;
  badges: string;     
  description: string;
  image: string;
  content: string;   
};