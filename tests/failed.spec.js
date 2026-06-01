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

    test('@desktop HP3 Verify megamenu collection navigation', async ({ page }) => {
        page.on('response', response => {
            if (
                response.status() === 403 ||
                response.url().includes('cdn-cgi')
            ) {
                console.log('Possible Cloudflare challenge:', response.url());
            }
        });
        await hp.megamenuCollectionNavigation(page);
    });
    test('@all HP14 Verify add to cart functionality from collection tab', async ({ page }) => {

        await hp.addFirstProductToCartFromCollectionTab(page);
    });
    test('@all HP17 Verify In the Spotlight section and add to cart functionality', async ({ page }) => {
        await hp.inTheSpotLightSection();
    });

    test('@desktop PDP7 Verify quantity decrease', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        page.on('response', response => {
            if (
                response.status() === 403 ||
                response.url().includes('cdn-cgi')
            ) {
                console.log('Possible Cloudflare challenge:', response.url());
            }
        });
        await pdp.decreaseQuantity();
    });
    test('@all PDP9 Verify FAQ section display', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await expect(pdp.faqSection).toBeVisible();
    });

    test('@desktop PDP6 Verify quantity increase', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        page.on('response', response => {
            if (
                response.status() === 403 ||
                response.url().includes('cdn-cgi')
            ) {
                console.log('Possible Cloudflare challenge:', response.url());
            }
        });
        await pdp.increaseQuantity();
    });
    test('@desktop Cart6 Verify the cart quantity increase/decrease functionality', async ({ page }) => {
        // await pdp.searchPLPToPDPNavigation("oil");
        // await c.addFirstProductToCart();
        await c.cartQunatitySelectorFunctionality(page);
    });
    test('@desktop Cart5 Verify freebie product addition', async ({ page }) => {

        await c.freebieVisibility();

    });

});