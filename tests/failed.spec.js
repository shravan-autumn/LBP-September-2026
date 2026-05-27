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
test.describe('LBP', () => {
    test('@all HP30 Verify footer instagram links', async ({ page, context }) => {
        await hp.instagramRedirection(page, context);
    });
    test('@all PDP3 Verify invalid pincode validation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.checkInvalidPincode('123456');
    });
    test('@desktop PDP5 Verify add to cart from PDP', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.addToCartFromPDP();
    });
    //just desktop as shopify preview bar is overlapping with sticky ATC

    test('@desktop PDP6 Verify quantity increase', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.increaseQuantity();
    });
    //just desktop as shopify preview bar is overlapping with sticky ATC

    test('@desktop PDP7 Verify quantity decrease', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await pdp.decreaseQuantity();
    });
    test('@desktop Cart3 Verify adding multiple products to cart', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await c.addFirstProductToCart();
        await pdp.searchPLPToPDPNavigation("Best");
        await c.addSecondProductToCart();
    });
    //only desktop as shopify preview bar is overlapping with sticky ATC
    test('@desktop Cart4 Verify total price calculation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        var productPrice = parseInt(
            (await pdp.productPrice.first().textContent()).trim()
        );
        await pdp.addToCart();
        await c.closecart();
        // Second product
        await pdp.searchPLPToPDPNavigation("Best");
        var productPrice1 = parseInt(
            (await pdp.productPrice.first().textContent()).trim()
        );
        await pdp.addToCart();
        var expectedPrice = productPrice1 + productPrice;
        await c.cartTotalPrice.waitFor();
        const totalPrice = parseInt(
            (await c.cartTotalPrice.textContent()).replace(/[^\d]/g, '')
        );
        expect(totalPrice).toBe(expectedPrice);
    });
    //only desktop as shopify preview bar is overlapping with sticky ATC
    test('@desktop Cart5 Verify freebie product addition', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("Best");
        var productTitle = await pdp.addToCart();
        await expect(c.freebie).toBeVisible();
    });

    test('@desktop Cart6 Verify the cart quantity increase/decrease functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("oil");
        await c.addFirstProductToCart();
        await c.cartQunatitySelectorFunctionality(page);
    });
    test('@all HP17 Verify In the Spotlight section and add to cart functionality', async ({ page }) => {
        await hp.inTheSpotLightSection();
    });


});