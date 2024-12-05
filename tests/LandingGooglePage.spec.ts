
import { test, expect, Locator } from '@playwright/test';

import { POManager } from '../pageobjects_ts/POManager';



  test(` EffiePage`, async ({ page }) => {
    const poManager = new POManager(page);
    //go to Google Page => search Elfie text=> click on first link
    const searchText = "Elfie";
    const copywrightText= "Copyright 2023 Elfie Pte. Ltd.";
    const goolePage = poManager.getGooglePage()
    await goolePage.goTo();
    await goolePage.searchEffieText(searchText);


    // Check Logo and take screenshot
    const effiePage = poManager.getEffiePage();
    await effiePage.takeScreenshotLogo();


    // check Menu and take screenshot
    await effiePage.checkMenuChangetoX();


    //check Copywright and take screenshot
    const verified = await effiePage.checkCopywrightText();

    //await effiePage.captureScreenshot('copywrightText');
  });





