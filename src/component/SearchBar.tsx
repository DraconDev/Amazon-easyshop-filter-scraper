import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import useMyStore, { useSearchResults } from "@component/store/store";
import store from "@component/store/store";
import { type } from "os";
import { useQuery } from "@tanstack/react-query";

type Props = {};

export const SearchBar = (props: Props) => {
    // const [data, setData] = useState({});
    const searchStore = useSearchResults();

    const store = useMyStore();
    const {
        sponsored,
        freeDelivery,
        priceMaximum,
        priceMinimum,
        votesMinimum,
        searchField: search,
        region,
        ratingMinimum,
    } = store;

    async function fetchItems() {
        const searchParams = {
            sponsored,
            freeDelivery,
            priceMaximum,
            priceMinimum,
            votesMinimum,
            search,
            region,
            ratingMinimum,
        };

        try {
            const response = await axios.get("/api/products/search", {
                params: {
                    ...store,
                },
            });
            searchStore.update({ results: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        function handleKeyDown(event: { key: string }) {
            if (event.key === "Enter" && store.searchField.length > 3) {
                fetchItems();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <div className="flex flex-row justify-between p-1">
            <input
                type="text"
                className="px-3 m-2 text-xl bg-inputBg rounded-md outline-none outline-2 focus:outline-secondary placeholder-white grow"
                placeholder="Search..."
                onChange={(e) => store.update({ searchField: e.target.value })}
                value={store.searchField}
            />
            <PrimaryButton onClick={fetchItems} text={"Search"}></PrimaryButton>
        </div>
    );
};

// export default SearchBar;
