import{test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async ({loginpage}) => {
    await loginpage.gotologinpage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});


test('navigate the homepage', async ({homepage}) => {
    expect(await homepage.getPageTitle()).toBe('My Account');
})

test('Verify the logout link', async ({homepage}) => {
    expect(await homepage.isLogoutLinkExist()).toBeTruthy();
})


test('Headers verify the homepage', async ({homepage}) => {
    let headers = await homepage.getHomePageHeaders();
    expect(headers).toHaveLength(4);
    expect(headers).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])
})


