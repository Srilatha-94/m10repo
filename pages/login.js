export class login{
    #username
    #password
    #loginbutton
    constructor(page){
        this.page=page
        this.#username=page.locator('//input[@name="user_name"]')
        this.#password=page.locator('//input[@name="user_password"]')
        this.#loginbutton=page.getByRole('button',{name:'Login'})
    }
    async launch(url){
        await this.page.goto(url)
    }
    async action(user_name,user_password){
        await this.#username.fill(user_name)
        await this.#password.fill(user_password)
        await this.#loginbutton.click()
    }
}