import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { Edit } from "lucide-react";

export default function EditSheet({ row }: { row: Row<Post> }) {
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Edit />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70vh]!">
        
      </SheetContent>
    </Sheet>
  );
}
