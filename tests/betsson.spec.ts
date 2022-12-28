import { test, expect,type Page } from '@playwright/test';

test('title of betsson.com',async({page})=>{

await page.goto('https://www.betssongroup.com/');

expect(await page.title()).toBe('Betsson Group - Your career in igaming');

await page.goto('https://www.betsafe.com/en');
await page.getByRole('button', { name: 'Accept All Cookies' }).click();


await page.getByRole('button', { name: 'Create Account' }).click();
    

});




//automation for betssongroup website and access the brand betsafe.

  test('test', async ({ page }) => {
    await page.goto('https://www.betssongroup.com/');
    await page.getByRole('button', { name: 'I Get it!' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('paragraph').filter({ hasText: 'With 20 brands, including Betsafe, Betsson, NordicBet, StarCasino and JallaCasin' }).getByRole('link', { name: 'Betsson' }).click();
    const page1 = await page1Promise;
    await page1.goto('https://www.betsson.com/en');
    await page1.getByRole('button', { name: 'Create Account' }).click();
    await page1.getByLabel('Your email address *').click();
   await page1.getByLabel('Your email address *').press('CapsLock');
    await page1.getByLabel('Your email address *').fill('resh');
    await page1.getByRole('button', { name: 'Cookies Settings' }).click();
    await page1.getByRole('button', { name: 'Reject All' }).click();
    await page1.getByLabel('Your email address *').click();
    await page1.getByLabel('Your email address *').fill('reshmacr95@gmail.com');
    await page1.getByLabel('Password *').click();
    await page1.getByLabel('Password *').press('CapsLock');
    await page1.getByLabel('Password *').press('CapsLock');
    await page1.getByLabel('Password *').fill('Reshma@123');
    await page1.locator('obg-m-registration-person-name div').filter({ hasText: 'First name *' }).nth(4).click();
    await page1.getByLabel('First name *').press('CapsLock');
    await page1.getByLabel('First name *').fill('R');
    await page1.getByLabel('First name *').press('CapsLock');
    await page1.getByLabel('First name *').fill('Reshma');
    await page1.getByLabel('First name *').press('Tab');
    await page1.getByLabel('Last name *').fill("cr");
    await page1.getByLabel('Last name *').press('Tab');
    await page1.getByLabel('Street *').fill('fgura');
    await page1.getByLabel('Street *').press('Tab');
    await page1.getByRole('combobox', { name: 'City' }).fill('malta');
    await page1.getByRole('combobox', { name: 'City' }).press('Tab');
    await page1.getByLabel('Postcode *').press('CapsLock');
    await page1.getByLabel('Postcode *').fill('FGR365');
    await page1.getByText('MaltaCountry *').click();
    await page1.locator('#mat-option-314').getByText('Malta').click();
    await page1.locator('#mat-select-value-13').click();
    await page1.getByRole('option', { name: 'EUR' }).getByText('EUR').click();
    await page1.locator('#mat-select-value-9').click();
    await page1.getByRole('option', { name: '+356' }).getByText('+356').click();
    await page1.getByLabel('Enter number *').click();
    await page1.getByLabel('Enter number *').fill('99978294');
    await page1.getByRole('combobox', { name: 'DD DD' }).locator('div').nth(2).click();
    await page1.getByText('05').click();
    await page1.getByRole('combobox', { name: 'MM MM' }).getByText('MM').click();
    await page1.getByRole('option', { name: 'May' }).getByText('May').click();
    await page1.getByRole('combobox', { name: 'YYYY YYYY' }).getByText('YYYY').click();
    await page1.getByText('2001').click();
    await page1.locator('#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  });