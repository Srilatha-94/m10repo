import {test} from '@playwright/test'

test('salesorder',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('(//a[@href="javascript:;"])[1]').hover()
    await page.getByRole('//a[@name="Sales Order"]').click()
    await page.getByRole('img',{name:'Create Sales Order...'}).click()
    await page.locator('//input[@name="subject"]').fill('POS')
    await page.locator('//input[@name="customerno"]').fill('12432535')
    const [popup1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[2]').click()
    ])
    await popup1.locator('(//a[text()="Srilatha Gontyala"])[3]').click()

    await page.locator('//input[@name="account_name"]').fill('NCR')
    await page.locator('//textarea[@name="bill_street"]').fill('Chennai')
    await page.locator('//textarea[@name="ship_street"]').fill('Hyderabad')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})