import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import type { Control, FieldValues, Path } from "react-hook-form";

interface TextFormFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  placeholder?: string;
}

export default function TextFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: TextFormFieldProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem >
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
