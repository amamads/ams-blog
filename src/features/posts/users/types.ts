export type Status = 'invited' | 'suspended' | "inactive" | 'active' 
export type Role =  'cashier' | 'superadmin' | 'admin' | 'manager' ;

export type User = {
    id:string,
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    phoneNumber:string,
    status:Status,
    role:Role,
    createdAt:string,
    updatedAt:string
}