type Comments = {
    _id: string,
    content: string,
    user: any[]
}
export interface Owner {
    _id: string,
    name: string
}

export interface Product {
    _id: string;
    title: string
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments?: Comments[],
    owner: Owner
}

export interface SendProduct {
    title: string,
    description: string,
    category: string,
}

export interface CreateProduct {
    result: Product
}

export interface ItodoState {
    products: Product[];
    isLoading: boolean,
    error: null | string,
}
