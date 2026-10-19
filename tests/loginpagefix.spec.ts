import { log } from 'console';
import { test, expect } from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelpher';
import { JsonHelper } from '../src/utils/JsonHelper';

test.beforeEach(async ({ loginpage }) => {
    await loginpage.gotologinpage();
})


test('@smoke login page title test', async ({ loginpage }) => {
    const title = await loginpage.pageTitle();
    expect(title).toBe('Account Login')

});


test('@regression forgot pwd link exist test', async ({ loginpage }) => {
    expect(await loginpage.forgottenPassword()).toBeTruthy();
})


//DD_1. sequence mode -- only 1 test is running with test data one by one using testData from fixture
test('@regression login to app using wrong credentials with Data driven test', async ({ loginpage, testData }) => {
    for (let row of testData) {
        await loginpage.doLogin(row.username, row.password);
        expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    }

})

//DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise...
let testData = CsvHelper.readCsv('src/data/loginData.csv');
for (let row of testData) {
    test(`@regression invalid login test with ${row.username}-${row.password} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}


//MS excel - office latest
//xlsx format
//maintenance
let loginTestData = ExcelHelper.readExcel('src/data/openCartTestData.xlsx','login')
for (let row of loginTestData) {
    test(`@regression invalid login test with excel data - ${row.username}-${row.password} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}


let loginJsonData = JsonHelper.readjson('src/data/logindata.json')
for (let [index, row] of loginJsonData.entries()) {
    test(`invalid login test with JSON data - ${row.username} `, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
         expect(await loginpage.verifyinvalidLoginerror()).toBeTruthy();
    })
}