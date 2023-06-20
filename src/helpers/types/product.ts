
type Comments = {
    id: string,
    content: string,
    user: any[]
}

export interface Product  {
    id: string;
    title: string
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments: Comments[]
}

export interface ItodoState {
    products: Product[];
    isLoading: boolean,
    error: null | string,
}

export interface List {
    products: Product[];
}



