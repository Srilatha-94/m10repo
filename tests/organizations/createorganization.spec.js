import {test} from '@playwright/test'
// import loginData from '../../testdata/login.json'
// import organizationsData from '../../testdata/organizations.json'

test.only('organization',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Organizations'}).click()
    await page.getByRole('img',{name:'Create Organization...'}).click() //press cntl+space to get role suggestions
    await page.locator('//input[@name="accountname"]').fill('NCR Voyix')
    await page.locator('//input[@name="website"]').fill('www.ncrvoyix.com')
    await page.locator('//input[@name="tickersymbol"]').fill('sensex_info')
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@src="themes/softed/images/select.gif"]').click()
    ])
    await popup.locator('//a[text()="NCR Voyix"]').click()
    await page.locator('//input[@id="employees"]').fill('5')
    await page.locator('//input[@id="email2"]').fill('srilatha@gmail.com')
    await page.locator('//select[@name="industry"]').selectOption({value:'Engineering'})
    await page.locator('//select[@name="accounttype"]').selectOption({value:'Analyst'})
    await page.locator('//input[@id="phone"]').fill('6736586249827')
    await page.locator('//input[@id="fax"]').fill('fax')
    await page.locator('//input[@id="otherphone"]').fill('673658624565')
    await page.locator('//input[@id="email1"]').fill('srilatha94@gmail.com')
    await page.locator('//input[@id="ownership"]').fill('Yes')
    await page.locator('//select[@name="rating"]').selectOption({value:'Active'})
    await page.locator('//input[@id="siccode"]').fill('24565')
    await page.locator('//input[@name="annual_revenue"]').fill('500000')
    await page.locator('//input[@name="notify_owner"]').check()
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


test('organization with ddt',async ({page}) => {
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Organizations'}).click()
    await page.getByRole('img',{name:'Create Organization...'}).click() //press cntl+space to get role suggestions
    await page.locator('//input[@name="accountname"]').fill(organizationsData.organizationName)
    await page.locator('//input[@name="website"]').fill(organizationsData.website)
    await page.locator('//input[@name="tickersymbol"]').fill(organizationsData.tickerSymbol)
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@src="themes/softed/images/select.gif"]').click()
    ])
    await popup.locator('//a[text()="NCR Voyix"]').click()
    await page.locator('//input[@id="employees"]').fill('5')
    await page.locator('//input[@id="email2"]').fill(organizationsData.email)
    await page.locator('//select[@name="industry"]').selectOption({value:'Engineering'})
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})