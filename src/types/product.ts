export interface ProductData {
    price: number;
    name: string;
    prime?: boolean;
    voteCount: string;
    rating: number;
    image: string;
    sponsored: boolean;
    [key: string]: any;
}
