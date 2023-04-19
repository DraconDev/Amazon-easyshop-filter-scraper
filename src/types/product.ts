export interface ProductData {
    price: number;
    name: string;
    prime?: boolean;
    ratingCount: number;
    image: string;
    sponsored?: boolean;
    [key: string]: any;
}
