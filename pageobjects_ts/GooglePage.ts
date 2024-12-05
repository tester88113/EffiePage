import { test, expect, Locator, Page } from '@playwright/test';


export class GooglePage {
    inputText: Locator;
    acceptCookies: Locator;
    EffieLink: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;
       
        this.inputText = this.page.locator("textarea[ aria-label='Google Search']");
        this.EffieLink = this.page.locator("a[href='https://www.elfie.co/']");
        this.acceptCookies= page.getByRole('button', { name: /Accept All/i });
    }

    async goTo() {
        await this.page.goto("https://www.google.com/webhp?hl=en");
        await this.page.waitForLoadState('networkidle');
    }


     async searchEffieText(searchText: string) 
        {
           
             await this.inputText.click();
             await this.inputText.fill(searchText);
             await this.page.keyboard.press('Enter');
             await this.page.waitForLoadState('networkidle');
             
             await this.EffieLink.click();
           //await this.page.waitForLoadState('networkidle');
           await this.acceptCookies.isEnabled();
            await this.acceptCookies.click();
        }


    }

module.exports = { GooglePage };