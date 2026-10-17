import {test} from '@playwright/test'
// import loginData from '../../testdata/login.json'
// import quotesData from '../../testdata/quotes.json'

test.only('quotes',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('(//a[@href="javascript:;"])[1]').hover()
    await page.getByRole('link',{name:'Quotes'}).click()
    await page.getByRole('img',{name:'Create Quote...'}).click()
    await page.locator('//input[@name="subject"]').fill('quotation of POS')
    await page.locator('(//img[@src="themes/softed/images/btnL3Calendar.gif"])[2]').click()
    await page.locator('(//td[text()="25"])').click()
    await page.locator('//select[@name="carrier"]').selectOption({value:'BlueDart'})
    await page.locator('//select[@name="quotestage"]').selectOption({value:'Accepted'})
    const [popup1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[2]').click()
    ])
    await popup1.locator('(//a[text()="Srilatha Gontyala"])[3]').click()
    await page.locator('//input[@name="shipping"]').fill('shipped')
    const [popup2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[3]').click()
    ])
    await popup2.locator('//a[text()="NCR Voyix"]').click()
    await page.locator('//textarea[@name="bill_street"]').fill('100,gajularamaram')
    await page.locator('//input[@name="bill_pobox"]').fill('Medchal')
    await page.locator('//input[@name="bill_city"]').fill('Hyderabad')
    await page.locator('//input[@name="bill_state"]').fill('Telangana')
    await page.locator('//input[@name="bill_code"]').fill('500055')
    await page.locator('//input[@name="bill_country"]').fill('India')
    await page.locator('(//input[@name="cpy"])[2]').check()
    await page.locator('//textarea[@name="description"]').fill('Shipping and billing address are same')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})


test('quotes with ddt',async ({page}) => {
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('(//a[@href="javascript:;"])[1]').hover()
    await page.getByRole('link',{name:'Quotes'}).click()
    await page.getByRole('img',{name:'Create Quote...'}).click()
    await page.locator('//input[@name="subject"]').fill(quotesData.subject)
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[3]').click()
    ])
    await popup.locator('//input[@name="account_name"]').click()
    await page.locator('//textarea[@name="bill_street"]').fill(quotesData.billingAddress)
    await page.locator('//textarea[@name="ship_street"]').fill(quotesData.shippingAddress)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})