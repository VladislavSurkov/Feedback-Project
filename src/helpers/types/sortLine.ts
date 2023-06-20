import { Product } from "./product";

export interface ISortLine {
    products: Product[];
    setupdateProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}