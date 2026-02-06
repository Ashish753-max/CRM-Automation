const { test } = require('@playwright/test');

// launch the page 
test('Login', async ({ page }) => {
  await page.goto('https://travelmatic.bharatcrypto.com/');

  // 2️⃣ Enter Username 
  await page.getByPlaceholder('Enter Username or Email or Mobile')
            .fill('amit');

  // 3️⃣ Enter Password
  await page.getByPlaceholder('Enter your password')
            .fill('Appnox@2026');

  // 4️⃣ Click Login button
  await page.getByRole('button', { name: 'LOG IN' }).click();


});
