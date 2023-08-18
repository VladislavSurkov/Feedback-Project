type Comments = {
    _id: string,
    content: string,
    user: any[]
}
type Owner = {
    _id: string,
    name: string
}

export interface IProduct {
    _id: string;
    title: string
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments?: Comments[],
    owner: Owner
}

export interface ISendProduct {
    title: string,
    description: string,
    category: string,
}

export interface ICreateProduct {
    result: IProduct
}

export interface ITodoState {
    products: IProduct[];
    isLoading: boolean,
    error: null | string,
}

export interface IProductProps {
    products: IProduct[];
}
