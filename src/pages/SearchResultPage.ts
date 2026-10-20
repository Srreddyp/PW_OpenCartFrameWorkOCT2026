import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";



export class SearchResultPage extends BasePage {

    //private Variable 

    private readonly searchReults: Locator;

    constructor(page: Page) {
        super(page);
        this.searchReults = page.locator('div.product-layout');
    }


    //methods
    async getproducSearchResultCount(): Promise<number> {
        return await this.searchReults.count();
    }

    async selectProduct(productname:string): Promise<void>{
        await this.page.getByRole('link', { name: productname, exact: true }).first().click();
        await this.page.waitForTimeout(2000);

    }

}