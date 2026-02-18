import { type PropsWithChildren } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ThemeProvider } from "./thme-provider/theme.provider";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
