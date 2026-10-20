import{test, expect} from '../src/fixtures/pagefixtures';
import { SearchResultPage } from '../src/pages/SearchResultPage';

test.beforeEach(async ({loginpage}) => {
    await loginpage.gotologinpage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});

test('@regression verify product images count', async({homepage,searchResultPage,productInfoPage})=>{
    await homepage.doSerach('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    let imgCount =  await productInfoPage.getProductImagesCount();
    console.log('total image:',imgCount);
    expect(imgCount).toBe(4);
})


test(' verify product Information/Data', async({homepage,searchResultPage,productInfoPage})=>{
    await homepage.doSerach('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    let actualProductInfoMap =  await productInfoPage.getProductInfo();
    console.log('actualProductInfoMap:',actualProductInfoMap);
    expect.soft(actualProductInfoMap.get('productHeader')).toBe('MacBook Pro');
    expect.soft(actualProductInfoMap.get('Brand')).toBe('Apple');
    expect.soft(actualProductInfoMap.get('Product Code')).toBe('Product 18');
    expect.soft(actualProductInfoMap.get('Reward Points')).toBe('800');
    expect.soft(actualProductInfoMap.get('productPrice')).toBe('$2,000.00');
    expect.soft(actualProductInfoMap.get('exTaxPrice')).toBe('$2,000.00');

})
