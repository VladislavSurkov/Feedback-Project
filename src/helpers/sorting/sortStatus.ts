import { IProduct } from "helpers/types/product";

export const getStatusCounts = (products: IProduct[]) => {

    const statusCounts = products.reduce(
        (counts, product) => {
            counts[product.status]++;
            return counts;
        },
        {
            'Planned': 0,
            'In-Progress': 0,
            'Live': 0,
        } as Record<string, number>
    );

    return statusCounts
}


