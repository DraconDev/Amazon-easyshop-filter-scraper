import { ProductData } from "@component/types/product";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type MyState = {
    sponsored: boolean;
    freeDelivery: boolean;
    priceMinimum?: string;
    priceMaximum?: string;
    votesMinimum: string;
    ratingMinimum: string;
    searchField: string;
    region: string;
    pages: string;
    update: (value: any) => void;
    sponsoredToggle: () => void;
    setPriceMinimum: (value: string) => void;
    setPriceMaximum: (value: string) => void;
    [key: string]: any;
};

const useMyStore = create<MyState>()(
    devtools((set) => ({
        sponsored: false,
        freeDelivery: true,
        priceMinimum: "0",
        priceMaximum: "",
        votesMinimum: "200",
        ratingMinimum: "4.0",
        searchField: "",
        region: "co.uk",
        pages: "5",
        update: (value: any) => set((state) => ({ ...state, ...value })),
        sponsoredToggle() {
            set((state) => ({
                sponsored: !state.sponsored,
            }));
        },
        freeDeliveryToggle() {
            set((state) => ({
                freeDelivery: !state.freeDelivery,
            }));
        },
        setPriceMinimum(value: string) {
            set((state) => ({
                priceMinimum: value,
            }));
        },
        setPriceMaximum(value: string) {
            set((state) => ({
                priceMaximum: value,
            }));
        },
    }))
);

type SearchResults = {
    update: (value: any) => void;
    results: ProductData[];
    [key: string]: any;
};

export const useSearchResults = create<SearchResults>()(
    devtools((set) => ({
        update: (value: any) => set((state) => ({ ...state, ...value })),
        results: [] as ProductData[],
    }))
);

export default useMyStore;
