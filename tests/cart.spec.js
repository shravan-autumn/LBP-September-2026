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
//only desktop as shopify preview bar is overlapping with sticky ATC
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
//only desktop as shopify preview bar is overlapping with sticky ATC

  test('@desktop Cart6 Verify the cart quantity increase/decrease functionality', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("oil");
    await c.addFirstProductToCart();
    await c.cartQunatitySelectorFunctionality(page);
  });
//only desktop as shopify preview bar is overlapping with sticky ATC

  test.skip('@all Cart7 Verify checkout navigation', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("Best");
    var productTitle = await pdp.addToCart();
    await c.checkoutValidation();
  });
});

