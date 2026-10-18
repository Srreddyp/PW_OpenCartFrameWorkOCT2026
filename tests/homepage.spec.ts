import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";


let homepage: HomePage;// Global variable 

test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.gotologinpage();
    await loginPage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
    homepage = new HomePage(page);
});


//Remove the page
test('navigate the homepage', async ({ }) => {
    expect(await homepage.getPageTitle()).toBe('My Account');

})


//Remove the page
test('Verify the logout link', async ({ }) => {
    expect(await homepage.isLogoutLinkExist()).toBeTruthy();

})


//Remove the page
test('Headers verify the homepage', async ({ }) => {

    let headers = await homepage.getHomePageHeaders();
    expect(headers).toHaveLength(4);

    expect(headers).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'

    ])


})


