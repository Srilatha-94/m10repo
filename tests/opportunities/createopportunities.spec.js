import {test} from '@playwright/test'
// import loginData from '../../testdata/login.json'
// import opportunitiesData from '../../testdata/opportunities.json'

test.only('opportunity',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
    await page.getByRole('img',{name:'Create Opportunity...'}).click() //press cntl+space to get role suggestions
    await page.locator('//input[@name="potentialname"]').fill('job')
    await page.locator('//select[@id="related_to_type"]').selectOption({index:0})
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[1]').click()
    ])
    await popup.locator('//a[text()="NCR Voyix"]').click()
    await page.locator('//select[@name="opportunity_type"]').selectOption({value:'New Business'})
    await page.locator('//select[@name="leadsource"]').selectOption({value:'Existing Customer'})
    await page.locator('//input[@name="amount"]').fill('60000')
    await page.locator('(//img[@src="themes/softed/images/btnL3Calendar.gif"])[2]').click()
    await page.locator('//td[text()="15"]').click()
    await page.locator('//input[@name="nextstep"]').fill('nextstep')
    await page.locator('//select[@name="sales_stage"]').selectOption({value:'Negotiation/Review'})
    await page.locator('//input[@name="probability"]').fill('90%')
    await page.locator('//textarea[@name="description"]').fill('Very good opportunity')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test('opportunity with ddt',async ({page}) => {
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
    await page.getByRole('img',{name:'Create Opportunity...'}).click() //press cntl+space to get role suggestions
    await page.locator('//input[@name="potentialname"]').fill(opportunitiesData.opportunityName)
    await page.locator('//select[@id="related_to_type"]').selectOption({index:1})
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})