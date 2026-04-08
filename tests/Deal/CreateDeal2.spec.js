const { test, expect } = require('@playwright/test');
test("Deal Creation",async function ({page, context}) {

    // Launch the page
    await page.goto("https://pipeclose.com/")

        await page.getByText('Log in').click();
        await page.waitForTimeout(1000);


    // Enter email address
    await page.getByPlaceholder("Email").type ("ashishappnox14@gmail.com")

    // Enter the Password
    await  page.getByPlaceholder("Password").type("Ashish@567")
    await page.waitForTimeout(1000)

    // Click on login button
    await page.locator("//button[@type ='submit']").click()

    // Click on deal to deal creation
await page.locator("//button[normalize-space()='Deal']").click();

// Enter  the contact person name
await page.getByPlaceholder('name').first().fill('Shivam');

// Enter the organization name 
const orgField = page.getByPlaceholder('name').nth(1);
await orgField.click();
await orgField.type('Pipeclose');
await page.waitForTimeout(1000);
// Navigate to dropdown option with arrow key and select with Enter
await orgField.press('ArrowDown');
await page.waitForTimeout(300);
await orgField.press('Enter');
await page.waitForTimeout(500);

// Enter the value 
await page.getByPlaceholder('0').fill('4000');

// Enter the phone number 
await page.waitForTimeout(500);
const phoneLabel = page.locator('text="Phone"').first();
await phoneLabel.scrollIntoViewIfNeeded();
const phoneInput = phoneLabel.locator('xpath=following::input[1]');
await phoneInput.click();
await phoneInput.clear();
await phoneInput.fill('9878473848');
await page.waitForTimeout(500);

// Enter the email 
const emailLabel = page.locator('text="Email"').last();
await emailLabel.scrollIntoViewIfNeeded();
const emailInput = emailLabel.locator('xpath=following::input[1]');
await emailInput.click();
await emailInput.clear();
await emailInput.fill('shivam.appnox@gmail.com');
await page.waitForTimeout(300);

// Click on save button
await page.getByRole('button', { name: 'Save' }).click();

// Enter the reqirement 

})