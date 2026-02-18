import mainQueryClient from "@/shared/services/reactQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={mainQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
