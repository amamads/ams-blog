import { create } from "zustand";

type UsersStoreState = {
    filterRole:string[];
    filterStatus:string[];
    setFilterRole:(value:string[])=>void;
    setFilterStatus:(value:string[])=>void;
};
export const useUsersStore = create<UsersStoreState>((set) => ({
    filterRole:[],
    filterStatus:[],
    setFilterRole:(value)=>set({filterRole:value}),
    setFilterStatus:(value)=>set({filterStatus:value}),
}));

export const selectfilterRole = (s: UsersStoreState) => s.filterRole;
export const selectfilterStatus = (s: UsersStoreState) => s.filterStatus;
export const selectsetFilterRole = (s: UsersStoreState) => s.setFilterRole;
export const selectsetFilterStatus = (s: UsersStoreState) => s.setFilterStatus;
