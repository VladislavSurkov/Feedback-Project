import { objStatusValue } from "helpers/Values/Values";


type Comments = {
    _id: string,
    content: string,
    user: any[]
}

type Owner = {
    _id: string,
    name: string
}

export type StatusValue = 'Planned' | 'In-Progress' | 'Live';

export type ObjStatusValue = {
    Planned: "Planned";
    InProgress: "In-Progress";
    Live: "Live";
};

export interface IProduct {
    _id: string;
    title: string
    category: string,
    upvotes: number,
    status: StatusValue,
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
    status?: StatusValue,
    products: IProduct[];
}

export interface ISortProduct {
    [objStatusValue.Planned]: IProduct[],
    [objStatusValue.InProgress]: IProduct[],
    [objStatusValue.Live]: IProduct[],
}