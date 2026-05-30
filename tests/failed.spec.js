import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage.js';
import { PLP } from '../pages/plp.js';
import { Cart } from '../pages/cart.js';
import { PDP } from '../pages/pdp.js';
import { Login } from '../pages/login.js';

let hp;
let plp;
let c;
let pdp;
let lp;

test.beforeEach(async ({ page }) => {
    hp = new HomePage(page);
    plp = new PLP(page);
    c = new Cart(page);
    pdp = new PDP(page);
    lp = new Login(page);
    await hp.goto();
    await hp.cookieAccept;
    await hp.removeCookiePopup(page);

});
test.describe('Failed', () => {

    test('@desktop PDP6 Verify quantity increase', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.increaseQuantity();
    });

    test('@desktop PDP7 Verify quantity decrease', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.decreaseQuantity();
    });
});