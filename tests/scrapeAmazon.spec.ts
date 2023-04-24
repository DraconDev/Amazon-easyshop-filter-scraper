// const debug = require("debug")("backend");
import { test, expect, ElementHandle, chromium } from "playwright";
import { writeToFile } from "../src/helpers/saveData";
import { ProductData } from "../src/types/product";
import { SearchParams } from "../src/types/searchParams";

async function getElem(
    search: string,
    product: ElementHandle<SVGElement | HTMLElement>
) {
    const elem = await product.$(search);
    if (!elem) {
        return null;
    }
    const elemFormat = (await elem.textContent()) ?? "";
    return elemFormat.trim().replace(",", "");
}

const testSearch = {
    searchField: "laptop",
    priceMinimum: "0",
    priceMaximum: "",
    votesMinimum: "200",
    ratingMinimum: "4.0",
    region: "co.uk",
    pages: "5",
};


export const scrapeWebsite = test("getAmazonItems,", async (props: SearchParams = testSearch) => {
// export async function scrapeWebsite(props: SearchParams = testSearch) {
    const products: ProductData[] = [];
    const BASE_URL = `https://www.amazon.${props.region}/s?k=`;
    // console.log(props);
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const buildQuery = props.searchField.split(" ").join("+");

    for (let i = 1; i <= +props.pages; i++) {
        await page.goto(
            BASE_URL + buildQuery + "&s=review-rank" + "&fs=true" + `&page=${i}`
        );
        const searchResults = await page.$$(
            "[data-component-type='s-search-result']"
        );
        for (const product of searchResults) {
            //! votes
            const voteCount = await getElem("a span.a-size-base", product);
            console.log(voteCount);
            if (voteCount == null || +voteCount < +props.votesMinimum) {
                break;
            }
            // if (!voteCount) {
            //     break;
            // }

            //! rating
            const ratingRaw = await getElem('span:has-text("stars")', product);
            if (ratingRaw == null) {
                break;
            }
            const rating = parseFloat(ratingRaw?.slice(0, 3)).toFixed(1);

            // const ratingRaw = await getElem('span:has-text("stars")', product);
            // if (
            //     !ratingRaw ||
            //     parseFloat(ratingRaw) < parseFloat(props.ratingMinimum)
            // ) {
            //     break;
            // }
            // const rating = parseFloat(ratingRaw?.slice(0, 3)).toFixed(1);

            // price
            // const priceWhole = await getElem("span.a-price-whole", product);
            // const priceFraction = await getElem("span.a-price-fraction", product);
            // const price = `${priceWhole}${priceFraction}`;

            // symbol
            // const priceSymbol = await getElem("span.a-price-symbol", product);

            // ! price
            const priceNew = await getElem("span.a-offscreen", product);
            console.log(priceNew);
            if (priceNew == null) {
                break;
            }
            const priceSymbol = priceNew.slice(0, 1);
            const price = priceNew.slice(1).replace(",", "");

            // console.log(priceNew);
            // const prime = (await product.$("[aria-label*=Prime]"))
            //     ? true
            //     : false;
            // const sponsored = (await product.$("[aria-label*=Sponsored]"))
            //     ? true
            //     : false;

            // ! image
            const image = await product.$("img");
            const imageSrc = await image?.getAttribute("src");

            // ! name
            const name = await getElem("h2", product);

            const productData = {
                name: name as string,
                rating: +rating,
                voteCount: voteCount,
                image: imageSrc as string,
                // prime: prime as boolean,
                // sponsored: sponsored as boolean,
                price: price,
                priceSymbol: priceSymbol ?? "",
            };
            products.push(productData);
        }
    }
    writeToFile(products);
    return products as ProductData[];
}

