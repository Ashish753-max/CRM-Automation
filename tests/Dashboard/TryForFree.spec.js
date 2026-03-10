const { test, expect } = require('@playwright/test');

test("valid login", async function ({ page }) {

    try {
    // Navigate to application with error handling
    try {
      await page.goto("https://pipeclose.com/", { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('domcontentloaded');
    } catch (error) {
      throw new Error(`Failed to navigate to website: ${error.message}`);
    }
    await page.getByRole('button', { name: 'Try it free' }).click();
    await page.waitForTimeout(1000);

    // Wait for 5 seconds to ensure dashboard is loaded, then take final screenshot
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/Dashboard Try it free-end.png' });

  } catch (error) {
    console.error("Test error:", error.message);
    throw error;
  }

});

