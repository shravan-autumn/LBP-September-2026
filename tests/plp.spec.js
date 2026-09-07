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
  test('@desktop PLP1 Verify user naviagtes to PLP and verify product details,banner and breadcrumb are disaplyed', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
    await plp.productDetailsVisibility();
  });
  test('@mobile PLP1 Verify user naviagtes to PLP and verify product details,banner and breadcrumb are disaplyed', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
    await plp.productDetailsVisibility();
  });
  test('@desktop PLP2 Verify user naviagtes to PLP applies filters and verify relevant products are disaplyed', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
    await plp.applyFiltersAndValidateProducts();
  });
  test('@mobile PLP2 Verify user naviagtes to PLP applies filters and verify relevant products are disaplyed', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await expect(page).toHaveURL('https://lovebeautyandplanet.in/collections/new-launches');
    await plp.applyFiltersAndValidateProductsMobile();
  });
  test('@desktop PLP3 Verify Remove All Filters functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.removeAppliedFilters();
  });
  test('@mobile PLP3 Verify Remove All Filters functionality', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await plp.removeAppliedFiltersMobile();
  });
  test('@desktop PLP4 Verify product page navigation from collection page', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.PLPtoPDPnavigation();
  });
  test('@mobile PLP4 Verify product page navigation from collection page', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await plp.PLPtoPDPnavigation();
  });
  test('@desktop PLP5 Verify add to cart functionality from collection page', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('New Launches');
    await plp.addToCartFRomPLP();
  });
  test('@mobile PLP5 Verify add to cart functionality from collection page', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('New Launches');
    await plp.addToCartFRomPLP();
  });
  test('@desktop PLP6 Verify You may also like section presence and navigation', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Bestsellers');
    await expect(plp.ymalSection).toBeVisible();
    await plp.openYmalViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/all-products");
  });
  test('@mobile PLP6 Verify You may also like section presence and navigation', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Bestsellers');
    await expect(plp.ymalSection).toBeVisible();
    await plp.openYmalViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/all-products");
  });
  test('@desktop PLP7 Verify Beauty Archives View All redirection', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Value Combos');
    await plp.openBeautyEditsViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair");
  });
  test('@mobile PLP7 Verify Beauty Archives View All redirection', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Value Combos');
    await plp.openBeautyEditsViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair");
  });
  test('@desktop PDP8 Verify beauty archives functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.beautyArchivesFunctionality();
  })
  test('@mobile PDP8 Verify beauty archives functionality', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.beautyArchivesFunctionality();
  })
  test('@desktop PDP9 Verify combo products', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Value Combos');
    await plp.comboProductFunctionality();
  })
  test('@mobile PDP9 Verify  combo products', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Value Combos');
    await plp.comboProductFunctionality();
  })
  test('@desktop PLP10 Verify FAQs section', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('Value Combos');
    await plp.faqFunctionality();
  });
  test('@mobile PLP10 Verify FAQs section', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('Value Combos');
    await plp.faqFunctionality();
  });
  test('@desktop PLP11 Verify Write to Us redirection', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.openWriteToUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
  test('@mobile PLP11 Verify Write to Us redirection', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.openWriteToUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
  test('@desktop PLP12 Verify move to top button functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.movetoTopFunctionality();
  });
  test('@mobile PLP12 Verify move to top button functionality', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.movetoTopFunctionality();
  });
  test('@desktop PLP13 Verify search functionality with valid data', async ({ page }) => {
    await plp.searchPLPToPDPNavigation("hair");
  });
  test('@desktop PLP14 Verify search functionality with invalid data', async ({ page }) => {
    await plp.searchPLPToPDPNavigation("invalidproduct");
  });

  test('@desktop PDP15 Verify you may also like to PDP redirection', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.youmayalsoLikePDPRedirection(page);
  })
  test('@mobile PDP16 Verify you may also like to PDP redirection', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.youmayalsoLikePDPRedirection(page);
  })
  test('@desktop PDP17 Verify you may also like ATC functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.youmayalsoLikeATC(page);
  })
  test('@mobile PDP17 Verify you may also like ATC functionality', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.youmayalsoLikeATC(page);
  })
  test('@desktop PDP18 Verify sold out product functionality', async ({ page }) => {
    await hp.PLPRedirectionFromMegaMenu('View All Products');
    await plp.soldoutFunctionality(page);
  })
  test('@mobile PDP18 Verify sold out product functionality', async ({ page }) => {
    await hp.PLPRedirectionHambergerMenu('View All Products');
    await plp.soldoutFunctionality(page);
  })

});

