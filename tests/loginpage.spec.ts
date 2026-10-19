import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";



//Global
let myLoginPage:LoginPage;

test.beforeEach(async ({page})=>{
myLoginPage = new LoginPage(page);
await myLoginPage.gotologinpage();

})

// Remove the Page
test('login page title test', async({})=>{
//let myLoginPage = new LoginPage(page);
//await myLoginPage.gotologinpage();
 const title = await myLoginPage.pageTitle();
 expect(title).toBe('Account Login')

});


// Remove the Page
test('forgot pwd link exist test', async({}) =>{
//let myLoginPage = new LoginPage(page);
//await myLoginPage.gotologinpage();
 expect(await myLoginPage.forgottenPassword()).toBeTruthy();

})