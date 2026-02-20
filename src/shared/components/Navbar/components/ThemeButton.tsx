import { useTheme } from "@/providers/thme-provider/use-theme";
import { Button } from "@/shared/ui/button";
import { Skeleton } from "@/shared/ui/skeleton";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";
  return (
    <Button
      className="rounded-full gap-4 w-24 h-10"
      onClick={() => setTheme(nextTheme)}
    >
      <div>
        <Sun className="size-6 dark:hidden" />
        <Skeleton className="size-6 rounded-full dark:block hidden" />
      </div>
      <div>
        <Moon className="size-6 hidden dark:inline" />
        <Skeleton className="size-6 rounded-full dark:hidden" />
      </div>
    </Button>
  );
}
