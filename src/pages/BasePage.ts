import { Locator, Page } from "@playwright/test";
import path from "node:path";


export class BasePage {
    protected readonly page: Page;
    protected readonly logo: Locator;;
    protected readonly searchBox: Locator;
    protected readonly searchIcon: Locator;
    protected readonly footerlinks: Locator;
    protected readonly currency: Locator;
    protected readonly cartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.logo = page.getByAltText('naveenopencart');
        this.searchBox = page.getByPlaceholder('Search');
        this.searchIcon = page.locator('div#search button');
        this.footerlinks = page.locator('#form-currency')
        this.currency = page.locator('footer a')
        this.cartButton = page.locator('div#cart button');


    }

    //actions

    async isLogVisible(): Promise<boolean> {
        return this.logo.isVisible();
    }
    async isSearchBoxVisible(): Promise<boolean> {
        return await this.searchBox.isVisible();

    }
    
    async isCartButtonVisible(): Promise<boolean> {
        return await this.cartButton.isVisible();

    }

    async isCurrentBoxVisible(): Promise<boolean> {
        return await this.currency.isVisible();

    }

    async getPageFootersCount(): Promise<number> {
        return await this.footerlinks.count();
    }

    async getPageFooters(): Promise<string[]> {
        return await this.footerlinks.allInnerTexts();
    }

    //page level genneric methods::::::::::::

    async getPageTitle(): Promise<string> {
        this.page.waitForLoadState("load")
        return await this.page.title();
    }

    getCurrentTitle(): string {
        return this.page.url()
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('load')
    }


    async takeScreenshot(name: string) {
        await this.page.screenshot({
            fullPage: true,
            path: 'report/screenshot/${name}.png'
        });

    }

}