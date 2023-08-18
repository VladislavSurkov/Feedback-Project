import { IProduct } from "helpers/types/product";


export const getStatusProducts = (products: IProduct[], status: string) => {
    switch (status) {
        case 'All':
            return products;
        default:
            return products.filter(product => product.category === status);
    }
};

export const getSortProducts = (products: IProduct[], sort: string | null) => {
    switch (sort) {
        case 'mostUpvotes':
            return [...products].sort((a, b) => b.upvotes - a.upvotes);
        case 'leastUpvotes':
            return [...products].sort((a, b) => a.upvotes - b.upvotes);

        // case 'mostComments':
        //   console.log(sort);
        //   sort.sort((a, b) => a - b);
        //   break;
        // case 'leastComments':
        //   sort.sort((a, b) => b.comments.length - a.comments.length);
        //   break;
        default:
            return products;
    };
}