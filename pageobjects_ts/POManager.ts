

import { GooglePage } from './GooglePage';
import { EffiePage } from './EffiePage';
import { Page } from '@playwright/test';

export class POManager {
    googlePage: GooglePage;
    effiePage: EffiePage;
    page: Page;


    constructor(page: Page) {
        this.page = page;
        this.googlePage = new GooglePage( this.page);
        this.effiePage = new EffiePage( this.page);
    }

    getGooglePage() {
        return this.googlePage;
    }

    getEffiePage() {
        return this.effiePage;
    }


}
module.exports = { POManager };