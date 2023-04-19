import { scrapeWebsite } from "@component/helpers/amazonScrape";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "POST") {
            const { body } = req;
            const data = await scrapeWebsite();
            res.status(200).json(data);
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
