import { expect } from '@playwright/test';
exports.PLP = class PLP {

  constructor(page) {
    this.page = page;

    this.pageUrlMarker = page.locator('[data-page-url-test-id]');
    this.breadcrumbHome = page.locator('[data-breadcrumb-home-test-id]').first();
    this.breadcrumbCollections = page.locator('[data-breadcrumb-collections-test-id]').first();
    this.breadcrumbCurrent = page.locator('[data-breadcrumb-current-test-id]').first();

    // Product cards + add to cart
    this.productDescription = page.locator('[class="h-pro-card-cnt-description"]');
    this.productTitles = page.locator('//p[@class="h-pro-card-cnt-description"]');
    this.productCards = page.locator('[data-product-card-test-id]');
    this.firstProductLink = page.locator('(//p[@class="h-pro-card-cnt-description"])[1]');
    this.firstAtcButton = page.locator('(//div[@class="product-form__buttons"])[1]');
    this.atcToast = page.locator('[data-add-to-cart-toast-test-id]').first();
    this.viewCartDrawerButton = page.locator('[data-view-cart-drawer-test-id]').first();
    this.pdpProductTitle = page.locator('//div[@class="product__title"]');

    // Filters (facets)
    this.mainFilterDesktop = page.locator('//span[@class="facets__summary-label"]');
    this.mainFilterMobile = page.locator('[class="accordion-button mobile-facets__item "]');
    this.allFilterOptions = page.locator("//span[@class='facet-checkbox__text']");
    this.appliedFilters = page.locator('[class="active-facets__button-inner button button--tertiary"]');
    this.facetsSection = page.locator('[data-section-test-id*="-facets-"]').first();
    this.anyFilterCheckbox = page.locator('[data-filter-checkbox-test-id]').first();
    this.appliedFiltersDesktop = page.locator('[data-applied-filters-test-id*="desktop"]').first();
    this.appliedFiltersMobile = page.locator('[data-applied-filters-test-id*="mobile"]').first();
    this.clearAllDesktop = page.locator('[class="facet_clear_btn"]').first();
    this.clearAllMobile = page.locator('[data-clear-all-test-id*="mobile"]').first();
    this.closeFilterDrawer = page.locator('[class="mobile-facets__close"]');
    this.productCountFilter = page.locator('[class="mobile-facets__count"]');
    this.clearAllFiltersMobile = page.locator('[class="mobile-facets__clear underlined-link"]');

    // You may also like section on PLP
    this.ymalSection = page.locator("//h2[contains(text(),'you may also like')]");
    this.ymalViewAll = page.locator('//a[contains(text(),"VIEW ALL")]');

    // Beauty archives section on PLP
    this.beautyEditsSection = page.locator('[data-section-test-id*="collection-beauty-edits"]').first();
    this.beautyEditsViewAll = page.locator('//h2[contains(text(),"Beauty Archives")]/ancestor::section//a[@class="home-common-btn"]').first();

    // FAQs + write to us
    this.faqsection = page.locator('//h2[contains(text(),"faqs")]');
    this.writeToUs = page.locator('//a[contains(text(),"Write to us")]');
    //PLP
    this.plpProductTitle = page.locator('//div[@class="product__title"]');
    //cart drawer
    this.cartproductTitle = page.locator("//a[contains(@class,'cart-item__name')]");
    //Home page
    this.cartLink = page.locator('[class="header__icon header__icon--cart link focus-inset"]');
    //mobile filters
    this.filterMobile = page.locator('[class="mobile-facets__open-label button-label medium-hide large-up-hide"]');
    this.filterMainMobile = page.locator('//div[contains(@class,"accordion-button mobile-facets__item ")]');
    this.filterSubMobile = page.locator('//form[@id="FacetFiltersFormMobile"]//span[@class="facet-checkbox__text"]');
    this.searchTexfield = page.locator("//div[@class='header__icons header__icons--localization header-localization']//input");
    this.SearchTextFieldMobile = page.locator("[id='mob-search-mob']");
    this.productTitlesSearchPLP = page.locator('(//div[@class="result-product-item-info h-pro-card-cnt"]//a)[1]');
    this.productTitlesSearchPLPall = page.locator('//div[@class="result-product-item-info h-pro-card-cnt"]//a');
    this.searchProductCount = page.locator('[class="wizzy-summary-head"]');
    this.searchFilter = page.locator('[class="wizzy-filters-header"]');
    this.productNotAvailable = page.locator('[class="wizzy-empty-results-content"]');
    this.plpProductTitle = page.locator('//p[@class="h-pro-card-cnt-description"]//a');
    this.plpProductVariant = page.locator('//div[@class="h-pro-quant hm-pro-variant"]');
    this.plpProductPrice = page.locator('[class="pro-variant-price active"]');
    this.plpATC = page.locator('[class="product-form"]');
    this.scrollOnTop = page.locator('[class="scroll-on-top"]');
    this.collectionBanner = page.locator('[class="collection-banner"]');
    this.collectionBreadcrumb = page.locator('[class="coll-breadcrumb"]');
    this.filterOnLeft = page.locator('[aria-labelledby="verticalTitle"]');
    this.mainFilter = page.locator('[class="facets__summary-label"]');
    this.ymalRightNavigaion = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//button[@class="owl-next"]');
    this.ymalLeftNavigaion = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//button[@class="owl-prev"]');
    this.ymalProductTitle = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//p[@class="h-pro-card-cnt-description"]//a');
    this.ymalATC = page.locator('//h2[contains(text(),"you may also like")]/ancestor::section//div[@class="product-form__buttons"]');
    this.viewCartButton = page.locator('(//button[@id="view-cart-drawer"])[1]');
    this.notifyButton = page.locator('[id="notify-me-btn"]');
    this.notifyMeName = page.locator('[id="notify-name"]');
    this.notifyMePhone = page.locator('[id="notify-phone"]');
    this.notifyMeSubmit = page.locator('[class="notify-submit-btn"]');
    this.beautyArchivesTitle = page.locator('//div[@class="h-beauty-card-cnt"]//a');
    this.blogDetailsPage = page.locator('[class="line-1 h1"]');
    this.faqHeading = page.locator('//h2[contains(text(),"faqs")]/ancestor::div[@class="container"]//div[@class="accordion-item"]');
    this.faqBody = page.locator('//h2[contains(text(),"faqs")]/ancestor::div[@class="container"]//div[@class="accordion-body"]');
    this.plpProductTitleOnly = page.locator('//div[@class=" facets-vertical container"]//p[@class="h-pro-card-cnt-description"]//a');
    this.wizzyResults = page.locator('[class="wizzy-summary-head"]');
    this.wizzyIngredients = page.locator('(//span[contains(text(),"Ingredients")])[2]');
    this.wizzyIngredientsDropdown = page.locator('[class="wizzy-filters-facet-block facet-block-product_value_tags_ingredients facet-block-left collapsible"]');
    this.wizzyAllFilters = page.locator('[class="facet-item-label-value"]');
    this.wizzyClearAll = page.locator('[class="wizzy-filters-clear-all"]');
    this.wizzyMobileFilter = page.locator('[class="wizzy-filters-mobile-entry "]');
    this.wizzyPrice = page.locator('[class="product-item-disc-price"]');
    this.pdpProductPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="pro-variant-price"]');
    this.wizzyATC = page.locator('[class="product-form__submit button js-ajax-add-to-cart new_atc_btn "]');
    this.cartPrice = page.locator('[class="pro-variant-price"]');
    this.cartClose = page.locator('[class="drawer__close"]');
    this.cartCount = page.locator('//div[@class="cart-count-bubble"]//span[@aria-hidden="true"]');
    this.quantityPlus = page.locator('[class="quantity__button no-js-hidden plus-btn"]').first();
    this.quantityMinus = page.locator('[class="quantity__button no-js-hidden minus-btn"]').first();

    this.productcardReview = page.locator('[class="custom-review--rating-conatiner"]').first();
    this.productCradCategory = page.locator('//div[@class="h-pro-card-cnt"]//p').first();
    this.productCardTitle = page.locator('[class="h-pro-card-cnt-description"]').first();
    this.productCardVariant = page.locator('[class="h-pro-quant hm-pro-variant"]').first();
    this.productCardPrice = page.locator('//div[@class="h-pro-price"]//span[@class="pro-variant-price active"]').first();
    this.compareAtPrice = page.locator('//div[@class="h-pro-price"]//span[@class="text-decoration-line-through active"]').first();
    this.discountPercentage = page.locator('//div[@class="h-pro-card-sale active"]').first();
    this.productCardATC = page.locator('[class="product-form__buttons"]').first();
    this.ATCSuccessMessage = page.locator('[class="add-to-cart-pop active"]');
    this.filtersHeading = page.locator('[class="facets__heading facets__heading--vertical caption-large text-body"]');
    this.filtersHeadingMobile = page.locator('[class="mobile-facets__heading medium-hide large-up-hide"]');
    //ymal
    this.ymalproductcardReview = page.locator('//section[@class="pdp-collection rekated_product"]//div[@class="custom-review--rating-conatiner"]').first();
    this.ymalproductCradCategory = page.locator('//section[@class="pdp-collection rekated_product"]//div[@class="h-pro-card-cnt"]//p').first();
    this.ymalproductCardTitle = page.locator('//section[@class="pdp-collection rekated_product"]//p[@class="h-pro-card-cnt-description"]').first();
    this.ymalproductCardVariant = page.locator('//section[@class="pdp-collection rekated_product"]//div[@class="h-pro-quant hm-pro-variant"]').first();
    this.ymalproductCardPrice = page.locator('//section[@class="pdp-collection rekated_product"]//span[@class="pro-variant-price active"]').first();
    this.ymalcompareAtPrice = page.locator('//section[@class="pdp-collection rekated_product"]//span[@class="text-decoration-line-through active"]').first();
    this.ymaldiscountPercentage = page.locator('//section[@class="pdp-collection rekated_product"]//div[@class="h-pro-card-sale active"]').first();
    this.ymalViewAll = page.locator('//section[@class="pdp-collection rekated_product"]//a[@class="home-common-btn"]');
    this.cartCount = page.locator('//div[@class="cart-count-bubble"]//span[@aria-hidden="true"]');
    this.beautyArchivesPrev = page.locator('//section[@class="home-beautyedits collection-beautyedits"]//button').nth(0);
    this.beautyArchivesNext = page.locator('//section[@class="home-beautyedits collection-beautyedits"]//button').nth(1);
    this.beautyArchivesImage = page.locator('//div[@class="h-beauty-card-img"]').first();
    this.beautyArchivesDate = page.locator('//div[@class="h-beauty-card-cnt"]//span').first();
    this.beautyArchivesSlider = page.locator('[class="owl-dot"]').first();
    this.haveanyQuestion = page.locator('//h3[contains(text(),"HAVE ANOTHER QUESTION ")]');
  }
  async youmayalsoLikeViewAllRedirection(page) {
    await this.ymalViewAll.click();
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/collections/all-products");
  }
  async youmayalsoLikePDPRedirection(page) {
    await expect(this.ymalproductcardReview).toBeVisible();
    await expect(this.ymalproductCradCategory).toBeVisible();
    await expect(this.ymalproductCardTitle).toBeVisible();
    await expect(this.ymalproductCardVariant).toBeVisible();
    await expect(this.ymalproductCardPrice).toBeVisible();
    await expect(this.ymalcompareAtPrice).toBeVisible();
    await expect(this.ymaldiscountPercentage).toBeVisible();
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
    const pdpProductTitle = (await this.pdpProductTitle.textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Validate YMAL product redirects to the correct PDP
    expect(pdpProductTitle).toContain(productTitle);
  }



  async productCardDetailsVerification(page) {
    await this.productcardReview.scrollIntoViewIfNeeded();
    await expect(this.productcardReview).toBeVisible();
    await expect(this.productCradCategory).toBeVisible();
    await expect(this.productCardTitle).toBeVisible();
    await expect(this.productCardVariant).toBeVisible();
    await expect(this.productCardPrice).toBeVisible();
    await this.productCardATC.click();
    await expect(this.ATCSuccessMessage).toBeVisible();
    await this.quantityPlus.click();
    await this.quantityMinus.click();
  }
  async quantitySelectorFunctionality() {
    await this.wizzyATC.first().click();
    await this.cartClose.click();
    await this.page.waitForTimeout(3000);
    await expect(this.cartCount).toHaveText('1');
    await this.quantityPlus.click();
    await this.cartClose.click();
    await expect(this.cartCount).toHaveText('2');
    await this.quantityMinus.click();
    await this.cartClose.click();
    await expect(this.cartCount).toHaveText('1');
  }
  async wizzysearchPLPATC() {
    const searchProduct = await this.productTitlesSearchPLP.first().textContent();
    const productPrice = await this.wizzyPrice.first().textContent();
    await this.wizzyATC.first().click();
    const cartProductTitle = await this.cartproductTitle.first().textContent();
    const cartProductPrice = await this.cartPrice.first().textContent();
    expect(cartProductTitle).toContain(searchProduct);
    expect(productPrice).toContain(cartProductPrice);

  }
  async wizzysearchPLPToPDPNavigation() {
    const searchProduct = await this.productTitlesSearchPLP.first().textContent();
    const productPrice = await this.wizzyPrice.first().textContent();
    await this.productTitlesSearchPLP.first().click();
    const pdpProductTitle = await this.pdpProductTitle.first().textContent();
    const pdpProductPrice = await this.pdpProductPrice.first().textContent();
    expect(pdpProductTitle).toContain(searchProduct);
    expect(productPrice).toContain(pdpProductPrice);

  }
  async wizzyFilterFunctionalityMobile(filterOption) {
    await this.wizzyMobileFilter.click();



    // Find and click the requested filter dynamically
    const filter = this.wizzyAllFilters
      .filter({ hasText: filterOption })
      .first();

    await expect(filter).toBeVisible();
    await filter.click();

    // Wait for product results to update
    await this.productTitlesSearchPLPall.first().waitFor({
      state: 'visible',
      timeout: 30000
    });

    const productTitles =
      await this.productTitlesSearchPLPall.allTextContents();

    // Normalize filter option
    const filterWords = filterOption
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    // Check whether any product title matches at least 50%
    const matchFound = productTitles.some(title => {

      const titleWords = title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      const matchedWords = filterWords.filter(filterWord =>
        titleWords.some(titleWord =>
          titleWord.includes(filterWord)
        )
      );

      const percentage =
        matchedWords.length / filterWords.length;

      console.log(
        `Filter: ${filterOption} | Product: ${title} | Match: ${(percentage * 100).toFixed(0)}%`
      );

      return percentage >= 0.5;
    });


    expect(matchFound).toBeTruthy();
    await this.wizzyMobileFilter.click();

    await this.wizzyClearAll.click();
    await expect(this.wizzyClearAll).not.toBeVisible();
  }

  async wizzyFilterFunctionality(filterOption) {

    // Open Ingredients filter
    await this.wizzyIngredients.click();
    await expect(this.wizzyIngredientsDropdown).not.toBeVisible();

    // Find and click the requested filter dynamically
    const filter = this.wizzyAllFilters
      .filter({ hasText: filterOption })
      .first();

    await expect(filter).toBeVisible();
    await filter.click();

    // Wait for product results to update
    await this.productTitlesSearchPLPall.first().waitFor({
      state: 'visible',
      timeout: 30000
    });

    const productTitles =
      await this.productTitlesSearchPLPall.allTextContents();

    // Normalize filter option
    const filterWords = filterOption
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    // Check whether any product title matches at least 50%
    const matchFound = productTitles.some(title => {

      const titleWords = title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      const matchedWords = filterWords.filter(filterWord =>
        titleWords.some(titleWord =>
          titleWord.includes(filterWord)
        )
      );

      const percentage =
        matchedWords.length / filterWords.length;

      console.log(
        `Filter: ${filterOption} | Product: ${title} | Match: ${(percentage * 100).toFixed(0)}%`
      );

      return percentage >= 0.5;
    });

    expect(matchFound).toBeTruthy();
    await this.wizzyClearAll.click();
    await expect(this.wizzyClearAll).not.toBeVisible();
  }




  async searchPLPProductCount() {
    await expect(this.wizzyResults).toBeVisible();
  }
  async hpToSearchPLPNavigation(productName) {

    if (await this.searchTexfield.isVisible()) {
      await this.searchTexfield.click();

      await this.searchTexfield.pressSequentially(productName, {
        delay: 100
      });
    }

    if (await this.SearchTextFieldMobile.isVisible()) {
      await this.SearchTextFieldMobile.click();

      await this.SearchTextFieldMobile.pressSequentially(productName, {
        delay: 100
      });
    }

    await this.productTitlesSearchPLPall.first().waitFor({
      state: 'visible',
      timeout: 30000
    });

    const productTitles = await this.productTitlesSearchPLPall.allTextContents();

    // Normalize searched product name
    const searchWords = productName
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    // Check each search result title
    const matchFound = productTitles.some(title => {

      const titleWords = title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      const matchedWords = searchWords.filter(word =>
        titleWords.some(titleWord => titleWord.includes(word))
      );

      const matchPercentage = matchedWords.length / searchWords.length;

      console.log(`Title: ${title}`);
      console.log(
        `Matched: ${matchedWords.length}/${searchWords.length} (${(matchPercentage * 100).toFixed(0)}%)`
      );

      return matchPercentage >= 0.5;
    });

    expect(matchFound).toBeTruthy();
  }

  async comboProductFunctionality() {

    await expect(this.productcardReview).toBeVisible();
    await expect(this.productCradCategory).toBeVisible();
    await expect(this.productCardTitle).toBeVisible();
    await expect(this.productCardVariant).toBeVisible();
    await expect(this.productCardPrice).toBeVisible();
    const productCount = await this.plpProductTitleOnly.count();

    expect(productCount).toBeGreaterThan(0);

    for (let i = 0; i < productCount; i++) {

      const productTitle = await this.plpProductTitleOnly.nth(i).textContent();

      console.log(`Product ${i + 1}: ${productTitle}`);

      const title = productTitle?.toLowerCase() || '';

      expect(
        title.includes('combo') || title.includes('gift pack')
      ).toBeTruthy();
    }
  }
  async faqFunctionality() {
    for (let i = 0; i < await this.faqHeading.count(); i++) {
      await this.faqHeading.nth(i).click();
      await expect(this.faqBody.nth(i)).toBeVisible();
    }
  }

  async beautyArchivesFunctionality() {
    await expect(this.beautyArchivesImage).toBeVisible();
    await expect(this.beautyArchivesDate).toBeVisible();
    const beautyArchivesTitle = await this.beautyArchivesTitle.nth(0).textContent();
    await this.beautyArchivesTitle.nth(0).click();
    const blogTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).toContain(beautyArchivesTitle.toLowerCase());
  }
  async soldoutFunctionality() {

    // Initially verify ATC products are displayed
    const atcCount = await this.plpATC.count();
    console.log(`Initially ATC products: ${atcCount}`);

    expect(atcCount).toBeGreaterThan(0);

    for (let i = 0; i < atcCount; i++) {
      await expect(this.plpATC.nth(i)).toBeVisible();
    }

    // Verify sold-out products have Notify Me button
    const notifyCount = await this.notifyButton.count();
    console.log(`Sold-out products: ${notifyCount}`);

    expect(notifyCount).toBeGreaterThan(0);

    for (let i = 0; i < notifyCount; i++) {
      await expect(this.notifyButton.nth(i)).toBeVisible();
    }
    await this.notifyButton.nth(1).click();

    await this.notifyMeName.fill('Amit');
    await this.notifyMePhone.fill('9876543210');

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.notifyMeSubmit.click();

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe(
      "Thanks! We'll notify you when this item is back in stock."
    );

    await dialog.accept();
  }
  async youmayalsoLikeATC(page) {
    // Get product title from YMAL and normalize whitespace
    const productTitle = (await this.ymalProductTitle.nth(0).textContent())
      ?.replace(/\s+/g, ' ')
      .trim();


    // Click the YMAL product
    await this.ymalATC.nth(0).click();
    await expect(this.ATCSuccessMessage).toBeVisible();
    await expect(this.cartCount).toContainText('1');
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




  async movetoTopFunctionality() {
    await this.faqsection.click();
    await this.scrollOnTop.click();
    await expect(this.productTitles.nth(0)).toBeVisible();

  }
  async productDetailsVisibility() {
    await expect(this.collectionBanner).toBeVisible();
    await expect(this.collectionBreadcrumb).toBeVisible();
    for (let i = 0; i < await this.plpProductTitle.count(); i++) {
      await expect(this.plpProductTitle.nth(i)).toBeVisible();
      await expect(this.plpProductVariant.nth(i)).toBeVisible();
      await expect(this.plpProductPrice.nth(i)).toBeVisible();
      await expect(this.plpATC.nth(i)).toBeVisible();
    }
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

      await this.SearchTextFieldMobile.pressSequentially(productName, {
        delay: 100
      });
      await expect(this.productNotAvailable).toBeVisible();
    }

    // Wait for at least one product to load
    await this.productTitlesSearchPLPall.first().waitFor({
      state: 'visible',
      timeout: 30000
    });
    await expect(this.searchProductCount).toBeVisible();
    await expect(this.searchFilter).toBeVisible();

    const productNames = await this.productTitlesSearchPLPall.allInnerTexts();

    console.log(`Total products available: ${productNames.length}`);

    // Check 20% of the products
    const sampleSize = Math.max(1, Math.ceil(productNames.length * 0.20));

    const productsToCheck = productNames.slice(0, sampleSize);

    console.log(`Products selected for checking: ${sampleSize}`);
    console.log("Products checked:", productsToCheck);

    const matchingProducts = productsToCheck.filter(name =>
      name.toLowerCase().includes(productName.toLowerCase())
    );

    const percentage =
      (matchingProducts.length / productsToCheck.length) * 100;

    console.log(`Matching products: ${matchingProducts.length}`);
    console.log(`Match percentage: ${percentage.toFixed(2)}%`);

    // At least 80% of the sampled products should match
    expect(percentage).toBeGreaterThanOrEqual(80);
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

      await this.SearchTextFieldMobile.pressSequentially(productName, {
        delay: 100
      });
    }

  }










  async gotoCollection(handle = 'all-products') {
    await this.page.goto(`/collections/${handle}`);
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.pageUrlMarker).toHaveCount(1);
  }

  async openFirstProduct() {
    await this.firstProductLink.click();
  }

  async applyFiltersAndValidateProducts() {
    await expect(this.filtersHeading).toBeVisible();
    for (let i = 0; i < await this.mainFilterDesktop.count(); i++) {
      await expect(this.mainFilterDesktop.nth(i)).toBeVisible();
      await this.mainFilterDesktop.nth(i).click();
      await this.page.waitForTimeout(2000);
      await this.mainFilterDesktop.nth(i).click();

    }
    await expect(this.filterOnLeft).toBeVisible();
    for (let i = 0; i < await this.mainFilter.count(); i++) {
      await expect(this.mainFilter.nth(i)).toBeVisible();
    }

    const filtersToApply = [
      'Argan Oil And Lavender',
      'Frizz control'
    ];

    // Apply filters
    for (const filter of filtersToApply) {

      const filterOption = this.allFilterOptions
        .filter({ hasText: filter })
        .first();

      await filterOption.scrollIntoViewIfNeeded();
      await filterOption.click();

      // Wait for applied filter to appear
      // await this.page.waitForSelector(
      //   '[data-applied-filter-test-id]'
      // );

      await this.page.waitForTimeout(2000);

      // Validate current applied filter displayed
      const appliedFiltersText =
        await this.appliedFilters.allInnerTexts();

      expect(
        appliedFiltersText.join(' ').toLowerCase()
      ).toContain(filter.toLowerCase());
    }

    // Final validation of all applied filters
    const finalAppliedFilters =
      await this.appliedFilters.allInnerTexts();

    const normalizedFilters =
      finalAppliedFilters.join(' ').toLowerCase();

    for (const filter of filtersToApply) {

      expect(normalizedFilters)
        .toContain(filter.toLowerCase());
    }

    // Get all product titles
    const allProductTitles =
      await this.productTitles.allInnerTexts();

    // Validate relvant products are displayed - at least in the first few products (to optimize test execution time instead of checking all products)
    const fewProducts = allProductTitles.slice(0, 4);

    let relevantProductsCount = 0;

    for (const title of fewProducts) {

      const normalizedTitle = title.toLowerCase();

      const isRelevant = filtersToApply.some(filter => {

        const filterWords = filter
          .toLowerCase()
          .split(' ');

        return filterWords.some(word =>
          normalizedTitle.includes(word)
        );
      });

      if (isRelevant) {
        relevantProductsCount++;
      }
    }
    expect(relevantProductsCount).toBeGreaterThan(0);
  }

  async applyFiltersAndValidateProductsMobile() {


    const filtersToApply = [
      'Argan Oil And Lavender',
      'Hair Care'
    ];

    // Open filter drawer
    await this.filterMobile.click();
    await expect(this.filtersHeadingMobile).toBeVisible();
    await this.page.waitForTimeout(2000);
    for (let i = 0; i < await this.mainFilterMobile.count(); i++) {
      await expect(this.mainFilterMobile.nth(i)).toBeVisible();
    }
    const totalMainFilters = await this.filterMainMobile.count();

    // Apply filters
    for (const filter of filtersToApply) {

      let filterFound = false;

      for (let i = 0; i < totalMainFilters; i++) {

        const mainFilter = this.filterMainMobile.nth(i);

        await mainFilter.scrollIntoViewIfNeeded();
        await mainFilter.click();

        await this.page.waitForTimeout(1000);

        const subFilterCount = await this.filterSubMobile.count();

        for (let j = 0; j < subFilterCount; j++) {

          const subFilter = this.filterSubMobile.nth(j);

          const subFilterText =
            (await subFilter.textContent())?.trim() || '';

          if (
            subFilterText
              .toLowerCase()
              .includes(filter.toLowerCase())
          ) {

            await subFilter.scrollIntoViewIfNeeded();
            await subFilter.click();

            console.log(`Applied filter: ${filter}`);

            filterFound = true;

            await this.page.waitForTimeout(1000);

            break;
          }
        }

        if (filterFound) {
          break;
        }
      }

      expect(filterFound).toBeTruthy();
    }

    // Close filter drawer
    await this.closeFilterDrawer.click();


    // Wait until at least one product is visible
    await this.productDescription.first().waitFor({
      state: 'visible',
      timeout: 10000
    });

    // Additional wait if site updates products via API
    await this.page.waitForTimeout(3000);

    // Get all product titles
    const allProductTitles =
      await this.productDescription.allInnerTexts();

    console.log('Products found:', allProductTitles);

    expect(allProductTitles.length).toBeGreaterThan(0);

    // Validate products
    let matchedProducts = 0;

    for (const productTitle of allProductTitles) {

      const normalizedTitle =
        productTitle.toLowerCase();

      const matchesFilter =
        filtersToApply.some(filter => {

          const filterWords = filter
            .toLowerCase()
            .split(' ')
            .filter(word => word.length > 2); // ignore "and", etc.

          return filterWords.some(word =>
            normalizedTitle.includes(word)
          );
        });

      if (matchesFilter) {
        matchedProducts++;
        console.log(`Matched Product: ${productTitle}`);
      }
    }

    console.log(
      `Matched Products Count: ${matchedProducts}`
    );

    // At least one product should match
    expect(matchedProducts).toBeGreaterThan(0);
  }









  async removeAppliedFilters() {

    const filtersToApply = [
      'Argan Oil And Lavender',
      'Hair Care'
    ];

    // Apply filters
    for (const filter of filtersToApply) {

      const filterOption = this.allFilterOptions
        .filter({ hasText: filter })
        .first();

      await filterOption.scrollIntoViewIfNeeded();

      await filterOption.click();

      // // Wait for applied filter to appear
      // await this.page.waitForSelector(
      //   '[data-applied-filter-test-id]'
      // );

      await this.page.waitForTimeout(2000);
      await this.clearAllDesktop.click();
      await expect(this.clearAllDesktop).not.toBeVisible();

    }
  }



  async removeAppliedFiltersMobile() {

    const filtersToApply = [
      'Argan Oil And Lavender',
      'Hair Care'
    ];

    // Open filter drawer
    await this.filterMobile.click();

    await this.page.waitForTimeout(2000);

    const totalMainFilters = await this.filterMainMobile.count();

    // Apply filters
    for (const filter of filtersToApply) {

      let filterFound = false;

      for (let i = 0; i < totalMainFilters; i++) {

        const mainFilter = this.filterMainMobile.nth(i);

        await mainFilter.scrollIntoViewIfNeeded();
        await mainFilter.click();

        await this.page.waitForTimeout(1000);

        const subFilterCount = await this.filterSubMobile.count();

        for (let j = 0; j < subFilterCount; j++) {

          const subFilter = this.filterSubMobile.nth(j);

          const subFilterText =
            (await subFilter.textContent())?.trim() || '';

          if (
            subFilterText
              .toLowerCase()
              .includes(filter.toLowerCase())
          ) {

            await subFilter.scrollIntoViewIfNeeded();
            await subFilter.click();

            console.log(`Applied filter: ${filter}`);

            filterFound = true;

            await this.page.waitForTimeout(1000);

            break;
          }
        }

        if (filterFound) {
          break;
        }
      }

      expect(filterFound).toBeTruthy();
    }

    const initailCountText = await this.productCountFilter.textContent();
    await this.clearAllFiltersMobile.click();
    // Close filter drawer
    const finalCountText = await this.productCountFilter.textContent();
    await this.closeFilterDrawer.click();
    await expect(finalCountText).not.toBe(initailCountText);




  }
  async expectAppliedFiltersVisible() {
    // Desktop applied filters commonly used; fall back to mobile container if needed.
    if (await this.appliedFiltersDesktop.count()) {
      await expect(this.appliedFiltersDesktop).toBeVisible();
      return;
    }
    await expect(this.appliedFiltersMobile).toBeVisible();
  }

  async clearAllFilters() {
    if (await this.clearAllDesktop.count()) {
      await this.clearAllDesktop.click();
      return;
    }
    await this.clearAllMobile.click();
  }

  async addFirstProductToCart() {
    await this.firstAtcButton.click();
  }

  async openYmalViewAll() {
    await this.ymalViewAll.click();
  }

  async openBeautyEditsViewAll() {
    if (await this.beautyArchivesPrev.isVisible()) {

      await this.beautyArchivesNext.click();
      await this.beautyArchivesPrev.click();
    }
    else if (await this.beautyArchivesSlider.isVisible()) {
      await this.beautyArchivesSlider.click();
    }
    await this.beautyEditsViewAll.click();
  }

  async openFaqViewAll() {
    await this.faqViewAll.click();
  }

  async openWriteToUs() {
    await expect(this.haveanyQuestion).toBeVisible();
    await this.writeToUs.click();
  }
  async PLPtoPDPnavigation() {
    // Get first product name from PLP
    const firstProductName = await this.productDescription
      .first()
      .textContent();

    // Open first product
    await this.openFirstProduct();

    // Get PDP product title
    const productTitle = await this.pdpProductTitle
      .textContent();

    // Validate same product opened
    expect(productTitle.trim().toLowerCase())
      .toContain(firstProductName.trim().toLowerCase());
  }
  async addToCartFRomPLP() {
    // Get first product name from PLP
    const productName = (
      await this.productDescription.first().innerText()
    ).toLowerCase();

    // Add first product to cart
    await this.firstAtcButton.click();

    // Open cart drawer
    await this.cartLink.click();

    // Wait for cart product to appear
    await this.cartproductTitle.first().waitFor();

    // Get all cart product titles
    const cartProducts =
      await this.cartproductTitle.allTextContents();

    // Convert cart products to lowercase
    const lowerCaseProducts = cartProducts.map(product =>
      product.toLowerCase()
    );

    // Validate same product added to cart
    expect(lowerCaseProducts)
      .toContain(productName);
  }
}

