import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {

    //private Variable 

    private readonly logoutlink: Locator;
    private readonly headers: Locator;
    // private readonly search: Locator;
    // private readonly searchIcon: Locator;


    constructor(page: Page) {
        super(page);
        this.logoutlink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
        // this.search = page.getByRole('textbox', { name: 'search' })
        // this.searchIcon = page.locator('div#search button');
    }


    //methods
    // async getHomePageTitle(): Promise<string> {
    //     return await this.page.title();

    // }
    async isLogoutLinkExist(): Promise<boolean> {
        await this.logoutlink.waitFor({state:"visible"})
        return await this.logoutlink.isVisible();

    }

    async getHomePageHeaders(): Promise<string[]> {
        //await this.logoutlink.waitFor({ state: "visible" })
        //Sometimes the page takes time to load, so you use waitForVisible
        return await this.headers.allInnerTexts();

    }

    async doSerach(serachkey: string): Promise<void> {
        console.log(`serachkey: ${serachkey}`);
        await this.searchBox.fill(serachkey);
        await this.searchIcon.click();

    }


}