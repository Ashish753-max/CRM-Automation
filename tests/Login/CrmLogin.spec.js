const { test, expect } = require('@playwright/test');

test("valid login", async function ({ page }) {

    await page.goto("https://pipeclose.com/")

    await page.getByPlaceholder("Email").type("ashishappnox1@gmail.com")

    await page.getByPlaceholder("Password").type("Ashish@567")
    await page.waitForTimeout(1000)

    await page.locator("//button[@type ='submit']").click()
    
    await page.waitForTimeout(2000)
    
    await page.screenshot({ path: 'screenshots/login-success.png' })

})

