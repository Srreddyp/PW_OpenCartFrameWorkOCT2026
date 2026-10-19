import{test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async ({loginpage}) => {
    await loginpage.gotologinpage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});


test('@smoke home page title test', async ({homepage}) => {
    expect(await homepage.getPageTitle()).toBe('My Account');
})

test('@smoke logout link exist test', async ({homepage}) => {
    expect(await homepage.isLogoutLinkExist()).toBeTruthy();
})


test('@regression home page headers exist test', async ({homepage}) => {
    let headers = await homepage.getHomePageHeaders();
    expect(headers).toHaveLength(4);
    expect(headers).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])
})