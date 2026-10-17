import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import invoiceData from '../../testdata/invoice.json'

test('invoice',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('(//a[@href="javascript:;"])[1]').hover()
    await page.getByRole('link',{name:'Invoice'}).click()
    await page.getByRole('img',{name:'Create Invoice...'}).click()
    await page.locator('//input[@name="subject"]').fill('invoice of POS')
    await page.locator('//textarea[@name="bill_street"]').fill('Chennai')
    await page.locator('//textarea[@name="ship_street"]').fill('Hyderabad')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})


test.only('invoice with ddt',async ({page}) => {
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('(//a[@href="javascript:;"])[1]').hover()
    await page.getByRole('link',{name:'Invoice'}).click()
    await page.getByRole('img',{name:'Create Invoice...'}).click()
    await page.locator('//input[@name="subject"]').fill(invoiceData.subject)
    await page.locator('//textarea[@name="bill_street"]').fill(invoiceData.billingAddress)
    await page.locator('//textarea[@name="ship_street"]').fill(invoiceData.shippingAddress)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})