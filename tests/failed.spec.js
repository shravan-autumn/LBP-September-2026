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

 test('@desktop Cart3 Verify adding multiple products to cart', async ({ page }) => {
         await pdp.searchPLPToPDPNavigation("oil");
         await c.addFirstProductToCart();
         // CI Flaky: Cloudflare intermittently interrupts AWS Jenkins execution, causing cart validation failures.
         // await pdp.searchPLPToPDPNavigation("Best");
         // await c.addSecondProductToCart();
     });
     //only desktop as shopify preview bar is overlapping with sticky ATC
     test('@desktop Cart4 Verify total price updation', async ({ page }) => {
         await pdp.searchPLPToPDPNavigation("oil");
         await c.totalPriceCalculation();
     });
});