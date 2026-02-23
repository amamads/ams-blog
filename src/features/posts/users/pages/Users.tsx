import AddNewUserDialog from "../components/molecules/AddNewUserDialog";
import InviteUserDialog from "../components/molecules/InviteUserDialog";
import UserTable from "../components/organisms/UserTable";

export const Users = () => {
  return (
    // <div className="my-5">
    //   <div className="grid gap-2">
    //     <div>
    //       <h3 className="font-bold">User List</h3>
    //       <p className="text-muted-foreground">
    //         Manage your users and their roles here.
    //       </p>
    //     </div>
    //     <div className="flex gap-2">
    //       <InviteUserDialog />
    //       <AddNewUserDialog/>
    //     </div>
    //   </div>
    //   <UserTable />
    // </div>
    <div className="my-5">
      <div className="flex flex-wrap items-end gap-2 sm:flex-row justify-between">
        <div>
          <h3 className="font-bold">User List</h3>
          <p className="text-muted-foreground">
            Manage your users and their roles here.
          </p>
        </div>
        <div className="flex gap-2">
          <InviteUserDialog />
          <AddNewUserDialog/>
        </div>
      </div>
      <UserTable />
    </div>
    // <div className="my-5">
    //   <div className="flex flex-wrap items-end gap-2 sm:flex-row justify-between">
    //     <div>
    //       <h3 className="font-bold">User List</h3>
    //       <p className="text-muted-foreground">
    //         Manage your users and their roles here.
    //       </p>
    //     </div>
    //     <div className="flex gap-2">
    //       <InviteUserDialog />
    //       <AddNewUserDialog/>
    //     </div>
    //   </div>
    //   <UserTable />
    // </div>
  );
};
  // <div className="flex flex-wrap items-end gap-2 sm:flex-row justify-between">
  //       <div>
  //         <h3 className="font-bold">Tasks</h3>
  //         <p className="text-muted-foreground">
  //           Here's a list of your tasks for this month!
  //         </p>
  //       </div>
  //       <div className="flex gap-2">
  //         <ImportDialog/>
  //         <CreateTaskSheet/>
  //       </div>
  //     </div>