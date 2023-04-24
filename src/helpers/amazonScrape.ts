import { ProductData } from "@component/types/product";
import { SearchParams } from "@component/types/searchParams";
import { ElementHandle, Page, chromium } from "playwright";
import { writeToFile } from "./saveData";

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

export async function scrapeWebsite(props: SearchParams) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    return await getAmazonItems(page, props);
}

export async function getAmazonItems(page: Page, props: SearchParams) {
    const products: ProductData[] = [];
    const BASE_URL = `https://www.amazon.${props.region}/s?k=`;
    const buildQuery = props.searchField.split(" ").join("+");
    for (let i = 1; i <= +props.pages; i++) {
        await page.goto(
            // BASE_URL + buildQuery + "&fs=true" + `&page=${i}`
            BASE_URL + buildQuery + "&s=review-rank" + "&fs=true" + `&page=${i}`
        );
        const searchResults = await page.$$(
            "[data-component-type='s-search-result']"
        );
        for (const product of searchResults) {
            //! votes
            const voteCount = await getElem(
                "a[href*=customerReviews]",
                product
            );
            if (voteCount === null || +voteCount < +props.votesMinimum) {
                break;
            }
            //! rating
            const ratingRaw =
                (await getElem('span:has-text(" stars")', product)) ?? "1.0";
            const rating = parseFloat(ratingRaw?.slice(0, 3)).toFixed(1);
            if (ratingRaw < props.ratingMinimum) {
                break;
            }
            // ! price
            const priceNew = await getElem("span.a-offscreen", product);
            if (priceNew == null) {
                break;
            }
            const priceSymbol = priceNew.slice(0, 1);
            const price = parseFloat(priceNew.slice(1).replace(",", ""));
            if (props.priceMinimum && price < +props.priceMinimum) {
                break;
            }
            if (props.priceMaximum && price > +props.priceMaximum) {
                break;
            }
            // ! image
            const image = await product.$("img");
            const imageSrc = await image?.getAttribute("src");
            // ! name
            const name = await getElem("h2", product);
            // ! link
            const linkElement = await product.$("h2 a");
            const link = await linkElement?.getAttribute("href");
            const productData = {
                name: name as string,
                rating: +rating,
                voteCount: voteCount,
                image: imageSrc as string,
                // prime: prime as boolean,
                // sponsored: sponsored as boolean,
                link: `https://www.amazon.${props.region}${link}`,
                price: price,
                priceSymbol: priceSymbol ?? "",
            };
            products.push(productData);
        }
    }
    // writeToFile(products);
    return products as ProductData[];
}
