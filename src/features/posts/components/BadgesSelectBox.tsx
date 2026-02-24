import { postBadges } from "@/shared/consts";
import capitalize from "@/shared/lib/utils";
import type { PostBadge } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/shared/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Label } from "@/shared/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { BadgeIcon } from "lucide-react";
import type { FieldValues } from "react-hook-form";
import type { FieldFormProps } from "../types";

export default function BadgesSelectBox<T extends FieldValues>({
  name,
  control,
}:  FieldFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedBadges: PostBadge[] = field.value ?? [];
        return (
          <FormItem>
            <FormLabel>Date of birth</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="py-5">
                    <BadgeIcon />
                    <span>Badges</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-55" align="start">
                  <Command>
                    <CommandInput placeholder="Find Badge" />
                    <CommandGroup>
                      {postBadges.map((badge, i) => (
                        <CommandItem key={badge} className="py-2">
                          <Checkbox
                            id={badge + i}
                            checked={selectedBadges.includes(
                              badge as PostBadge,
                            )}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...selectedBadges, badge])
                                : field.onChange(
                                    selectedBadges.filter(
                                      (value: PostBadge) => value !== badge,
                                    ),
                                  )
                            }
                          />
                          <Label className="w-full" htmlFor={badge + i}>
                            <p>{capitalize(badge)}</p>
                            <p className="text-xs ml-auto"></p>
                          </Label>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
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
