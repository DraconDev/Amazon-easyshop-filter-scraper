export interface SearchParams {
    searchField: string;
    sponsored?: string;
    freeDelivery?: string;
    priceMinimum?: string;
    priceMaximum?: string;
    votesMinimum: string;
    ratingMinimum: string;
    region: string;
    [key: string]: any;
}
