import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { ChevronDown } from "lucide-react";
import type { FieldValues } from "react-hook-form";
import type { FieldFormProps } from "../types";

export default function DatePicker<T extends FieldValues>({
  name,
  control,
}: FieldFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const currentDate = new Date(field.value);
        // console.log(field.value);
        return (
          <FormItem>
            <FormLabel>Date of birth</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="py-5">
                    {field.value
                      ? currentDate.toLocaleDateString()
                      : "Select date"}
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-60">
                  <Calendar
                    mode="single"
                    className="rounded-lg border size-full"
                    captionLayout="dropdown"
                    selected={currentDate}
                    onSelect={(date) =>{
                        // console.log(date?.toISOString());
                         field.onChange(date?.toISOString() ?? field.value)
                    }}
                    // onSelect={(date) => field.onChange(date?.toISOString())}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
