const fs = require("fs");

import { ProductData } from "../types/product";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export function writeToFile(data: ProductData[]) {
    // Convert the object to a JSON string
    const jsonString = JSON.stringify(data);

    // Write the JSON string to a file
    fs.writeFile(
        "../../data/products.json",
        jsonString,
        { flag: "w+" },
        (err: NodeJS.ErrnoException | null) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Data written to file");
            }
        }
    );
}
