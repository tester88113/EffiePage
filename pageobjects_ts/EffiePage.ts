import { test, expect, Locator, Page } from '@playwright/test';

export class EffiePage {

    effieLogo: Locator;
    hambergerMenu: Locator;
    xButoon: Locator;
    copywrightText: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;


        this.effieLogo = page.locator("div.app-icon-holder");
        this.hambergerMenu = page.locator("div.header-menu-button-icon-wrapper");
        this.xButoon = page.locator('div.icon-wrapper');
        this.copywrightText = page.locator('.footer-content-bottom .text-block');

    }

    async takeScreenshotLogo() {
        await expect(this.effieLogo).toBeVisible();
        await this.page.screenshot({ path: 'screenshots/screenshotLogo.png' });


    }

    async checkMenuChangetoX() {
        await expect(this.hambergerMenu).toBeVisible();
        //await this.page.waitForLoadState('networkidle');
        await this.hambergerMenu.click();
        await expect(this.xButoon).toBeVisible();
        //await this.page.waitForLoadState('networkidle');
        await this.page.screenshot({ path: 'screenshots/screenshotXbutton.png' }); 
        await this.xButoon.click();
    }

    async checkCopywrightText() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
       

        try {

           

            const text1 = await this.copywrightText.innerText();
            console.log(text1);
            const text2 = "Copyright 2023 Elfie Pte. Ltd.";


            // check
            expect(text1).toBe(text2);

    

        } catch (error) {
            console.error('Text is not matching:', error);
            return false;

        }

    }

    async captureScreenshot(name: string) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}



module.exports = { EffiePage };