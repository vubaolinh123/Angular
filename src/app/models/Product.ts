export interface IProduct{
    _id?: string,
    name: string,
    price: number,
    oldPrice: number,
    image: string,
    size:string,
    desc: string,
    status: number,
    CategoryProduct: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}