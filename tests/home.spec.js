const { test, expect } = require('@playwright/test');

test('home page has title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Home/);
});

test('home page has a header', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const header = await page.locator('h1');
    await expect(header).toHaveText('Welcome to the Home Page');
});