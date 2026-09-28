//POM test
import { test, expect } from '@playwright/test';
//import the class
import { HomePage } from '../pages/homepage.js';
import { PLP } from '../pages/plp.js';
import { Cart } from '../pages/cart.js';
import { PDP } from '../pages/pdp.js';

let hp;
let plp;
let c;
let pdp;

test.beforeEach(async ({ page }) => {
    hp = new HomePage(page);
    plp = new PLP(page);
    c = new Cart(page);
    pdp = new PDP(page);
    await hp.goto();
    await hp.cookieAccept;
    await hp.removeCookiePopup(page);

});

test.describe('Cart', () => {
    test('@all Cart1 Verify empty cart visibility', async ({ page }) => {
        await c.emptycartVisibility();
    });

    test('@all Cart2 Verify continue shopping functionality in empty cart', async ({ page }) => {
        await c.continueShopping();

    });
    test('@all Cart3 Verify ATC functionality and check the relevant product details', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addToCartAndVerifyTheContents();
    });
    test('@all Cart4 Verify ATC functionality and suceess message', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addToCartAndVerifyTheAddedMessage();
    });
    test('@all Cart5 Verify ATC functionality and discount price', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addToCartAndVerifyTheDiscount();
    });
    test.only('@all Cart6 Verify you have saved and shipping message visibility', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("Argan Oil & Lavender Shampoo - 200 ml");
        await c.addToCartAndVerifySavedandShippingMessage();
    });
    test('@all Cart7 Verify adding multiple products to cart and verify if cart count is correct', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await pdp.searchPLPToPDPNavigation("hair");
        await c.addSecondProductToCart();
    });
    test('@all Cart8 Verify total price updation', async ({ page }) => {
        await c.totalPriceCalculation();
    });
    test('@all Cart9 Verify price details section', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await pdp.searchPLPToPDPNavigation("hair");
        await c.addSecondProductToCart();
        await c.priceDetailsSection();
    });
    //freebie offer is now not available
    // test('@all Cart5 Verify freebie product addition', async ({ page }) => {
    //     await c.freebieVisibility();
    // });

    test('@all Cart10 Verify the cart quantity increase/decrease functionality', async ({ page }) => {
        // await pdp.searchPLPToPDPNavigation("oil");
        // await c.addFirstProductToCart();
        await c.cartQunatitySelectorFunctionality(page);
    });


    test('@all Cart11 Verify checkout navigation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("body");
        var productTitle = await pdp.addToCart();
        await c.checkoutValidation();
    });


    test('@all Cart12 Verify quantity selector maximum limit functionality', async ({ page }) => {
        await c.quantitySelectorDisableFunctionality(page);
    }
    );

    test('@all Cart13 Verify by increasing the quantity in PDP and check the quantiy update in cart', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.increaseQuantityandVerifyTheQuantity();
    });
    test('@all Cart14 Verify by decreasing the quantity in PDP and check the quantiy update in cart', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.decreaseQuantityandVerifyTheQuantity();
    });
    test('@all Cart15 Verify adding multiple products to cart and quantity selector increase and decrease functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await pdp.searchPLPToPDPNavigation("hair");
        await c.addSecondProductToCart();
        await c.multipleProductQuantitySectorFunctionality(page);
    });
    test('@all Cart16 Verify decreasing the quantity and check the cart behaviour', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await c.decreaseQuantityandVerifyTheCartBehavior();
    });
    test('@all Cart17 Verify removing the product from cart and check the cart behaviour', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await c.removeProductFromCart();
    });
    test('@all Cart18 Verify removing first product from cart and check the cart behaviour', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await c.addFirstProductToCart();
        await pdp.searchPLPToPDPNavigation("waves");
        await c.addSecondProductToCart();
        await c.removeFirstProductFromCart();
    });
    test('@all Cart19 Verify BUY3@1399 and BUY4@1799', async ({ page }) => {
        await c.buy3At1399andBuy4OfferAt1799();
    })
    test('@all Cart20 Verify combination of BUY3@1399 and BUY4@1799 and combo', async ({ page }) => {
        const offer = await c.combinationOfBuy3At1399andBuy4OfferAt1799andCombo();
        await pdp.searchPLPToPDPNavigation("combo");
        await c.combinePrice(offer);
    })
     test('@all Cart21 Verify checkout gokwikk validation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("body");
        var productTitle = await pdp.addToCart();
        await c.checkoutGokwikkValidation();
    });
    
     test('@all Cart22 Verify checkout gokwikk coupon validation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("waves");
        var productTitle = await pdp.addToCart();
        await c.checkoutGokwikCouponValidation();
    });
     test('@desktop Cart23 Verify checkout gokwik static page redirections', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("waves");
        var productTitle = await pdp.addToCart();
        await c.checkoutGokwikStaticPageRedirection();
    });
       test('@mobile Cart23 Verify checkout gokwik static page redirections', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("waves");
        var productTitle = await pdp.addToCart();
        await c.checkoutGokwikStaticPageRedirectionMobile();
    });
    test('@all Cart24 Verify checkout gokwik phone number validation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("waves");
        var productTitle = await pdp.addToCart();
        await c.phoneValidationGokwik();
    });

});
