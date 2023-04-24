import { scrapeWebsite } from "@component/helpers/amazonScrape";
import { SearchParams } from "@component/types/searchParams";
import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "GET") {
            const data = await scrapeWebsite(req.query as SearchParams);
            res.status(200).json(data);
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
