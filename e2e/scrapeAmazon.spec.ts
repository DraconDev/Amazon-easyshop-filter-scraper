// const debug = require("debug")("backend");
import {
    test,
    expect,
    ElementHandle,
    chromium,
    Fixtures,
    Page,
} from "@playwright/test";
import { writeToFile } from "../src/helpers/saveData";
import { ProductData } from "../src/types/product";
import { SearchParams } from "../src/types/searchParams";
import { getAmazonItems } from "../src/helpers/amazonScrape";

const testSearch = {
    searchField: "laptop",
    priceMinimum: "0",
    priceMaximum: "",
    votesMinimum: "200",
    ratingMinimum: "4.0",
    region: "co.uk",
    pages: "5",
};

test("itemFetched", async ({ page }) => {
    await getAmazonItems(page, testSearch);
});

