import { test, expect, ElementHandle } from "@playwright/test";
import console from "console";
import { writeToFile } from "../helpers/writeToFile";
import { ProductData } from "../types/product";
import { float } from "aws-sdk/clients/cloudfront";
import image from "next/image";

const country = "co.uk";
const BASE_URL = `https://www.amazon.${country}/s?k=`;
const search = `black sweater`;

async function getElem(
    search: string,
    product: ElementHandle<SVGElement | HTMLElement>
) {
    const elem = await product.$(search);
    const elemFormat = elem ? await elem.textContent() : null;
    return elemFormat;
}

export const fetchItems = test("getAmazonItems,", async ({ page }) => {
    const buildQuery = search.split(" ").join("+");
    await page.goto(BASE_URL + buildQuery);
    await page
        ?.getByRole("button", { name: "Continue without accepting" })
        .click();
    const searchResults = await page.$$(
        "[data-component-type='s-search-result']"
    );

    const products: ProductData[] = [];
    for (const product of searchResults) {
        const priceWhole = await getElem("span.a-price-whole", product);
        const priceFraction = await getElem("span.a-price-fraction", product);
        const price = `${priceWhole}${priceFraction}`;
        const name = await getElem("h2.a-size-mini", product);

        const prime = (await product.$("[aria-label*=Prime]")) ? true : false;
        const sponsored = (await product.$("[aria-label*=Sponsored]"))
            ? true
            : false;

        const ratingRaw = await getElem('span:has-text("stars")', product);
        const rating = ratingRaw
            ? parseFloat(ratingRaw.slice(0, 3)).toFixed(1)
            : null;

        const ratingCount = await getElem("a span.a-size-base", product);
        const image = await product.$("img");
        const imageSrc = await image?.getAttribute("src");

        const productData = {
            price: parseFloat(price),
            name: name?.trim() as string,
            prime: prime as boolean,
            rating: rating && parseFloat(rating),
            ratingCount: ratingCount ? parseFloat(ratingCount) : 0,
            image: imageSrc as string,
            sponsored: sponsored as boolean,
        };
        products.push(productData);
        console.log(productData);
    }
    writeToFile(products);
});
