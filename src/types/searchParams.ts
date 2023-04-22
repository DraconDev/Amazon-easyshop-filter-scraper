export interface SearchParams {
    searchField: string;
    sponsored: string;
    freeDelivery: string;
    priceMinimum?: string;
    priceMaximum?: string;
    votesMinimum: string;
    ratingMinimum: string;
    country: string;
    [key: string]: any;
}
