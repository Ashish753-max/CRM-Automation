/*👉 What you learn:
Launch browser
Navigate to URL
Assertion  */

const {test, expect} = require('@playwright/test');
test('open google and check title', async ({page}) => {

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
})