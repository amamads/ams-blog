import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Textarea } from "@/components/atoms/textarea";
import { MailPlus, Send } from "lucide-react";
import RoleSelectBox from "./RoleSelectBox";

export default function InviteUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <p>Invite User</p>
          <MailPlus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="p-0 flex items-center gap-2">
            <MailPlus />
            <span>Invite User</span>
          </DialogTitle>
          <DialogDescription className="text-left">
            Invite new user to join your team by sending them an email
            invitation. Assign a role to define their access level.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="invite-dialog-user-email">Email</Label>
            <Input
              id="invite-dialog-user-email"
              placeholder="sample@text.demo"
            />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <RoleSelectBox />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invite-dialog-user-description">
              Description (optional)
            </Label>
            <Textarea
              id="invite-dialog-user-description"
              placeholder="Add a personal note to your invitation (optional)"
              className="resize-none"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>
            <span>Invite</span>
            <Send />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
