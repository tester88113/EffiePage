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
        this.copywrightText = page.locator("text='Copyright © 2024 Elfie Pte. Ltd.']");

    }

    async takeScreenshotLogo() {
        await expect(this.effieLogo).toBeVisible();
        await this.page.screenshot({ path: 'screenshotLogo.png' });


    }

    async checkMenuChangetoX() {
        await expect(this.hambergerMenu).toBeVisible();
        //await this.page.waitForLoadState('networkidle');
        await this.hambergerMenu.click();
        await expect(this.xButoon).toBeVisible();
        //await this.page.waitForLoadState('networkidle');
        await this.page.screenshot({ path: 'screenshotXbutton.png' });
        await this.xButoon.click();
    }

    async checkCopywrightText() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        //await expect(this.copywrightText).toHaveText("Copyright 2023 Elfie Pte. Ltd.");
        //await this.page.screenshot({path: 'screenshotCopywrightText.png'});

        try {

            this.page.screenshot({ path: 'copywrightText.png' });

            const text1 = await this.copywrightText.textContent();
            // Get the text content of the second element
            const text2 = "Copyright 2024 Elfie Pte. Ltd.";

            // Compare and return the result
            const result = text1?.trim() === text2?.trim();

            console.log("result ", result)

            return result;

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