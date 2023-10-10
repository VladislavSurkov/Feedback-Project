import { IProduct, SortValue } from "helpers/types/product";

export const sortValue: SortValue = {
    Planned: 'Planned',
    InProgress: 'In-Progress',
    Live: 'Live',
}

export const getStatusCounts = (products: IProduct[]) => {

    const statusCounts = products.reduce(
        (counts, product) => {
            counts[product.status]++;
            return counts;
        },
        {
            [sortValue.Planned]: 0,
            [sortValue.InProgress]: 0,
            [sortValue.Live]: 0,
        } as Record<string, number>
    );

    return statusCounts
}


