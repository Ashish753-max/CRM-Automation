const {test, expect} = require('@playwright/test');
test("checkbox handle", async ({ page}) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.waitForTimeout(2000);  // wait for 2 second 

    const checkbox = page.locator('input[type="checkbox"]').first();
    await checkbox.check();

    await expect(checkbox).toBeChecked();
})


