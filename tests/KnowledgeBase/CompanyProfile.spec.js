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
    await page.getByText('Sign in').click();
    await page.waitForTimeout(1000);

    // Login with validation
    try {
      const emailField = page.getByPlaceholder("Email");
      if (!await emailField.isVisible({ timeout: 5000 })) {
        throw new Error("Email field not visible on login page");
      }
      await emailField.fill("ashishappnox1@gmail.com");
      await page.waitForTimeout(500);

      const passwordField = page.getByPlaceholder("Password");
      if (!await passwordField.isVisible({ timeout: 5000 })) {
        throw new Error("Password field not visible on login page");
      }
      await passwordField.fill("Ashish@567");
      await page.waitForTimeout(500);

      const submitButton = page.locator("//button[@type='submit']");
      if (!await submitButton.isVisible()) {
        throw new Error("Submit button not found");
      }
      await submitButton.click();

    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }


  } catch (error) {
    console.error("Test error:", error.message);
    throw error;
  }

  // click on the AI knowledge base section 
  await page.getByRole('link', { name: 'AI Knowledge Base' }).click();
   await page.waitForTimeout(1000);
  // click on the company profile section
    await page.getByText('Company Profile').click();

    // enter the company name 
    await page.getByPlaceholder('e.g., Appnox Technologies').fill('Pipeclose');

    // click on the industry dropdown 
        await page.getByText('Select industry').click();

        // select technologies/saas
        await page.getByText('Technology / SaaS').click();

        // Enter the description 
        await page.getByPlaceholder('e.g., Describe what your company does, who it serves, and the value it provides.').fill('PipeClose is a CRM (Customer Relationship Management) platform that helps businesses manage their sales pipeline, customer communication, and business relationships from one place. It enables sales teams to capture leads, track deals, manage activities, and collaborate efficiently while reducing manual work through automation.')

        // click on the company size dropdown
        await page.getByText('Select size').click();

        // select the team size 
        await page.getByText('51 – 200 (Growing company)').click();

        // enter the website 
        await page.getByPlaceholder('e.g., https://www.example.com').fill('pipeclose.com');

        // press Enter key on keyboard
        await page.keyboard.press('Enter');

        

});

