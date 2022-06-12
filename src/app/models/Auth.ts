export interface IUser{
    _id?: string,
    name: string,
    email: string,
    password: string,
    role?: number,
    status?: number,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}