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
    this.clearAllFiltersMobile= page.locator('[class="mobile-facets__clear underlined-link"]');

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

const initailCountText=await this.productCountFilter.textContent();
   await this.clearAllFiltersMobile.click();
  // Close filter drawer
const finalCountText=await this.productCountFilter.textContent();
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
    await this.beautyEditsViewAll.click();
  }

  async openFaqViewAll() {
    await this.faqViewAll.click();
  }

  async openWriteToUs() {
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

