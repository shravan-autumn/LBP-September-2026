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
test.describe('Cookie popup validation', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    hp = new HomePage(page);
    await hp.goto();

  });
  test('@all HP1 Verify Cookie notice link should redirect to unilever notice in new tab', async () => {
    await hp.cookieRedirection();
  });
  test('@all HP2 Verify cookie popup accept functionality', async ({ page }) => {
    await hp.cookieAcceptFunctionality();
  });
});


test.describe('Homepage', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    lp = new Login(page);
    hp = new HomePage(page);
    plp = new PLP(page);
    c = new Cart(page);
    pdp = new PDP(page);
    await hp.goto();
    await hp.cookieAccept;
    await hp.removeCookiePopup(page);

  });
  test('@desktop HP3 Verify logo is displayed', async ({ page }) => {
    await expect(hp.logo).toBeVisible();
  });
  test('@mobile HP3 Verify logo is displayed', async ({ page }) => {
    await expect(hp.logoMobile).toBeVisible();
  });
  test('@desktop HP4 Verify clicking on brand logo from any other page should redirect user to homepage.', async ({ page }) => {
    await hp.clickBrandLogo();
  })

  test('@all HP5 Verify announcement bar navigation', async ({ page }) => {
    await hp.clickAnnouncementBar();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/bundle-offers");
  });

  test('@desktop HP6 Verify megamenu offers collection navigation', async ({ page }) => {
    await hp.megamenuOffersCollectionNavigation(page);
  });
  test('@desktop HP7 Verify megamenu shop collection navigation', async ({ page }) => {
    await hp.megamenuShopCollectionNavigation(page);
  });
  test('@desktop HP8 Verify megamenu shop-haircare collection navigation', async ({ page }) => {
    await hp.megamenuShopHaircareCollection(page);
  })
  test('@desktop HP9 Verify megamenu shop-body care collection navigation', async ({ page }) => {
    await hp.megamenuShopBodycareCollection(page);
  })
  test('@desktop HP10 Verify megamenu shop-exlpore the ingredients collection navigation and relevant product visibility', async ({ page }) => {
    await hp.megamenuShopExloreTheIngredientsCollection(page);
  })
  test('@mobile HP11 Verify hamburger menucollection navigation', async ({ page }) => {
    await hp.hamburgerMenuCollectionNavigation(page);
  });

  test('@all HP12 Verify About Us navigation', async ({ page }) => {
    await hp.openAboutUs();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/our-story");
  });

  test('@all HP13 Verify Know Your Ingredients navigation', async ({ page }) => {
    await hp.openIngredients();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/ingredients");
  });

  test('@all HP14 Verify Beauty Archives navigation', async ({ page }) => {
    await hp.openBeautyArchives();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/blogs");
  });

  test('@all HP15 Verify Contact Us navigation', async ({ page }) => {
    await hp.openSupport();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  });
  test("@all HP16 Verify search icon form header", async ({ page }) => {
    await hp.clickSearchTextfield();
    expect(hp.searchSuggestionBox).toBeVisible();
  });
  test("@all HP17 Verify trennding search redirection", async ({ page }) => {
    await hp.trendingSearchesNavigation(page);
  })
  test("@all HP18 Verify search top catogories redirection", async ({ page }) => {
    await hp.trendingSearchesNavigation(page);
  })

  test("@all HP19 Verify account page navigation form header", async ({ page }) => {
    await hp.clickAccountLink();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/account/login");
  });
  test("@all HP20 Verify cart icon in header", async ({ page }) => {
    await hp.clickCartLink();
    await expect(c.emptyCartMessage).toBeVisible();
  });

  test('@all HP21 Verify hero banner redirection', async ({ page }) => {
    await hp.heroBannerRedirections(page);
  });

  test('@all HP22 Verify collection tabs navigation', async ({ page }) => {
    await hp.collectionTabsNavigation(page);
  });

  test('@all HP23 Verify product navigation from collection tab', async ({ page }) => {
    await hp.switchToCollectionTabByIndex(1);
    await hp.openFirstProductFromCollectionTab();
  });

  test('@all HP24 Verify add to cart functionality from collection tab', async ({ page }) => {
    await hp.addFirstProductToCartFromCollectionTab(page);
  });
  test('@all HP25 Verify variant switch functionality', async ({ page }) => {
    await hp.variantswtachFunctionality(page);
  });
  test('@all HP26 Verify product card quantity slector functionality', async ({ page }) => {
    await hp.quantitySelectorunctionality();
  })
  test('@all HP27 Verify Shop by Concern section', async ({ page }) => {
    await hp.shopByConcernSectionRedirections(page);
  });

  test('@all HP28 Verify Discover Beauty Bill navigation', async ({ page }) => {
    await hp.clickDiscoverBeautyBill();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/beauty-bill");
  });

  test('@all HP29 Verify In the Spotlight section and add to cart functionality', async ({ page }) => {
    await hp.inTheSpotLightSection(page);
  });

  test('@all HP30 Verify What Sets Us Apart section', async ({ page }) => {
    await expect(hp.whatSetsUsApartSection).toBeVisible();
  });

  test('@all HP31 Verify What Sets Us Apart section dropdown contents visibility', async ({ page }) => {
    await hp.whatSetsUsApartDropdown();
  });

  test('@all HP32 Verify trending on social Reels section visibility', async ({ page }) => {
    await expect(hp.trendingOnSocialSection).toBeVisible();
  });

  test('@all HP33 Verify trending on social Reels section - ATC functionality', async ({ page }) => {
    await hp.reelSectionATCFunctinality(page);
  })

  test('@desktop HP34 Verify trending on social Reels section - ATC functionality in popup', async ({ page }) => {
    await hp.reelSectionPopupATCFunctinality(page);
  })
  test('@desktop HP35 Verify trending on social Reels section - popup more info redirection', async ({ page }) => {
    await hp.reelSectionPopupMoreInfoFunctinality(page);
  })

  test('@desktop HP36 Verify trending on social Reels section - you may also like functionality', async ({ page }) => {
    await hp.reelYoumayalsolike(page);
  });
  test('@desktop HP37 Verify trending on social Reels section - popup functionality', async ({ page }) => {
    await hp.reelPopupFunctionality(page);
  });
  test('@desktop HP38 Verify whatsapp functionality', async ({ page }) => {
    await hp.whatsappRedirection(page);
  });

  test('@all HP39 Verify notify me functionality', async ({ page }) => {
    await hp.notifyMeFunctionality(page);
  });

  test('@all HP40 Verify Customer Love section display', async ({ page }) => {
    await hp.customerLoveSectionVisibility(page);
  });

  test('@all HP41 Verify Discover Our Story navigation', async ({ page }) => {
    await hp.openDiscoverOurStory();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/our-story");
  });

  test('@all HP42 Verify Know Your Ingredients navigation', async ({ page }) => {
    await hp.openKnowYourIngredientsBanner();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/ingredients");
  });

  test('@all HP43 Verify Beauty Archives view all navigation', async ({ page }) => {
    await hp.openBeautyArchivesViewAll();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/blogs");
  });

  test('@all HP44 Verify Beauty Archives article navigation', async ({ page }) => {
    await hp.openFirstBeautyArchivesArticle();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/blogs/hair/post-festive-season-hair-care-tips");
  });

  test('@all HP45 Verify Beauty Archives article contents verification', async ({ page }) => {
    await hp.beautyCardDetailsVerification(page);
  });
  test('@desktop HP46 Verify footer product links', async ({ page }) => {
    await hp.footerProductLinksRedirections(page);
  });
  test('@mobile HP46 Verify footer product links', async ({ page }) => {
    await hp.footerProductLinksRedirectionsMobile(page);
  });

  test('@desktop HP47 Verify footer concern links', async ({ page }) => {
    await hp.footerConcernLinksRedirections(page);
  });
  test('@mobile HP47 Verify footer concern links', async ({ page }) => {
    test.setTimeout(180000);
    await hp.footerConcernLinksRedirectionsMobile(page);
  });

  test('@desktop HP48 Verify footer quick links', async ({ page }) => {
    await hp.footerQuickLinksRedirections(page);
  });
  test('@mobile HP48 Verify footer quick links', async ({ page }) => {
    test.setTimeout(180000);
    await hp.footerQuickLinksRedirectionsMobile(page);
  });

  test('@desktop HP49 Verify footer legal links', async ({ page, context }) => {
    await hp.footerLegalLinksRedirections(page, context);
  });
  test('@mobile HP49 Verify footer legal links', async ({ page, context }) => {
    test.setTimeout(180000);
    await hp.footerLegalLinksRedirectionsMobile(page, context);
  });

  test('@desktop HP50 Verify footer facebook links', async ({ page, context }) => {
    await hp.facebookRedirection(page, context);

  });

  test('@all HP51 Verify footer instagram links', async ({ page, context }) => {
    await hp.instagramRedirection(page, context);
  });
  test('@all HP52 Verify footer youtube links', async ({ page, context }) => {
    await hp.youtubeRedirection(page, context);
  });

  test('@all HP53 Verify caution notice display', async ({ page }) => {
    await hp.cautionNoticeVisibility(page);
  });
  test('@mobile HP54 Verify circular collection banner redirection', async ({ page }) => {
    await hp.mobileCollectionBanner(page);
  });
  test.only('@all HP55 Verify product card details verification', async ({ page }) => {
    await hp.productCardDetailsVerification(page);
  });
  test('@desktop HP56 Verify contact us functionality', async ({ page }) => {
    await hp.contactUsFunctionality(page);
  })
  test('@mobile HP56 Verify contact us functionality', async ({ page }) => {
    await hp.contactUsFunctionalityMobile(page);
  })
  test('@desktop HP57 Verify contact us error functionality', async ({ page }) => {
    await hp.contactUsErrorFunctionality(page);
  })
  test('@mobile HP57 Verify contact us error functionality', async ({ page }) => {
    await hp.contactUsErrorFunctionalityMobile(page);
  })
  test('@all HP58 Verify blog details page title and details visibility', async ({ page }) => {
    await hp.blogDetailsPageDetails(page);
  })

  test('@all HP59 Verify blog details - in this article functionlity', async ({ page }) => {
    await hp.whyThisArticle(page);
  })
  test('@all HP60 Verify blog details - FAQ functionlity', async ({ page }) => {
    await hp.blogFAQFunctionality(page);
  })
  test('@all HP61 Verify blog - add to cart functionality from blog details page', async ({ page }) => {
    await hp.blogPageATC();
  });
  test('@all HP62 Verify blog - read stories from blog details page', async ({ page }) => {
    await hp.readStoriesFunctionality();
  });
  test('@desktop HP63 Verify blog page dropdown', async ({ page }) => {
    await hp.blogdropdownfunctionality();
  })
  test('@all HP64 Verify blog read by category functionality', async ({ page }) => {
    await hp.readByCategoryFunctionality(page);
  })
  test('@all HP65 Verify blog Listing sort functionality', async ({ page }) => {
    await hp.sortByDate(page);
  })
  test('@all HP66 Verify know your ingredients functionality', async ({ page }) => {
    test.setTimeout(300000);
    await hp.knowYourIngredientsRedirections(page);
  })
  test('@all HP67 Verify add and delete address functionality', async ({ page }) => {
    const lp = new Login(page);
    await lp.registerUser();
    await expect(page).toHaveURL(/\/account/);
    await hp.addAddressFunctionality(page);
  })
  test('@all HP68 Verify newsletter error validation', async ({ page }) => {
    await hp.newsletterErrorValidation(page);
  })
  test('@all HP69 Verify newsletter success validation', async ({ page }) => {
    await hp.newsletterSuccessValidation(page);
  })
  test('@all HP70 Verify newsletter redirections and legal text visibility', async ({ page }) => {
    await hp.newsletterRedirections(page);
  })
  test('@all HP71 Verify orders page functionality', async ({ page }) => {
    await hp.orderPageFunctionality(page);
  })
 
  test('@all HP72 Verify hero banner video visibility', async ({ page }) => {
    await hp.bannerVideoVisibility(page);
  })
  test('@desktop HP73 Verify hero banner navigation arrow functionality', async ({ page }) => {
    await hp.herobannerNavigationArrows(page);
  })
  test('@all HP73 Verify reel section video and thumbnail visibility', async ({ page }) => {
    await hp.reelSectionVideoAndThumbnail(page);
  })
  test('@all HP74 Verify footer contact us and logo visibility', async ({ page }) => {
    await hp.footerContactAndLogo(page);
  })
  test('@mobile HP75 Verify mobile social footer links', async ({ page }) => {
    await hp.mobileSocialLinksRedirection(page);
  })
  test('@all HP76 Verify contact us page static links redirection', async ({ page }) => {
    await hp.conatctUsPageStaticLinksRedirection(page);
  })
  test('@all HP77 Verify contact us page chackshu redirection', async ({ page }) => {
    await hp.contactUsPageChackshuRedirection(page);
  })
  test('@all HP78 Verify blog details page pagination to newerpost, older post, back to hair', async ({ page }) => {
    await hp.blogDetailsPagePagination(page);
  })
  test('@desktop HP79 Verify blog details page share functionlity', async ({ page }) => {
    await hp.blogDetailsShare(page);
  })
  test('@all HP80 Verify blog details page notify me functionlity', async ({ page }) => {
    await hp.blogPageNotifyMe(page);
  })
  test('@all HP81 Verify blog details page to PDP redirection', async ({ page }) => {
    await hp.blogPageToPDP(page);
  })
   test('@all HP82 Verify track order functionality - cancelled order', async ({ page }) => {
    await hp.TrackOrderFunctionalityCancelledOrder(page);
  })
  test('@all HP83 Verify track order functionality - Delivered order', async ({ page }) => {
    await hp.TrackOrderFunctionalityOrderDelivered(page);
  })
  test('@all HP84 Verify track order functionality - RTO', async ({ page }) => {
    await hp.TrackOrderFunctionalityRTO(page);
  })
});

