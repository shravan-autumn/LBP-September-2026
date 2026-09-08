import { expect } from '@playwright/test';

exports.PDP = class PDP {

  constructor(page) {
    this.page = page;
    this.searchTexfield = page.locator("//div[@class='header__icons header__icons--localization header-localization']//input");
    this.productTitlesSearchPLP = page.locator('(//div[@class="result-product-item-info h-pro-card-cnt"]//a)[1]');
    this.firstProductLinkSearchPLP = page.locator('[data-product-link-test-id]').first();
    this.searchPageResults = page.locator('[class="wizzy-summary-head"]');
    this.productPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="pro-variant-price"]');


    this.pageUrlMarker = page.locator('[data-page-url-test-id]');
    this.productTitle = page.locator('//div[@class="product__title"]//h1');
    this.viewproductsLink = page.locator('//div[@class="pdp-offers "]//a');

    // Breadcrumb back to PLP (best-effort: use browser back + header nav)
    this.breadcrumbHome = page.locator('[data-breadcrumb-home-test-id]').first();
    this.breadcrumbCollections = page.locator('[data-breadcrumb-collections-test-id]').first();

    // ATC + quantity (from shared snippets)
    this.atcButton = page.locator('[class="product-form__submit button button--full-width button--secondary  pdp-submit-button "]');
    this.qtyPlus = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[4]').first();
    this.qtyMinus = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[3]').first();
    this.qtyMinus2 = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[7]').first();
    this.qtyInput = page.locator('(//input[@class="quantity__input"])[1]').first();

    // Pincode validation
    this.pincodeInput = page.locator('[id="pincode"]');
    this.pincodeCheckBtn = page.locator('[class="submit-pincode-button"]');
    this.pincodeError = page.locator('//p[contains(text(),"Destination pincode is not serviceable")]');
    this.pincodeResponse = page.locator('[id="response"]');

    // Details / FAQ / Reviews presence
    this.detailsSection = page.locator('[data-id="pdp-details"]');
    this.reviewsSection = page.locator('[id="yotpo-headline-reviews"]');
    this.faqSectionHeading = page.locator('(//a[contains(text(),"FAQs")])[1]');
    this.faqSection = page.locator('//button[contains(text(),"FAQS")]');
    this.writeToUs = page.locator("//a[contains(text(),'Write to us')]");
    this.reelsSection = page.locator('[id="reelUp_playlist_3503"]');
    this.faqtab = page.locator("//div[@class='container']//a[contains(text(),'FAQs')]");


    // You may also like section on PDP
    this.ymalSection = page.locator('[data-section-test-id*="custom-collection-grid"]').first();
    this.ymalFirstCard = page.locator('[data-section-test-id*="custom-collection-grid"] [data-product-card-test-id]').first();
    this.ymalViewAll = page.locator('//a[contains(text(),"VIEW ALL")]');
    this.cautionNotice = page.locator('[data-caution-notice-test-id]');
    //cart drawer
    this.cartproductTitle = page.locator("//a[contains(@class,'cart-item__name')]");
    this.closeCart = page.locator('(//button[@class="drawer__close"])[1]');
    this.SearchTextFieldMobile = page.locator("[id='mob-search-mob']");
    this.cartHeading = page.locator('[class="drawer__heading cart-heading"]');
    this.hpProductTitle = page.locator('[class="h-pro-card-cnt-description"]');
    this.hpSellingPrice = page.locator('[class="pro-variant-price active"]');
    this.hpMRPPrice = page.locator('[class="text-decoration-line-through active"]');
    this.hpDiscount = page.locator('[class="h-pro-card-sale active"]');
    this.pdpSellingPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="pro-variant-price"]');
    this.pdpMRPPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="text-decoration-line-through"]');
    this.pdpDiscount = page.locator('//div[@class="sing-product-variant"]//div[@class="h-pro-card-sale"]');
    this.taxMessage = page.locator('[class="custom_tax__text"]');
    this.pdpReviews = page.locator('[class="yotpo-sr-bottom-line-right-panel"]');
    this.reviewDrawer = page.locator('[id="yotpo-summary-container"]');
    this.readAllReviews = page.locator('[class="yotpo-summary-footer-read-all-reviews"]');
    this.cartCount = page.locator('//div[@class="cart-count-bubble"]//span[@aria-hidden="true"]');
    this.notifyMeButton = page.locator('[id="notify-me-btn"]').first();
    this.notifyMeName = page.locator('[id="notify-name"]');
    this.notifyMePhone = page.locator('[id="notify-phone"]');
    this.notifyMeSubmit = page.locator('[class="notify-submit-btn"]');
    this.imageRightNaigation = page.locator('[class="arrow_desktop_slider--next slider-button slider-button--next"]');
    this.imageLeftNavigation = page.locator('[class="arrow_desktop_slider--prev slider-button slider-button--pre"]');
    this.mainimage = page.locator('[class="product__media media media--transparent ss"]').first();
    this.imageclose = page.locator('[class="btn-close"]').first();
    this.productvariant = page.locator('[class="variant-detail"]');
    this.productDetails = page.locator('//button[contains(text(),"Product Details")]');
    this.nameOfTheProduct = page.locator('//span[contains(text(),"Name of the Product ")]/following-sibling::span');
    this.netVolume = page.locator('//span[contains(text(),"Net Volume")]/following-sibling::span');
    this.nameOfTheManufaturer = page.locator('//span[contains(text(),"Name of Manufacturer")]/following-sibling::span');
    this.addressOfTheManufacturer = page.locator('//span[contains(text(),"Address of Manufacturer")]/following-sibling::span');
    this.countryOfOrigin = page.locator('//span[contains(text(),"Country")]/following-sibling::span');
    this.gst = page.locator('//span[contains(text(),"GST")]/following-sibling::span');
    this.category = page.locator('//span[contains(text(),"Category")]/following-sibling::span');
    this.netQty = page.locator('//span[contains(text(),"Net Qty")]/following-sibling::span');
    this.expiryDate = page.locator('//span[contains(text(),"Expiry Date")]/following-sibling::span');
    this.mrp = page.locator('//span[contains(text(),"MRP ")]/following-sibling::span');
    this.detailsDropdown = page.locator('//div[@id="pdpAccordion"]//h2');
    this.accordionBody = page.locator('//div[@class="accordion-body"]');
    this.writeareviewLink = page.locator('[id="review_yotpo_popup"]');
    this.fivestar = page.locator('[for="yotpo_star_rating_4"]');
    this.reviewHeadline = page.locator('(//input[@class="yotpo-new-input-container"])[1]');
    this.reviewName = page.locator('(//input[@class="yotpo-new-input-container"])[2]');
    this.reviewEmail = page.locator('(//input[@class="yotpo-new-input-container"])[3]');
    this.writeaReview = page.locator('[placeholder="Tell us what you like or dislike"]');
    this.reviewcheckbox = page.locator('[class="yotpo-checkbox"]');
    this.reviewSend = page.locator('[class="yotpo-new-review-submit"]');
    this.reviweContinueShopping = page.locator('[class="yotpo-shop-complete"]');
    this.ymalRightNavigaion = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//button[@class="owl-next"]');
    this.ymalLeftNavigaion = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//button[@class="owl-prev"]');
    this.ymalProductTitle = page.locator('[class="h-pro-card-cnt-description"]');
    this.ymalATC = page.locator('[class="product-form__submit button button--full-width button--primary"]');
    this.viewCartButton = page.locator('(//button[@id="view-cart-drawer"])[2]');
    this.bounceProductPrice = page.locator('[class="pro-variant-price active"]');
    this.bounceProductVarinat = page.locator('//div[@class="varinat-heading"]/parent::div//label');
    this.recentlyViewedTitle = page.locator('//h2[contains(text(),"Recently viewed products")]/parent::div//p[@class="h-pro-card-cnt-description"]//a');
    this.recentlyViewedATC = page.locator('//h2[contains(text(),"Recently viewed products")]/parent::div//div[@class="product-form__buttons"]');
    this.reelProductTitle = page.locator('[class="reelUp_slider_title"]');
    this.reelAddToCart = page.locator('[class="reelUp_playlist_button_text"]');
    this.reelMoreInfo = page.locator('[class="reelUp_custom_action reelUp_modal_product_info_btn"]');
    this.reelMoreInfoMobile = page.locator('(//div[@class="reelUp_flex reelUp_custom_action_content reelUp_align_center reelUp_justify_center"])[1]');
    this.reelPopupATC = page.locator('(//p[@class="reelUp_custom_btn_text"])[2]');
    this.reelPopupATCMobile = page.locator('(//div[@class="reelUp_flex reelUp_custom_action_content reelUp_align_center reelUp_justify_center"])[2]');
    this.reelPopupCart = page.locator('[class="reelUp_custom_action reelUp_modal_cart_btn"]');
    this.reelPopupCartMobile = page.locator('(//div[@class="reelUp_flex reelUp_custom_action_content reelUp_align_center reelUp_justify_center"])[3]');
    this.reelYoumayaslolike = page.locator('[class="reelUp_grid_product_title"]');
    this.reelPopupCloseButton = page.locator('(//button[@class="reelUp_video_preview_action"])[1]');
    this.reelPopupTitle = page.locator('[class="reelUp_modal_product_title"]');
    this.trendingOnSocialSection = page.locator("//div[contains(text(),'wha')]");
    this.reelShopNow = page.locator('//button[@class="reelUp_custom_action reelUp_modal_shop_now_btn"]');
    this.bounceATC = page.locator('[class="product-form__submit button button--full-width button--primary"]');
    this.bounceQuantityMinus = page.locator('(//button[@class="custom-qty-btn qty-minus"])[1]');
    this.bounceQuantityPlus = page.locator('(//button[@class="custom-qty-btn qty-plus"])[1]');
    this.cartLink = page.locator('[class="header__icon header__icon--cart link focus-inset"]');
    this.netPayable = page.locator('[class="totals__total-value"]');
    this.bounceproductTitle = page.locator('[class="h-pro-card-cnt-description"]');
    this.bouncePincode = page.locator('[id="pincode"]');
    this.bounceSubmitPincode = page.locator('[class="submit-pincode-button"]');
    this.bounceAccordion = page.locator('[class="question-container"]');
    this.bounceAnswer = page.locator('[class="faq-answer"]');
    this.bounceFAQViewAll = page.locator('[class="faq-toggle-btn"]');
    this.bouncefaqAccordion = page.locator('//section[@class="faq-section plp-faq collection-faq"]//h3[@class="accordion-header"]');
    this.bouncefaqAccordionAnswer = page.locator('//section[@class="faq-section plp-faq collection-faq"]//div[@class="accordion-body"]');
    this.firstProductPlusIcon = page.locator('//tr[@id="CartDrawer-Item-1"]//button[@name="plus"]');
    this.shippingBar=page.locator('[class="free-shipping--content"]');
    this.freeShippingMessage=page.locator('[class="free-shipping--success-message"]');
  }
async deliveryChargeFunctionality(page) {

  const finalPrice = await this.bounceProductPrice.textContent();

  await this.bounceATC.click();
  await this.cartLink.click();

  // Convert product price to number
  const finalPriceValue = parseFloat(
    finalPrice.replace(/[^\d.]/g, '')
  );

  // Initial Net Payable = Product Price + Shipping
  const expectedNetPayable = finalPriceValue + 49;

  await expect(this.netPayable)
    .toHaveText(`₹${expectedNetPayable}`);

  await expect(this.shippingBar).toBeVisible();

  // Increase quantity to 2
  await this.firstProductPlusIcon.click();

  await this.page.waitForTimeout(1000);

  // Get updated Net Payable
  const netPayableText = await this.netPayable.textContent();

  const netPayableValue = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  // Compare Net Payable with product price × 2
  expect(netPayableValue).toBe(finalPriceValue * 2);
}
  async bounceFAQFunctionality(page) {
    await this.bounceFAQViewAll.click();
    for (let i = 0; i < await this.bouncefaqAccordion.count(); i++) {
      await this.bouncefaqAccordion.nth(i).click();
      await expect(this.bouncefaqAccordionAnswer.nth(i)).toBeVisible();
    }
  }
  async bounceaccordionFunctionality(page) {
    for (let i = 0; i < await this.bounceAccordion.count(); i++) {
      await this.bounceAccordion.nth(i).click();
      await expect(this.bounceAnswer.nth(i)).toBeVisible();
    }
  }
  async bouncePincodeCheker(page) {
    await this.bouncePincode.fill('560037');
    await this.bounceSubmitPincode.click();
    //success message is missing in live
  }
  async changeVriantandATC(page) {

    const productTitle = await this.bounceproductTitle.textContent();

    // Change variant
    const initialPrice = await this.bounceProductPrice.textContent();

    await this.bounceProductVarinat.nth(1).click();

    const finalPrice = await this.bounceProductPrice.textContent();

    await expect(initialPrice).not.toBe(finalPrice);

    await this.bounceATC.click();
    await this.cartLink.click();

    // Wait for visible cart product
    const visibleCartProduct = this.cartproductTitle
      .filter({ visible: true })
      .first();

    await visibleCartProduct.waitFor({
      state: 'visible',
      timeout: 30000
    });

    // Get cart product title
    const cartTitle =
      await visibleCartProduct.textContent() || '';

    // Take first 5 words from PDP title
    const expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');

    // Validate cart product title
    expect(cartTitle.toLowerCase())
      .toContain(expectedText);

    // Calculate expected Net Payable
    const finalPriceValue = parseFloat(
      finalPrice.replace(/[^\d.]/g, '')
    );

    const expectedNetPayable = finalPriceValue + 49;

    // Validate Net Payable
    await expect(this.netPayable)
      .toHaveText(`₹${expectedNetPayable}`);
  }


  async reelYoumayalsolike(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();
    await this.reelProductTitle.first().click();
    await page.waitForTimeout(2000);
    if (await this.reelShopNow.isVisible()) {
      await this.reelShopNow.click();
    }
    await this.reelYoumayaslolike.nth(0).scrollIntoViewIfNeeded();
    const productName = (await this.reelYoumayaslolike.first().textContent())
      .trim()
      .toLowerCase();
    await this.reelYoumayaslolike.first().scrollIntoViewIfNeeded();
    await this.reelYoumayaslolike.first().click();

    const reelProducts = (await this.reelPopupTitle.allTextContents())
      .map(product => product.trim().toLowerCase());
    expect(reelProducts).toContain(productName);
  }


  async reelSectionATCFunctinality(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();

    await this.reelAddToCart.first().click();
    await this.viewCartButton.click();

    const cartProducts = (await this.cartproductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(cartProducts).toContain(productName);
  }
  async reelSectionPopupATCFunctinality(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();
    await this.reelProductTitle.first().click();
    if (await this.reelShopNow.isVisible()) {
      await this.reelShopNow.click();
    }
    await page.waitForTimeout(2000);
    await this.reelPopupATC.click();
    await page.waitForTimeout(2000);
    await this.reelPopupCart.click();

    const cartProducts = (await this.cartproductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(cartProducts).toContain(productName);
  }
  async reelSectionPopupATCFunctinalityMobile(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();
    await this.reelProductTitle.first().click();
    if (await this.reelShopNow.isVisible()) {
      await this.reelShopNow.click();
    }
    await page.waitForTimeout(2000);
    await this.reelPopupATCMobile.click();
    await page.waitForTimeout(2000);
    await this.reelPopupCartMobile.click();

    const cartProducts = (await this.cartproductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(cartProducts).toContain(productName);
  }
  async reelSectionPopupMoreInfoFunctinality(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();
    await this.reelProductTitle.first().click();
    if (await this.reelShopNow.isVisible()) {
      await this.reelShopNow.click();
    }
    await page.waitForTimeout(2000);
    await this.reelMoreInfo.click();


    const pdpProducts = (await this.productTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(pdpProducts).toContain(productName);
  }

  async recentlyViewedToPDP(page) {

    // Get product title from YMAL and normalize whitespace
    const productTitle = (await this.recentlyViewedTitle.nth(0).textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Click the YMAL product
    await this.recentlyViewedTitle.nth(0).click();

    // Get product title from PDP and normalize whitespace
    const pdpProductTitle = (await this.productTitle.textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Validate YMAL product redirects to the correct PDP
    expect(pdpProductTitle).toContain(productTitle);
  }
  async recentlyViewedATCFuntionality(page) {
    // Get product title from YMAL and normalize whitespace
    const productTitle = (await this.recentlyViewedTitle.nth(0).textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Click the YMAL product
    await this.recentlyViewedATC.click();
    await this.viewCartButton.click();

    // Wait for visible cart product
    const visibleCartProduct = this.cartproductTitle
      .filter({ visible: true })
      .first();

    await visibleCartProduct.waitFor({
      state: 'visible',
      timeout: 30000
    });

    // Get cart product title
    const cartTitle =
      await visibleCartProduct.textContent() || '';

    // Take few words from PDP title
    const expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');

    // Validate cart contains similar text
    expect(cartTitle.toLowerCase())
      .toContain(expectedText);

  }







  async variantChangeFunctionality(page) {
    const initialPrice = await this.bounceProductPrice.textContent();
    await this.bounceProductVarinat.nth(1).click();
    const finalPrice = await this.bounceProductPrice.textContent();
    await expect(initialPrice).not.toBe(finalPrice);
  }

  async youmayalsoLikeRelevantProductVisibility(page) {

    // Get main PDP product title
    const pdpProductTitle = (await this.productTitle.textContent())
      ?.replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

    console.log("Main PDP Product:", pdpProductTitle);

    // Remove common/unimportant words
    const ignoredWords = [
      'and',
      'the',
      'for',
      'with',
      'of',
      'a',
      'an',
      'ml',
      'gm',
      'g',
      'kg',
      'each',
      'pack',
      'combo'
    ];

    // Extract keywords from PDP title
    const keywords = pdpProductTitle
      .replace(/[|,+\-()]/g, ' ')
      .split(/\s+/)
      .filter(word =>
        word.length > 2 &&
        !ignoredWords.includes(word)
      );

    console.log("PDP Keywords:", keywords);

    let relevantProductFound = false;

    // Check all YMAL products
    for (let i = 0; i < await this.ymalProductTitle.count(); i++) {

      const ymalProductTitle = (await this.ymalProductTitle.nth(i).textContent())
        ?.replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();

      console.log(`YMAL Product ${i + 1}:`, ymalProductTitle);

      // Count matching keywords
      const matchingKeywords = keywords.filter(keyword =>
        ymalProductTitle.includes(keyword)
      );

      console.log(
        `Matching Keywords for Product ${i + 1}:`,
        matchingKeywords
      );

      // Consider product relevant if at least 2 meaningful keywords match
      if (matchingKeywords.length >= 2) {
        relevantProductFound = true;
      }
    }

    // At least one relevant product should be present
    expect(
      relevantProductFound,
      'No relevant product found in You May Also Like section'
    ).toBeTruthy();
  }
  async youmayalsoLikeATC(page) {
    // Get product title from YMAL and normalize whitespace
    const productTitle = (await this.ymalProductTitle.nth(0).textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Click the YMAL product
    await this.ymalATC.nth(0).click();
    await this.viewCartButton.click();

    // Wait for visible cart product
    const visibleCartProduct = this.cartproductTitle
      .filter({ visible: true })
      .first();

    await visibleCartProduct.waitFor({
      state: 'visible',
      timeout: 30000
    });

    // Get cart product title
    const cartTitle =
      await visibleCartProduct.textContent() || '';

    // Take few words from PDP title
    const expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');

    // Validate cart contains similar text
    expect(cartTitle.toLowerCase())
      .toContain(expectedText);

  }
  async youmayalsoLikePDPRedirection(page) {
    if (await this.ymalRightNavigaion.isVisible()) {
      await this.ymalRightNavigaion.click();
      await this.ymalLeftNavigaion.click();
    }


    // Get product title from YMAL and normalize whitespace
    const productTitle = (await this.ymalProductTitle.nth(0).textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Click the YMAL product
    await this.ymalProductTitle.nth(0).click();

    // Get product title from PDP and normalize whitespace
    const pdpProductTitle = (await this.productTitle.textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Validate YMAL product redirects to the correct PDP
    expect(pdpProductTitle).toContain(productTitle);
  }
  async writeaReviewFunctionality(page) {
    await this.writeareviewLink.click();
    await this.fivestar.click();
    await this.reviewHeadline.fill("Nice");
    await this.reviewName.fill("Anvitha Jain");
    await this.reviewEmail.fill("jain1998@gmail.com");
    await this.writeaReview.fill("recomended");
    await this.reviewcheckbox.click();
    await this.reviewSend.click();
    await expect(this.reviweContinueShopping).toBeVisible();
    await this.reviweContinueShopping.click();
  }

  async detailsDropdownFunctionality(page) {
    for (let i = 0; i < 6; i++) {
      await this.detailsDropdown.nth(i + 1).click();
      await expect(this.accordionBody.nth(i + 1)).toBeVisible();
    }
  }

  async productDetailsVisibility(page) {
    const productTitle = await this.productTitle.textContent();
    const variant = await this.productvariant.textContent();
    await this.productDetails.scrollIntoViewIfNeeded();
    await this.productDetails.click();
    await expect(this.nameOfTheProduct).toHaveText(productTitle);
    await expect(this.netVolume).toHaveText(variant);
    await expect(this.nameOfTheManufaturer).toBeVisible();
    await expect(this.addressOfTheManufacturer).toBeVisible();
    await expect(this.countryOfOrigin).toBeVisible();
    await expect(this.netQty).toBeVisible();
    await expect(this.expiryDate).toBeVisible();
    await expect(this.mrp).toBeVisible();
  }







  async imageGalleryFunctionality() {
    await this.imageRightNaigation.nth(0).click();
    await this.imageRightNaigation.nth(0).click();
    await this.imageLeftNavigation.click();
    await this.mainimage.click();
    await expect(this.imageclose).toBeVisible();
  }
  async notifyMeFunctionality(page) {
    await this.notifyMeButton.scrollIntoViewIfNeeded();
    await this.notifyMeButton.click();
    await this.notifyMeName.fill('Amit');
    await this.notifyMePhone.fill('9876543210');
    const dialogPromise = page.waitForEvent('dialog');
    await this.notifyMeSubmit.click();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe(
      "Thanks! We'll notify you when this item is back in stock."
    );

    await dialog.accept();
  }






  async reviewsFunctionality() {
    await this.hpProductTitle.nth(0).click();
    await this.pdpReviews.click();
    await expect(this.reviewDrawer).toBeVisible();
    await this.readAllReviews.click();
    await expect(this.reviewsSection).toBeVisible();
  }

  async faqSectionFunctionality() {
    await this.faqSectionHeading.click();
    await expect(this.faqSection).toBeVisible();
  }
  async haveAnotherQuestionSectionFunctionality() {
    await this.faqSectionHeading.click();
    await expect(this.faqSection).toBeVisible();
    await this.writeToUs.click();
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/contact-us");
  }



  async productDetailsPDP(page) {
    const hpproductTitle = await this.hpProductTitle.nth(0).textContent();
    const hpsellingPrice = await this.hpSellingPrice.nth(0).textContent();
    const hpmrpPrice = await this.hpMRPPrice.nth(0).textContent();
    const hpdiscount = await this.hpDiscount.nth(0).textContent();
    await this.hpProductTitle.nth(0).click();
    await expect(this.productTitle).toHaveText(hpproductTitle);
    await expect(this.pdpSellingPrice).toHaveText(hpsellingPrice);
    await expect(this.pdpMRPPrice).toHaveText(hpmrpPrice);
    await expect(this.pdpDiscount).toHaveText(hpdiscount);
    await expect(this.taxMessage).toBeVisible();
  }

  async expectLoaded() {
    await expect(this.pageUrlMarker).toHaveCount(1);
  }

  async checkInvalidPincode(value) {
    await this.pincodeInput.fill(value);
    await this.pincodeInput.press('Enter');
    await this.pincodeCheckBtn.click();
    await this.page.waitForTimeout(8000);

    await expect(this.pincodeError).toBeVisible();
  }

  async checkValidPincode(value) {
    await this.pincodeInput.fill(value);
    await this.pincodeCheckBtn.click();
    await expect(this.pincodeResponse).toBeVisible();
  }

  async addToCart() {
    const productTitle = await this.productTitle.textContent();
    await this.atcButton.click();
    return productTitle;
  }

  async increaseQuantity() {
    // if (await this.atcButton.isVisible()) {
    //   await expect(this.atcButton).toBeVisible();
    //   await expect(this.atcButton).toBeEnabled();
    //   await this.atcButton.click();
    // }
    await this.atcButton.click();
    await this.page.waitForTimeout(8000);
    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }
    await expect(this.cartCount).toContainText('1');
    const before = await this.qtyInput.inputValue();
    await this.qtyPlus.click();
    await this.qtyPlus.click();
    await expect(this.cartCount).toContainText('2');

    await expect(this.qtyInput).not.toHaveValue(before);
  }

  async decreaseQuantity() {

    await this.atcButton.click();
    await this.page.waitForTimeout(10000);

    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }
    await this.qtyInput.waitFor({ state: 'visible' });
    const before = await this.qtyInput.inputValue();
    await this.qtyPlus.click();
    await this.qtyPlus.click();

    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }
    await this.page.reload();
    await this.qtyPlus.click();
    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }
    // await this.qtyPlus.click();

    // await this.page.waitForTimeout(8000);
    // if (await this.cartHeading.isVisible()) {
    //   await this.closeCart.click();
    // }
    await this.qtyMinus.click();

    if (await this.qtyMinus2.isVisible()) {
      await this.qtyMinus2.click();
    }
    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }
    await this.closeCart.click();
    await expect(this.cartCount).toContainText('2');

    await expect(this.qtyInput).not.toHaveValue(before);
  }

  async searchPLPToPDPNavigation(productName) {
    if (await this.searchTexfield.isVisible()) {
      await this.searchTexfield.click();

      await this.searchTexfield.pressSequentially(productName, {
        delay: 100
      });
    }
    if (await this.SearchTextFieldMobile.isVisible()) {
      await this.SearchTextFieldMobile.click();
      await this.searchTexfield.pressSequentially(productName, {
        delay: 100
      });
    }

    await this.productTitlesSearchPLP.first().waitFor({
      state: 'visible',
      timeout: 30000
    });

    const firstProductName = await this.productTitlesSearchPLP
      .first()
      .textContent();

    await this.productTitlesSearchPLP.first().click();

    return firstProductName;
  }
  async writeToUsNavigation() {

    await this.faqtab.click();

    const visibleWriteToUs = this.writeToUs
      .filter({ visible: true })
      .first();

    await visibleWriteToUs.waitFor({
      state: 'visible',
      timeout: 30000
    });

    await visibleWriteToUs.click();
  }
  async youmayalsolikeNavigation() {
    await this.ymalViewAll.click();
  }
  async PDPtoPLPnavigation(page) {
    const expectedUrls = [
      //'https://lovebeautyandplanet.in/collections/all-products',
      'https://lovebeautyandplanet.in/collections/bundle-offers',
      'https://lovebeautyandplanet.in/collections/bundle-offers'

    ];
    for (let i = 0; i < await this.viewproductsLink.count(); i++) {
      await this.viewproductsLink.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
      await this.viewproductsLink.nth(i).waitFor();
    }
  }
  async addToCartFromPDP() {

    const productTitle = await this.addToCart();

    // Wait for visible cart product
    const visibleCartProduct = this.cartproductTitle
      .filter({ visible: true })
      .first();

    await visibleCartProduct.waitFor({
      state: 'visible',
      timeout: 30000
    });

    // Get cart product title
    const cartTitle =
      await visibleCartProduct.textContent() || '';

    // Take few words from PDP title
    const expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');

    // Validate cart contains similar text
    expect(cartTitle.toLowerCase())
      .toContain(expectedText);
  }
}
