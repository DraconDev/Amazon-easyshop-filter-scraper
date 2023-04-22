import { ProductData } from "@component/types/product";
import React from "react";
import Image from "next/image";

const ItemCard = ({ product }: { product: ProductData }) => {
    return (
        <div className="m-1 flex flex-col rounded-md shadow-md border border-gray-900 hover:opacity-95 transition-all max-h-[600px] justify-around w-[300px] max-w-full bg-primaryLight ">
            <div className="w-full grow h-[400px] bg-white  flex place-items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-lg text-center items-center p-1 h-[90px] font-semibold">
                {product.name.length > 80
                    ? product.name.slice(0, 80) + "..."
                    : product.name}
            </div>
            <div className="text-text2 bg-primary m-1 flex flex-row p-4 place-items-center justify-around rounded-md">
                <div className="flex flex-col items-center">
                    <p className="text-xl">Price</p>
                    <p className="">
                        {product.price}
                        {product.priceSymbol}
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl">Rating</p>
                    <p className="">{product.rating}/5</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl">Votes</p>
                    <p className="">{product.voteCount}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
