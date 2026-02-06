const {test, expect}=require('@playwright/test')
test('Launch application',async({page}) => {

    await page.goto('https://travelmatic.bharatcrypto.com/');
    await expect(page).toHaveTitle('Travelmatic');

    
})