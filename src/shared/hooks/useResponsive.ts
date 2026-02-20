import { useState } from "react";

export default function useResponsive() {
   const [width, setWidth] = useState(window.innerWidth);

   window.addEventListener('resize',()=>setWidth(window.innerWidth))

   return {
    width,
    sm: width > 395,
    md:width > 839,
    lg:width>1445
   }
}