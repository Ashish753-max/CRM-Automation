const { test, expect } = require('@playwright/test');

test("valid login", async ({ page }) => {
  try {
    // Navigate to application
    try {
      await page.goto("https://pipeclose.com/", { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('domcontentloaded');
    } catch (error) {
      throw new Error(`Failed to navigate to website: ${error.message}`);
    }

    await page.getByText('Log in').click();
    await page.waitForTimeout(1000);

    // Login
    try {
      const emailField = page.getByPlaceholder("Email");
      if (!await emailField.isVisible({ timeout: 5000 })) {
        throw new Error("Email field not visible on login page");
      }
      await emailField.fill("ashishappnox14@gmail.com");
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

    // Wait for dashboard to load
    try {
      await page.waitForLoadState("networkidle", { timeout: 10000 });
      await page.waitForTimeout(2000);
    } catch (error) {
      console.warn(`Dashboard networkidle wait exceeded, continuing anyway: ${error.message}`);
      await page.waitForTimeout(3000);
    }

    // Navigate to mail section
    try {
      const mailLink = page.locator('a[href="/mail"]').first();
      await mailLink.waitFor({ state: 'visible', timeout: 10000 });
      await Promise.all([
        page.waitForURL('**/mail'),
        mailLink.click()
      ]);
    } catch (error) {
      throw new Error(`Failed to navigate to Mail: ${error.message}`);
    }

    // Click compose email
    try {
      const composeButton = page.getByRole('button', { name: /Compose Mail/i });
      await composeButton.waitFor({ state: 'visible', timeout: 10000 });
      await composeButton.click();
    } catch (error) {
      throw new Error(`Failed to click Compose Mail: ${error.message}`);
    }

    // Enter recipient email
    try {
      const recipientInput = page.getByPlaceholder("Add recipients...");
      if (!await recipientInput.isVisible({ timeout: 5000 })) {
        throw new Error("Recipient email input not found");
      }
      await recipientInput.fill('Kunal.appnox@gmail.com');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);
    } catch (error) {
      throw new Error(`Failed to enter recipient email: ${error.message}`);
    }

    // Enter subject
    try {
      const subjectField = page.getByPlaceholder("What's this about?");
      if (!await subjectField.isVisible({ timeout: 5000 })) {
        throw new Error("Subject field not visible");
      }
      await subjectField.fill("CRM Testing");
      await page.waitForTimeout(500);
    } catch (error) {
      throw new Error(`Failed to enter subject: ${error.message}`);
    }

    // Enter email body
    try {
      const emailEditor = page.locator('p[data-placeholder="Write your message here..."]');
      if (!await emailEditor.isVisible({ timeout: 5000 })) {
        throw new Error("Email editor not visible");
      }
      await emailEditor.click();
      await page.keyboard.type(
        'CRM should allow users to enter a recipient email address in the email input field and add it successfully upon pressing Enter. The system must validate the email format and display appropriate feedback for invalid inputs.'
      );
      await page.waitForTimeout(500);
      await page.keyboard.press('Tab');
      await page.waitForTimeout(300);
    } catch (error) {
      throw new Error(`Failed to enter email body: ${error.message}`);
    }

    // Click Save Draft
    try {
      const sendButton = page.getByRole('button', { name: 'Save Draft' });
      if (!await sendButton.isVisible({ timeout: 5000 })) {
        throw new Error("Save Draft button not visible");
      }
      await sendButton.scrollIntoViewIfNeeded();
      if (!await sendButton.isEnabled()) {
        throw new Error("Save Draft button is disabled (check required fields)");
      }
      try {
        await sendButton.click({ timeout: 5000 });
      } catch (clickError) {
        console.warn('Click failed, trying force click:', clickError.message);
        await sendButton.click({ force: true });
      }
      await page.waitForTimeout(2000);
    } catch (error) {
      throw new Error(`Failed to click Save Draft: ${error.message}`);
    }

    // Take final screenshot
    await page.screenshot({ path: 'screenshots/SaveDraftMail4-end.png' });

  } catch (error) {
    console.error("Test error:", error.message);
    throw error;
  }

});