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

test.describe('All', () => {
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
    test('@desktop Login1 Verify navigation to login page via account link', async ({ page }) => {
        await lp.loginNavigation();
    });

    test('@desktop Login2 Verify user can register and login', async ({ page }) => {
        const lp = new Login(page);
        await lp.registerUser();
        await expect(page).toHaveURL("https://lovebeautyandplanet.in/account");
        await lp.logout();
        await lp.login();
        await expect(page).toHaveURL("https://lovebeautyandplanet.in/account");
    });
    test('@desktop Login3 Verify reset password', async ({ page }) => {
        await lp.loginNavigation();
        await lp.forgotPasswordFunctionality();
    })
    test('@desktop Login4 Verify login error message', async ({ page }) => {
        await lp.loginNavigation();
        await lp.loginErrorValidation();
    })
    test('@desktop Login5 Verify register error message', async ({ page }) => {
        await lp.loginNavigation();
        await lp.registerErrorValidation();
    })
    test('@desktop Login6 Verify recover password error message', async ({ page }) => {
        await lp.loginNavigation();
        await lp.recoveryEmailErrorValidation();
    })

    //HP-------------------
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
        await hp.megamenuShopExloreTheIngredientscareCollection(page);
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
        await hp.openContactUs();
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
        await hp.inTheSpotLightSection();
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
    test('@desktop HP37 Verify trending on social Reels section - popup close functionality', async ({ page }) => {
        await hp.reelPopupClose(page);
    });
    test('@desktop HP38 Verify whatsapp functionality', async ({ page }) => {
        await hp.whatsappRedirection(page);
    });

    test('@all HP39 Verify notify me functionality', async ({ page }) => {
        await hp.notifyMeFunctionality(page);
    });

    test('@all HP40 Verify Customer Love section display', async ({ page }) => {
        await expect(hp.customerLoveSection).toBeVisible();
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
        await expect(hp.cautionNotice).toBeVisible();
    });
    test('@mobile HP54 Verify circular collection banner redirection', async ({ page }) => {
        await hp.mobileCollectionBanner(page);
    });
    test('@all HP55 Verify product card details verification', async ({ page }) => {
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
    test('@all HP58 Verify blog details page pagination to newerpost, older post, back to hair', async ({ page }) => {
        await hp.blogDetailsPagePagination(page);
    })
    test('@desktop HP59 Verify blog details page share functionlity', async ({ page }) => {
        await hp.blogDetailsShare(page);
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
    test('@all HP65 Verify blog sort functionality', async ({ page }) => {
        await hp.sortByDate(page);
    })
    test('@all HP66 Verify know ypur ingredients functionality', async ({ page }) => {
        test.setTimeout(300000);
        await hp.knowYourIngredientsRedirections(page);
    })
    test('@desktop HP67 Verify add and delete address functionality', async ({ page }) => {
        await hp.loginFunctionality(page);
        await hp.addAddressFunctionality(page);
    })
    //PLP-------------
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

    //PDP--------
    test('@all PDP1 Verify navigation from Search PLP to PDP', async ({ page }) => {
        const firstProductName = await pdp.searchPLPToPDPNavigation("hair");
        // Get PDP product title
        const productTitle = await pdp.productTitle.textContent();
        // Validate same product is disaplyed on PDP
        expect(productTitle.trim().toLowerCase())
            .toContain(firstProductName.trim().toLowerCase());
    });

    test('@all PDP2 Verify PDP to PLP navigation links', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("hair");
        await pdp.PDPtoPLPnavigation(page);
    });

    test('@all PDP3 Verify invalid pincode validation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.checkInvalidPincode('123456');
    });

    test('@all PDP4 Verify valid pincode check', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.checkValidPincode('574151');
    });
    test('@all PDP5 Verify add to cart from PDP', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.addToCartFromPDP();
    });

    test('@all PDP6 Verify quantity increase and check the cart count updation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.increaseQuantity();
    });

    test('@all PDP7 Verify quantity decrease', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.decreaseQuantity();
    });

    test('@all PDP8 Verify reviews section display', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await expect(pdp.reviewsSection).toBeVisible();
    });

    test('@all PDP9 Verify details section display', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await expect(pdp.detailsSection).toBeVisible();
    });

    test('@all PDP10 Verify FAQ section', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await pdp.faqSectionFunctionality();
    });

    test('@all PDP11 Verify Write to us link presence and navigation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await pdp.writeToUsNavigation();
        await expect(page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
    });

    test('@all PDP12 Verify reels section visibility', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await expect(pdp.reelsSection).toBeVisible();
    });
    test('@all PDP13 Verify You may also like section presence and navigation', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("coconut");
        await pdp.youmayalsolikeNavigation();
        await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/coconut");
    }
    )
    test('@all PDP14 Verify product details on PDP', async ({ page }) => {
        await pdp.productDetails(page);
    });
    test('@all PDP15 Verify review functionality', async ({ page }) => {
        await pdp.reviewsFunctionality();
    })
    test('@all PDP16 Verify image gallery functionality (navigation and zoom)', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("coconut");
        await pdp.imageGalleryFunctionality();
    })
    test('@all PDP17 Verify product details on PDP', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("coconut");
        await pdp.productDetailsVisibility(page);
    })
    test('@all PDP18 Verify product details accordion functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("coconut");
        await pdp.detailsDropdownFunctionality(page);
    })
    test('@all PDP19 Verify write a review functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("coconut");
        await pdp.writeaReviewFunctionality(page);
    })
    test('@all PDP20 Verify sold out product functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("Argan Oil & Lavender Shampoo & Conditioner 200ml gift pack");
        await pdp.notifyMeFunctionality(page);
    });

    test('@all PDP21 Verify you may aslo like to PDP redirection', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.youmayalsoLikePDPRedirection(page);
    })
    test('@all PDP22 Verify you may aslo like - relevant product visibility', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.youmayalsoLikeRelevantProductVisibility(page);
    })
    test('@all PDP23 Verify you may aslo like ATC functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.youmayalsoLikeATC(page);
    })
    test('@all PDP24 Verify varient change functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.variantChangeFunctionality(page);
    })
    test('@all PDP25 Verify recently viewed product pdp redirection', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.searchPLPToPDPNavigation("cocunut");
        await pdp.recentlyViewedToPDP(page);
    })
    test('@all PDP26 Verify recently viewed product ATC functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.searchPLPToPDPNavigation("cocunut");
        await pdp.recentlyViewedATCFuntionality(page);
    })
    test('@all PDP27 Verify trending on social Reels section - ATC functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.reelSectionATCFunctinality(page);
    })

    test('@desktop PDP28 Verify trending on social Reels section - ATC functionality in popup', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.reelSectionPopupATCFunctinality(page);
    })
    test('@mobile PDP28 Verify trending on social Reels section - ATC functionality in popup', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.reelSectionPopupATCFunctinalityMobile(page);
    })
    test('@all PDP29 Verify trending on social Reels section - popup more info redirection', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.reelSectionPopupMoreInfoFunctinality(page);
    })

    test('@desktop PDP30 Verify trending on social Reels section - you may also like functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
        await pdp.reelYoumayalsolike(page);
    });
    test('@all PDP31 Verify bounce back product redirection', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.changeVriantandATC(page);
    })
    test('@all PDP32 Verify bounce back product pincode checker', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.bouncePincodeCheker(page);
    })
    test('@all PDP33 Verify bounce back product accordion functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.bounceaccordionFunctionality(page);
    })
    test('@all PDP34 Verify bounce back product FAQ accordion functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.bounceFAQFunctionality(page);
    })
    test('@all PDP35 Verify Delivery Charge & Free Shipping Threshold Functionality', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("bounce back");
        await pdp.deliveryChargeFunctionality(page);
    })
    test('@all PDP36 Verify Have another questions section', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("best");
        await pdp.haveAnotherQuestionSectionFunctionality();
    });
    //Cart--------------
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
    test('@all Cart6 Verify you have saved and shipping message visibility', async ({ page }) => {
        await pdp.searchPLPToPDPNavigation("argan");
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
        await pdp.searchPLPToPDPNavigation("hair");
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

});