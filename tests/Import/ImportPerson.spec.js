const { test, expect } = require('@playwright/test');
test("Deal Creation",async function ({page, context}) {

    // Launch the page
    await page.goto("https://engineersarmy.com/")

    // Enter email address
    await page.getByPlaceholder("Email").type ("ashishappnox1@gmail.com")

    // Enter the Password
    await  page.getByPlaceholder("Password").type("Ashish@567")
    await page.waitForTimeout(1000)

    // Click on login button
    await page.locator("//button[@type ='submit']").click()

    // Wait for the Import link to be visible
    await page.getByRole('link', { name: 'Import' }).waitFor()

    // Click on Import
    await page.getByRole('link', { name: 'Import' }).click()
    await page.waitForTimeout(1000)

    // Wait for the Import People link to be visible
    await page.getByRole('button', { name: 'Import People' }).waitFor()
    await page.waitForTimeout(1000)

    // Click on Import People
    await page.getByRole('button', { name: 'Import People' }).click()
    

});