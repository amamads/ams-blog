import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { InitialUser } from "../../features/auth/types";


type AuthStoreState = {
    user:InitialUser|undefined;
    setUser:(data:InitialUser)=>void;
    logOut:()=>void;
}

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
        user:undefined,
        setUser:(data)=>set({user:data}),
        logOut:()=>set({user:undefined})
    }),
    {
      name: "user",
    //   partialize: (state) => ({
    //     open: state.open,
    //   }),
    },
  ),
);

export const selectUser = (s: AuthStoreState) => s.user;
export const selectSetUser = (s: AuthStoreState) => s.setUser;
export const selectLogOut = (s: AuthStoreState) => s.logOut;
