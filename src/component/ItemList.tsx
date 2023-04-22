import React from "react";
import ItemCard from "./ItemCard";
import SortSearchButton from "./SortSearchButton";
import store, { useSearchResults } from "@component/store/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useMyStore from "@component/store/store";
import { json } from "stream/consumers";
import { ProductData } from "@component/types/product";

type Props = {};

const ItemList = (props: Props) => {
    const store = useSearchResults();
    return (
        <>
            <div className="flex flex-row  bg-primaryLight w-full pt-1 justify-end">
                <SortSearchButton></SortSearchButton>
            </div>

            <div className="flex justify-center flex-row w-full flex-wrap bg-primary">
                {store.results.map((product, i) => (
                    <ItemCard key={i} product={product}></ItemCard>
                ))}
            </div>
        </>
    );
};

export default ItemList;
