const { test, expect } = require('@playwright/test');

test("Valid Login", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("admin123")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click()

    await page.getByText ("Logout").click()
    await page.waitForTimeout(4000)

    await expect(page).toHaveURL(/login/)

  //  await page.locator("//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]").click()

});
