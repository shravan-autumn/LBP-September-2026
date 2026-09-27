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
test.describe('PDP', () => {
  test('@all PDP1 Verify navigation from Search PLP to PDP', async ({ page }) => {
    const firstProductName = await pdp.searchPLPToPDPNavigation("hair");
    // Get PDP product title
    const productTitle = await pdp.productTitle.textContent();
    // Validate same product is disaplyed on PDP
    expect(productTitle.trim().toLowerCase())
      .toContain(firstProductName.trim().toLowerCase());
  });

  test('@all PDP2 Verify [offer] PDP to PLP navigation links', async ({ page }) => {
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

  test('@all PDP12 Verify reels section video and thumbnail visibility', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("best");
    await hp.reelSectionVideoAndThumbnail(page);
    await expect(pdp.reelsSection).toBeVisible();
  });
  test('@all PDP13 Verify You may also like section presence and navigation', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("coconut");
    await pdp.youmayalsolikeNavigation();
    await expect(page).toHaveURL("https://lovebeautyandplanet.in/collections/coconut");
  }
  )
  test('@all PDP14 Verify product details on PDP', async ({ page }) => {
    await pdp.productDetailsPDP(page);
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

  test('@all PDP21 Verify you may aslo like to PDP redirection and naigation arrow functionality', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("argan");
    await pdp.youmayalsoLikePDPRedirection(page);
  })
  test('@all PDP22 Verify you may aslo like - relevant product visibility', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("argan");
    await pdp.youmayalsoLikeRelevantProductVisibility(page);
    await pdp.productCardDetailsVerification(page);
  })
  test('@all PDP23 Verify you may aslo like ATC functionality', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("argan");
    await pdp.youmayalsoLikeATC(page);
  })
  test('@all PDP24 Verify varient change functionality', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("bounce back");
    await pdp.variantChangeFunctionality(page);
  })
  const search1 = "argan";
  const search2 = "cocunut";
  const search3 = "serum";
  test('@all PDP25 Verify recently viewed relevant product visisbility and pdp redirection', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation(search1);
    await pdp.searchPLPToPDPNavigation(search2);
    await pdp.searchPLPToPDPNavigation(search3);
    await pdp.recentlyViewedToPDP(page, search1, search2);
  })
  test('@all PDP26 Verify recently viewed product ATC functionality', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation(search1);
    await pdp.searchPLPToPDPNavigation(search2);
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
  test('@all PDP37 Verify add to cart from different pages', async ({ page }) => {
    await pdp.searchPLPToPDPNavigation("argan");
    await pdp.addToCartFromPDP();
    await pdp.closeCartDrawer();
    await pdp.youmayalsoLikeATC(page);

  });
});

