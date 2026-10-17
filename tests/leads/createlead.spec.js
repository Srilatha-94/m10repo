import {test} from '@playwright/test'
// import loginData from '../../testdata/login.json'
// import leadData from '../../testdata/lead.json'
// import { login } from '../../pages/login'
// import { lead2 } from '../../pages/lead'

test.only('lead',async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Leads',exact:true}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mrs.'})
    await page.locator('//input[@name="firstname"]').fill('Arvika')
    let firstname = await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill('Gontyala')
    await page.locator('//input[@name="company"]').fill('NCR Voyix')
    await page.locator('//input[@id="designation"]').fill('QA Engineer')
    await page.locator('//select[@name="leadsource"]').selectOption({value:'Employee'})
    await page.locator('//select[@name="industry"]').selectOption({value:'Engineering'})
    await page.locator('//input[@name="annualrevenue"]').fill('₹50000')
    await page.locator('//input[@name="noofemployees"]').fill('5')
    await page.locator('//input[@name="secondaryemail"]').fill('srilatha@gmail.com')
    await page.locator('//input[@id="phone"]').fill('1234567890')
    await page.locator('//input[@id="mobile"]').fill('0987654321')
    await page.locator('//input[@id="fax"]').fill('abcdef')
    await page.locator('//input[@id="email"]').fill('srilatha@ncr.com')
    await page.locator('//input[@name="website"]').fill('www.ncr.com')
    await page.locator('//select[@name="leadstatus"]').selectOption({value:'Contacted'})
    await page.locator('//select[@name="rating"]').selectOption({value:'Active'})
    await page.locator('//textarea[@name="lane"]').fill('KPHB,Hyderabad')
    await page.locator('//input[@id="code"]').fill('500000')
    await page.locator('//input[@id="country"]').fill('India')
    await page.locator('//input[@id="pobox"]').fill('Telangana')
    await page.locator('//input[@id="city"]').fill('Hyderabad')
    await page.locator('//input[@id="state"]').fill('Telangana')
    await page.locator('//textarea[@name="description"]').fill('The lead is created successfully')
    await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    let fn = await page.locator('//span[@id="dtlview_First Name"]').textContent() // verifying the created user
    console.log(fn);

    if(firstname===fn){
        console.log('the lead is created');
    }else{
        console.log('lead is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link',{name:'Sign Out'}).click()
})


test('lead with ddt',async ({page}) => {
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:'Leads',exact:true}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//input[@name="firstname"]').fill(leadData.firstname)
    await page.locator('//input[@name="lastname"]').fill(leadData.lastname)
    await page.locator('//input[@name="company"]').fill(leadData.company)
    await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link',{name:'Sign Out'}).click()
})


test('lead with pom and ddt',async ({page}) => {
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let leadCreation = new lead2(page)
    await leadCreation.createleadmethod(leadData.firstname,leadData.lastname,leadData.company)  
})