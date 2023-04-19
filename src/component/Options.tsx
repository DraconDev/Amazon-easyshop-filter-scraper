import React from "react";
import { fetchItems } from "../../tests/amazonItems.spec";

type Props = {};

const Options = (props: Props) => {
    const fetchItems = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/products/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: "red sweater" }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex w-full h-24">
            Options
            <button
                className="ml-2 bg-slate-100"
                type="submit"
                onClick={fetchItems}
            >
                Search
            </button>
        </div>
    );
};

export default Options;
