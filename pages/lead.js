import { expect } from "@playwright/test"

export class lead2{
    #leadc         // here # is encapsulation
    #createlead
    #salutation
    #firstname
    #lastname
    #company
    #save
    #validation
    constructor(page){
        this.page=page
        this.#leadc=page.getByRole('link',{name:'Leads',exact:true})
        this.#createlead=page.getByRole('img',{name:'Create Lead...'})
        this.#salutation=page.locator('//select[@name="salutationtype"]')
        this.#firstname=page.locator('//input[@name="firstname"]')
        this.#lastname=page.locator('//input[@name="lastname"]')
        this.#company=page.locator('//input[@name="company"]')
        this.#save=page.locator('//input[@title="Save [Alt+S]"]').first()
        this.#validation=page.locator('//span[@id="dtlview_First Name"]')
    }
    async createleadmethod(firstname1,lastname1,company1){
        await this.#leadc.click()
        await this.#createlead.click()
        await this.#salutation.selectOption({value:'Mrs.'})
        await this.#firstname.fill(firstname1)
        await this.#lastname.fill(lastname1)
        await this.#company.fill(company1)
        await this.#save.click()
        await expect(this.#validation).toContainText(firstname1)
    }
}