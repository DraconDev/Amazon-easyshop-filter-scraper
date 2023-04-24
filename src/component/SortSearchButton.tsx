import { useSearchResults } from "@component/store/store";
import React, { useState } from "react";

type Props = {};

const SortSearchButton = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const store = useSearchResults();

    return (
        <div className="relative">
            <button
                className="block text-secondaryLight font-semibold py-2 px-4 rounded-md hover:bg-primaryHover   bg-primaryDark mb-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                Sort by
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <a
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                        onClick={() =>
                            store.update({
                                results: store.results.sort((a, b) => {
                                    return b.rating - a.rating;
                                }),
                            })
                        }
                    >
                        Rating
                    </a>
                    <a
                        onClick={() =>
                            store.update({
                                results: store.results.sort((a, b) => {
                                    return +b.voteCount - +a.voteCount;
                                }),
                            })
                        }
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Votes
                    </a>
                    <a
                        onClick={() =>
                            store.update({
                                results: store.results.sort((a, b) => {
                                    return b.price - a.price;
                                }),
                            })
                        }
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Price Ascending
                    </a>
                    <a
                        onClick={() =>
                            store.update({
                                results: store.results.sort((a, b) => {
                                    return b.price - a.price;
                                }),
                            })
                        }
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Price Descending
                    </a>
                </div>
            )}
        </div>
    );
};

export default SortSearchButton;
