import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";


export class LoginPage extends BasePage {

    //private Variable 

    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordlink: Locator;
    private readonly logo: Locator;
    private readonly errormsglogin: Locator;


    constructor(page: Page) {
        super(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByLabel('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.forgottenPasswordlink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.logo = page.getByRole('img', { name: 'naveenopencart' });
        this.errormsglogin = page.locator('.alert.alert-danger.alert-dismissible');
    }

    async gotologinpage(): Promise<void> {
        await this.page.goto(`opencart/index.php?route=account/login`);
    }

    async pageTitle(): Promise<String> {
        return await this.page.title();
    }

    async forgottenPassword(): Promise<boolean> {
        return await this.forgottenPasswordlink.isVisible();

    }

    async verifyinvalidLoginerror() {

        return await this.errormsglogin.isVisible();
    }


    async doLogin(Username: string, Password: string): Promise<void> {
        console.log(`user cred: ${Username}: ${Password}`)
        await this.emailId.fill(Username);
        await this.password.fill(Password);
        await this.loginBtn.click();
        await this.page.waitForTimeout(3000);

    }











}