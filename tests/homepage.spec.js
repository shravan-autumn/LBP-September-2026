import { test, expect } from '@playwright/test';
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
test.describe('Homepage', () => {
  test('@desktop HP1 Verify logo is displayed', async ({ page }) => {
    await expect(hp.logo).toBeVisible();
  });
  test('@mobile HP1 Verify logo is displayed', async ({ page }) => {
    await expect(hp.logoMobile).toBeVisible();
  });

  test('@all HP2 Verify announcement bar navigation', async ({ page }) => {
    await hp.clickAnnouncementBar();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/bundle-offers");
  });

  test('@desktop HP3 Verify megamenu collection navigation', async ({ page }) => {
    await hp.megamenuCollectionNavigation(page);
  });
  test('@mobile HP3 Verify hamburger menucollection navigation', async ({ page }) => {
    await hp.hamburgerMenuCollectionNavigation(page);
  });

  test('@all HP4 Verify About Us navigation', async ({ page }) => {
    await hp.openAboutUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/our-story");
  });

  test('@all HP5 Verify Know Your Ingredients navigation', async ({ page }) => {
    await hp.openIngredients();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/ingredients");
  });

  test('@all HP6 Verify Beauty Archives navigation', async ({ page }) => {
    await hp.openBeautyArchives();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/blogs");
  });

  test('@all HP7 Verify Contact Us navigation', async ({ page }) => {
    await hp.openContactUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
  test("@all HP8 Verify search icon form header", async ({ page }) => {
    await hp.clickSearchTextfield();
    expect(hp.searchSuggestionBox).toBeVisible();
  });

  test("@all HP9 Verify account page navigation form header", async ({ page }) => {
    await hp.clickAccountLink();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/account/login");
  });
  test("@all HP10 Verify cart icon in header", async ({ page }) => {
    await hp.clickCartLink();
    await expect(c.emptyCartMessage).toBeVisible();
  });

  test('@all HP11 Verify hero banner redirection', async ({ page }) => {
    await hp.clickHeroBanner();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/bounce-back-reset-mist");
  });

  test('@all HP12 Verify collection tabs navigation', async ({ page }) => {
    await hp.collectionTabsNavigation(page);
  });

  test('@all HP13 Verify product navigation from collection tab', async ({ page }) => {
    await hp.switchToCollectionTabByIndex(1);
    await hp.openFirstProductFromCollectionTab();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/products/love-beauty-planet-argan-oil-and-lavender-sulfate-free-smooth-and-serene-shampoo-600ml");
  });

  test('@all HP14 Verify add to cart functionality from collection tab', async ({ page }) => {
    await hp.addFirstProductToCartFromCollectionTab(page);
  });

  test('@all HP15 Verify Shop by Concern section', async ({ page }) => {
    await hp.shopByConcernSectionRedirections(page);
  });

  test('@all HP16 Verify Discover Beauty Bill navigation', async ({ page }) => {
    await hp.clickDiscoverBeautyBill();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/beauty-bill");
  });

  test('@all HP17 Verify In the Spotlight section and add to cart functionality', async ({ page }) => {
    await hp.inTheSpotLightSection();
  });

  test('@all HP18 Verify What Sets Us Apart section', async ({ page }) => {
    await expect(hp.whatSetsUsApartSection).toBeVisible();
  });

  test('@all HP19 Verify What Sets Us Apart section dropdown contents visibility', async ({ page }) => {
    await hp.whatSetsUsApartDropdown();
  });

  test('@all HP20 Verify trending on social Reels section visibility', async ({ page }) => {
    await expect(hp.trendingOnSocialSection).toBeVisible();
  });

  test('@all HP21 Verify Customer Love section display', async ({ page }) => {
    await expect(hp.customerLoveSection).toBeVisible();
  });

  test('@all HP22 Verify Discover Our Story navigation', async ({ page }) => {
    await hp.openDiscoverOurStory();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/our-story");
  });

  test('@all HP23 Verify Know Your Ingredients navigation', async ({ page }) => {
    await hp.openKnowYourIngredientsBanner();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/ingredients");
  });

  test('@all HP24 Verify Beauty Archives view all navigation', async ({ page }) => {
    await hp.openBeautyArchivesViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/blogs");
  });

  test('@all HP24 Verify Beauty Archives article navigation', async ({ page }) => {
    await hp.openFirstBeautyArchivesArticle();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair/post-festive-season-hair-care-tips");
  });

  test('@desktop HP25 Verify footer product links', async ({ page }) => {
    await hp.footerProductLinksRedirections(page);
  });
  test('@mobile HP25 Verify footer product links', async ({ page }) => {
    await hp.footerProductLinksRedirectionsMobile(page);
  });

  test('@desktop HP26 Verify footer concern links', async ({ page }) => {
    await hp.footerConcernLinksRedirections(page);
  });
  test('@mobile HP26 Verify footer concern links', async ({ page }) => {
    test.setTimeout(180000);
    await hp.footerConcernLinksRedirectionsMobile(page);
  });

  test('@desktop HP27 Verify footer quick links', async ({ page }) => {
    await hp.footerQuickLinksRedirections(page);
  });
   test('@mobile HP27 Verify footer quick links', async ({ page }) => {
        test.setTimeout(180000);
    await hp.footerQuickLinksRedirectionsMobile(page);
  });

  test('@desktop HP28 Verify footer legal links', async ({ page, context }) => {
    await hp.footerLegalLinksRedirections(page, context);
  });
   test('@mobile HP28 Verify footer legal links', async ({ page, context }) => {
            test.setTimeout(180000);
    await hp.footerLegalLinksRedirectionsMobile(page, context);
  });

  test('@desktop HP29 Verify footer facebook links', async ({ page, context }) => {
    await hp.facebookRedirection(page, context);

  });

  test('@all HP30 Verify footer instagram links', async ({ page, context }) => {
    await hp.instagramRedirection(page, context);
  });
  test('@all HP31 Verify footer youtube links', async ({ page, context }) => {
    await hp.youtubeRedirection(page, context);
  });

  test('@all HP32 Verify caution notice display', async ({ page }) => {
    await expect(hp.cautionNotice).toBeVisible();
  });
test('@mobile HP33 Verify circular collection banner redirection', async ({ page }) => {
    await hp.mobileCollectionBanner(page);
});

});

