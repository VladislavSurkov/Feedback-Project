import { sortValue } from "helpers/sorting/sortStatus";

type Comments = {
    _id: string,
    content: string,
    user: any[]
}

type Owner = {
    _id: string,
    name: string
}

export type SortValue = {
    Planned: "Planned";
    InProgress: "In-Progress";
    Live: "Live";
};

export interface IProduct {
    _id: string;
    title: string
    category: string,
    upvotes: number,
    status: 'Planned' | 'In-Progress' | 'Live',
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

export interface ISortProduct {
    [sortValue.Planned]: IProduct[],
    [sortValue.InProgress]: IProduct[],
    [sortValue.Live]: IProduct[],
}