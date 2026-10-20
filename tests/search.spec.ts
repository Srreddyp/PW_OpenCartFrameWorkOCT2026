import { test, expect } from '../src/fixtures/pagefixtures';
import { SearchResultPage } from '../src/pages/SearchResultPage';
import { CsvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async ({ loginpage }) => {
    await loginpage.gotologinpage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});


const productData = CsvHelper.readCsv('src/data/product.csv');
for(const row of productData){
test(`@regression verify search results count - ${row.searchkey} - ${row.productname} `, async ({ homepage,searchResultPage }) => {
    await homepage.doSerach(row.searchkey);
    expect(await searchResultPage.getproducSearchResultCount()).toBe(Number(row.resultcount));

}); 
}


//Select Product
for(const row of productData){
test(` verify user is able to land on the product page- ${row.searchkey} - ${row.productname} `, async ({ homepage,searchResultPage,page }) => {
    await homepage.doSerach(row.searchkey);
    await searchResultPage.selectProduct(row.productname);
    expect(await page.title()).toBe(row.productname);
});
  
}


test('verify user is able to land on the product page Screen Details -', async ({ homepage, searchResultPage, page }) => {
    await homepage.doSerach('macbook'),
    await searchResultPage.selectProduct('MacBook Pro');
    expect(await page.title()).toBe('MacBook Pro');

})


