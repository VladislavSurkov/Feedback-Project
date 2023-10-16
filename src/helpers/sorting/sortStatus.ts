import { objStatusValue } from "helpers/Values/Values";
import { IProduct, StatusValue } from "helpers/types/product";


export const getStatusCounts = (products: IProduct[]) => {

    const statusCounts = products.reduce(
        (counts, product) => {
            counts[product.status]++;
            return counts;
        },
        {
            [objStatusValue.Planned]: 0,
            [objStatusValue.InProgress]: 0,
            [objStatusValue.Live]: 0,
        } as Record<StatusValue, number>
    );

    return statusCounts
}


