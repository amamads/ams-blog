import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { roles } from "../../consts";

export default function RoleSelectBox() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent position="popper">
        {roles.map((role) => (
          <SelectItem value={role} key={role}>
            {capitalizeFirstLetter(role)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
