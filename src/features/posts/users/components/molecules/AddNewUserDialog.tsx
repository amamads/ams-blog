import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { DialogTitle } from "@radix-ui/react-dialog";
import { UserPlus } from "lucide-react";
import RoleSelectBox from "./RoleSelectBox";

const formFields = [
  { label: "First Name", id: "new-user-first-name", placeholder: "John" },
  { label: "Last Name", id: "new-user-last-name", placeholder: "Doe" },
  { label: "Username", id: "new-user-username", placeholder: "John_doe" },
  { label: "Email", id: "new-user-email", placeholder: "john.doe@gamil.com" },
  {
    label: "Phone number",
    id: "new-user-phoneNumber",
    placeholder: "+123456789",
  },
];

export default function AddNewUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span>Add User</span>
          <UserPlus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg p-0">Add New User</DialogTitle>
          <DialogDescription className="font-semibold">
            Create new user here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          {formFields.map(({ label, id, placeholder }) => (
            <div className="grid grid-cols-[30%_70%]">
              <Label id={id}>{label}</Label>
              <Input id={id} placeholder={placeholder} />
            </div>
          ))}
          <div className="grid grid-cols-[30%_70%]">
            <Label>Role</Label>
            <RoleSelectBox />
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <Label id="new-user-password">Password</Label>
            <Input id="new-user-password" placeholder="kav32rj9mvwa" />
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <Label id="new-user-password2">Confirm Password</Label>
            <Input
              id="new-user-password2"
              placeholder="kav32rj9mvwa"
              disabled
            />
          </div>
        </form>
        <Button>Save changes</Button>
      </DialogContent>
    </Dialog>
  );
}
