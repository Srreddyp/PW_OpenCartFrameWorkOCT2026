import { log } from 'console';
import { test, expect } from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelpher';
import { JsonHelper } from '../src/utils/JsonHelper';

test.beforeEach(async ({ loginpage }) => {
    await loginpage.gotologinpage();
})


test('Verify the title', async ({ loginpage }) => {
    const title = await loginpage.pageTitle();
    expect(title).toBe('Account Login')

});


test('forgot password', async ({ loginpage }) => {
    expect(await loginpage.forgottenPassword()).toBeTruthy();
})

//1.With Fixtures- Sequence Mode
test('login to wrong credtionlas with fixtures', async ({ loginpage, testData }) => {
    for (let row of testData) {
        await loginpage.doLogin(row.username, row.password);
        expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    }

})


let testData = CsvHelper.readCsv('src/data/loginData.csv');
for (let row of testData) {
    //1.Without Fixtures- Parallel Mode
    test(`login to wrong credtionlas without fixtures ${row.username}-${row.password} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}


let loginTestData = ExcelHelper.readExcel('src/data/openCartTestData.xlsx','login')
for (let row of loginTestData) {
    test(`lnvalid login test with excel data - ${row.username}-${row.password} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}


let loginJsonData = JsonHelper.readjson('src/data/logindata.json')
for (let [index, row] of loginJsonData.entries()) {
    test(`lnvalid login test with JSON data  - ${row.username} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}