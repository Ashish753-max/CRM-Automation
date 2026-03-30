const {test, expect} = require('@playwright/test');
const { timeStamp } = require('node:console');
test("dropdown handle", async ({ page}) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.waitForTimeout(2000); // wait  for 2 seconds
    
  //  await page.selectOption('#dropdown', '1');  // select the first option

    await page.selectOption('#dropdown', '2');  // select the secpnd option 
})

