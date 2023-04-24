import { test, expect, Page } from "@playwright/test";

test.describe("Login Page", () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test("should display login form", async () => {
        await page.goto("https://example.com/login");
        const form = await page.waitForSelector("form");
        expect(form).not.toBeNull();
    });

    test("should show error message for invalid credentials", async () => {
        await page.goto("https://example.com/login");
        await page.fill("#username", "invaliduser");
        await page.fill("#password", "invalidpassword");
        await page.click("#login-button");
        const errorMessage = await page.waitForSelector(".error-message");
        expect(errorMessage).not.toBeNull();
    });
});
