
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CsvHelper } from '../utils/CsvHelper';
import { SearchResultPage } from '../pages/SearchResultPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';



type pageFixtures = {
    loginpage: LoginPage,
    homepage: HomePage,
    searchResultPage: SearchResultPage,
    productInfoPage : ProductInfoPage ,
    testData: Record<string, string>[]

}

export let test = baseTest.extend<pageFixtures>({

    loginpage: async ({ page }, use) => {
        let loginpage = new LoginPage(page);
        await use(loginpage);
    },

    homepage: async ({ page }, use) => {
        let homepage = new HomePage(page);
        await use(homepage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    },


    searchResultPage: async ({ page }, use) => {
        let searchResultPage = new SearchResultPage(page);
        await use(searchResultPage);
    },
     productInfoPage: async ({ page }, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    }


})

export { expect } from '@playwright/test'


