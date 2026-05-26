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
test.describe('PLP', () => {
  test('@desktop PLP1 Verify user naviagtes to PLP applies filters and verify relevant products are disaplyed', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
    await plp.applyFiltersAndValidateProducts();
  });
  //cant handle because of shopify prview bar
  //  test('@mobile PLP1 Verify user naviagtes to PLP applies filters and verify relevant products are disaplyed', async ({ page }) => {
  //   await hp.PLPRedirectionHambergerMenu('New Launches');
  //   await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
  //  await plp.applyFiltersAndValidateProductsMobile();
  // });

  test('@desktop PLP2 Verify Remove All Filters functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.removeAppliedFilters();
  });

  test('@desktop PLP3 Verify product page navigation from collection page', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.PLPtoPDPnavigation();
  });
   test('@mobile PLP3 Verify product page navigation from collection page', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await plp.PLPtoPDPnavigation();
  });

  test('@desktop PLP4 Verify add to cart functionality from collection page', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.addToCartFRomPLP();

  });
  test('@mobile PLP4 Verify add to cart functionality from collection page', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await plp.addToCartFRomPLP();

  });

  test('@desktop PLP5 Verify You may also like section presence and navigation', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Bestsellers');
    await expect(plp.ymalSection).toBeVisible();
    await plp.openYmalViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/all-products");
  }
  );
   test('@mobile PLP5 Verify You may also like section presence and navigation', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Bestsellers');
    await expect(plp.ymalSection).toBeVisible();
    await plp.openYmalViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/all-products");
  }
  );

  test('@desktop PLP6 Verify Beauty Archives View All redirection', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Value Combos');
    await plp.openBeautyEditsViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair");
  });
   test('@mobile PLP6 Verify Beauty Archives View All redirection', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Value Combos');
    await plp.openBeautyEditsViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair");
  });


  test('@desktop PLP7 Verify FAQs section', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Value Combos');
    await expect(plp.faqsection).toBeVisible();
  });
  test('@mobile PLP7 Verify FAQs section', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Value Combos');
    await expect(plp.faqsection).toBeVisible();
  });

  test('@desktop PLP8 Verify Write to Us redirection', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.openWriteToUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
   test('@mobile PLP8 Verify Write to Us redirection', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.openWriteToUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
});

