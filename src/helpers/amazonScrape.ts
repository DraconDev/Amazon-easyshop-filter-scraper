import { ElementHandle, chromium } from "playwright";

import { ProductData } from "../types/product";
import { writeToFile } from "@component/helpers/saveData";
import search from "@component/pages/api/products/search";
import { SearchParams } from "@component/types/searchParams";

async function getElem(
    search: string,
    product: ElementHandle<SVGElement | HTMLElement>
) {
    const elem = await product.$(search);
    const elemFormat = elem ? await elem.textContent() : "";
    return elemFormat;
}

export async function scrapeWebsite(props: SearchParams) {
    const BASE_URL = `https://www.amazon.${props.region}/s?k=`;
    console.log(props);
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const buildQuery = props.searchField.split(" ").join("+");
    await page.goto(BASE_URL + buildQuery);
    await page
        ?.getByRole("button", { name: "Continue without accepting" })
        .click();
    const searchResults = await page.$$(
        "[data-component-type='s-search-result']"
    );

    const products: ProductData[] = [];
    for (const product of searchResults) {
        // votes
        const voteCount = (await getElem("a span.a-size-base", product)) ?? "0";
        if (+voteCount < +props.votesMinimum) {
            break;
        }

        // rating
        const ratingRaw =
            (await getElem('span:has-text("stars")', product)) ?? "1.0";
        const rating = parseFloat(ratingRaw?.slice(0, 3)).toFixed(1);
        if (parseFloat(rating) < parseFloat(props.ratingMinimum)) {
            break;
        }

        const priceWhole = await getElem("span.a-price-whole", product);
        const priceFraction = await getElem("span.a-price-fraction", product);
        const price = `${priceWhole}${priceFraction}`;
        const name = await getElem("h2.a-size-mini", product);

        const prime = (await product.$("[aria-label*=Prime]")) ? true : false;
        const sponsored = (await product.$("[aria-label*=Sponsored]"))
            ? true
            : false;

        const image = await product.$("img");
        const imageSrc = await image?.getAttribute("src");

        const priceSymbol = await getElem("span.a-price-symbol", product);

        const productData = {
            price: parseFloat(price),
            name: name?.trim() as string,
            prime: prime as boolean,
            rating: +rating,
            voteCount: voteCount,
            image: imageSrc as string,
            sponsored: sponsored as boolean,
            priceSymbol: priceSymbol ?? "",
        };
        products.push(productData);
    }
    writeToFile(products);
    return products as ProductData[];
}
