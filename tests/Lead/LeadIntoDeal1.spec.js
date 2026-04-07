const { test, expect } = require('@playwright/test');

test("valid login", async function ({ page }) {

    // Navigate to application with error handling
    try {
      await page.goto("https://pipeclose.com/", { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('domcontentloaded');
    } catch (error) {
      throw new Error(`Failed to navigate to website: ${error.message}`);
    }
    await page.getByText('Log in').click();
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

    // Navigate to Lead section
    try {
      // Wait for redirect or navigation after login
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000); // Give time for any redirect
      const currentUrl = page.url();
      console.log('Current URL after login:', currentUrl);
      if (!/\/leads/i.test(currentUrl)) {
        const leadLink = page.locator('a[href="/Leads"]').first();
        await leadLink.waitFor({ state: 'visible', timeout: 10000 });
        await Promise.all([
          page.waitForURL(/\/leads/i),
          leadLink.click()
        ]);
        console.log('Clicked Leads link and navigated.');
      } else {
        // Already on Leads page
        await page.waitForSelector('body');
        console.log('Already on Leads page.');
      }
    } catch (error) {
      throw new Error(`Failed to navigate to Leads: ${error.message}`);
    }


    // Click on the +Lead button to create a new lead
    const plusLeadButton = page.locator('button:has(svg.lucide-plus)', { hasText: "Lead" });
    await plusLeadButton.waitFor({ state: 'visible', timeout: 10000 });
    await plusLeadButton.click();

    // Enter  the contact person name
await page.getByPlaceholder('name').first().fill('Dev Bisht');

// Enter the organization name 
const orgField = page.getByPlaceholder('name').nth(1);
await orgField.click();
await orgField.type('Pipeclose');
await page.waitForTimeout(1000);

// Enter the value
await page.getByPlaceholder('0').first().fill('3000');
await page.waitForTimeout(1500);

// Enter the requirements
await page.getByPlaceholder("Details about the lead's needs...").fill('Software Development Services');
await page.waitForTimeout(1500);

// Enter the phone number
await page.getByPlaceholder('Phone number').fill('9983483883');
await page.waitForTimeout(1500);

// Enter the email
await page.getByPlaceholder('Email').fill('dev.bisht@appnox.ai');
await page.waitForTimeout(1500);

// Click on save button
await page.getByRole('button', { name: 'Save' }).click();

// Wait for the page to complete the save action
await page.waitForTimeout(2000);

// Click on the lead name to view the lead details
try {
  // Wait for the lead row to be visible
  await page.waitForTimeout(1000);
  
  // Click on the lead row by finding the row containing the lead name
  const leadRow = page.locator('tr.group.cursor-pointer').filter({ hasText: 'Dev Bisht' }).first();
  await leadRow.waitFor({ state: 'visible', timeout: 10000 });
  await leadRow.click();
  
  // Wait for the lead details page to load
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  
  console.log('✓ Lead opened successfully');
} catch (error) {
  throw new Error(`Failed to open lead: ${error.message}`);
}

// click on the "Convert to Deal" button 
try {
  const convertToDealButton = page.locator('button:has-text("Convert to deal")').first();
  await convertToDealButton.waitFor({ state: 'visible', timeout: 10000 });
  await convertToDealButton.click();
  await page.waitForTimeout(2000);
  console.log('✓ Convert to Deal button clicked successfully');
} catch (error) {
  throw new Error(`Failed to click Convert to Deal button: ${error.message}`);
}

await page.waitForTimeout(2000);

// Click on the "Save" button in the convert to deal form 
const saveButton = page.locator('button:has-text("Save")').first();
await saveButton.waitFor({ state: 'visible', timeout: 10000 });
await saveButton.click();
await page.waitForTimeout(2000);

// Take screenshot to see the result after lead creation
await page.screenshot({ path: 'screenshots/Lead1-Created-Successfully.png' });
console.log('✓ Screenshot saved: screenshots/Lead1-Created-Successfully.png');

});

