import { expect } from '@playwright/test';

exports.Cart = class Cart {

  constructor(page) {
    this.page = page;
    //x empty cart message locator needs to be added i have hardcoded for now
    this.emptyCartMessage = page.locator('[class="cart__empty-text"]');
    this.emptyCartContinueShopping = page.locator("//div[@class='cart-drawer__warnings center']//a[@href='/collections/all']");

    this.productTitle = page.locator('[class="cart-item__name h4 break"]');
    this.pageUrlMarker = page.locator('[data-page-url-test-id]');

    this.cartItemsSection = page.locator('[data-section-test-id*="main-cart-items"]').first();
    this.emptyCartWrapper = page.locator('[data-empty-cart-test-id]').first();

    this.cartLineItems = page.locator('[data-cart-line-item-test-id]');
    this.checkoutDestination = page.locator('[data-checkout-destination-test-id]').first();

    this.freebieRow = page.locator('tr.freebie-product');
    this.closeCart = page.locator('(//button[@class="drawer__close"])[1]');
    this.cartTotalPrice = page.locator('//span[@class="price-amount"]');
    this.freebie = page.locator('//div[@class="freebie-text"]');
    this.checkoutButton = page.locator("//span[contains(text(),'Checkout')]");
    this.gokwikPopup = page.locator('//div[@class="gokwik-modal gokwik-modal-content"]');
    this.hidebar = page.locator('(//span[@class="_TextLabel_1ymlj_49"])[1]');
    this.pdpatcButton = page.locator('[class="product-form__submit button button--full-width button--secondary  pdp-submit-button "]');
    this.pdpproductTitle = page.locator('.product__title h1');
    this.pdpproductPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="pro-variant-price"]');
    this.quantitySelctor = page.locator('[data-quantity-variant-id="42670785069226"]');
    this.quantityminus = page.locator('(//quantity-input//button[@name="minus"])[1]');
    this.quantityplus = page.locator('//tr//button[@name="plus"]');
    this.cartLink = page.locator('[class="header__icon header__icon--cart link focus-inset"]');
    //pdp
    this.qtyPlus = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[4]').first();
    this.qtyMinus = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[3]').first();
    this.qtyMinus2 = page.locator('(//button[contains(@class,"quantity__button no-js-hidden")])[7]').first();
    this.qtyInput = page.locator('(//input[@class="quantity__input"])[1]').first();
    this.productPrice = page.locator('//div[@class="sing-product-variant"]//span[@class="pro-variant-price"]');
    this.hpProductTitle = page.locator("//section[@class='home-products']//p[@class='h-pro-card-cnt-description']");
    this.emptyCartWithoutQuantity = page.locator('[class="cart-count-bubble"]');
    this.filledCartWithQuantity = page.locator('//div[@class="cart-count-bubble"]//span[@aria-hidden="true"]');
    this.quantityDisabled = page.locator('[class="quantity__button no-js-hidden qty_cart_variant_limit disabled"]');
    this.atcButton = page.locator('[class="product-form__submit button button--full-width button--secondary  pdp-submit-button "]');
    this.cartHeading = page.locator('[class="drawer__heading cart-heading"]');
    this.cartQuantity = page.locator('[class="quantity__input "]');
    //when cart has multiple products and we want to increase the quantity of first product in cart
    this.firstProductMinusIcon = page.locator('//tr[@id="CartDrawer-Item-1"]//button[@name="minus"]');
    this.firstProductPlusIcon = page.locator('//tr[@id="CartDrawer-Item-1"]//button[@name="plus"]');
    this.firstProductQuantity = page.locator('//tr[@id="CartDrawer-Item-1"]//input[@class="quantity__input "]');
    this.deleteFirstProduct = page.locator('[id="CartDrawer-Remove-1"]');
    this.deleteSecondProduct = page.locator('[id="CartDrawer-Remove-2"]');
    //this.productPrice = page.locator('[class="pro-variant-price"]');
    this.productMRP = page.locator('//span[@class="text-decoration-line-through"]');
    this.cartPrice = page.locator('//tr[@id="CartDrawer-Item-1"]//span[@class="pro-variant-price"]');
    this.cartMRP = page.locator('//tr[@id="CartDrawer-Item-1"]//span[@class="text-decoration-line-through"]');
    this.cartPrice2 = page.locator('//tr[@id="CartDrawer-Item-2"]//span[@class="pro-variant-price"]');
    this.cartMRP2 = page.locator('//tr[@id="CartDrawer-Item-2"]//span[@class="text-decoration-line-through"]');
    this.subTotal= page.locator('//div[@class="price-details"]//span[@class="subtotal"]');
    this.netPayable= page.locator('[class="totals__total-value"]');
    this.ATCSuccessMessage = page.locator('[class="add-to-cart-pop active"]');
    this.discountPrice = page.locator('[class="discount-price"]');
    this.youHaveSavedMessage= page.locator('//div[@class="cart-saving"]//span');
    this.freeShippingMessage= page.locator('[class="free-shipping--success-message"]');
    this.shippinhPrice= page.locator('//span[@class="cart-shipping-price"]//s');
    this.beautyArchives= page.locator('(//a[contains(text(),"Beauty Archives")])[1]');
    this.beautyArchivesMobile= page.locator('(//a[contains(text(),"Beauty Archives")])[2]');
    this.blogTitle= page.locator('[class="title"]');
    this.blogProductTitle= page.locator('//div[@class="h-pro-card-cnt buy-detail"]//p');
    this.blogATCButton= page.locator('[class="product-form__submit button button--full-width button--primary"]');
    this.hamburgerMenu = page.locator('[id="openMenu"]');
        this.announcementBarLink = page.locator('[class="announcement"]');
    this.plpProductTitle= page.locator('//div[@class=" facets-vertical container"]//p[@class="h-pro-card-cnt-description"]//a');
    this.plpATCButton= page.locator('//div[@class=" facets-vertical container"]//div[@class="product-form__buttons"]');
    this.viewCart= page.locator('[id="view-cart-drawer"]').first(); 
    this.plpPrice= page.locator('[class="pro-variant-price active"]');
    this.buy3message= page.locator('[class="totalCartItem item_1399"]');
    this.buy4message= page.locator('[class="free-msg1"]');
    this.inputSearch= page.locator('(//input[@type="search"])[2]');
        this.closeCart = page.locator('(//button[@class="drawer__close"])[1]');

  }
async buy3At1399andBuy4OfferAt1799() {

  await this.announcementBarLink.click();

  const plpPriceText = await this.plpPrice.nth(0).textContent();

  const plpPrice = parseFloat(
    plpPriceText.replace(/[^\d.]/g, '')
  );

  await this.plpATCButton.nth(0).click();

  await this.viewCart.click();

  // Quantity 2
  await this.firstProductPlusIcon.click();
  await this.page.waitForTimeout(2000);

  let netPayableText = await this.netPayable.textContent();
  let netPayable = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  expect(netPayable).toBe(2 * plpPrice);

  // Quantity 3 → ₹1399
  await this.firstProductPlusIcon.click();
  await this.page.waitForTimeout(2000);

  netPayableText = await this.netPayable.textContent();
  netPayable = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  expect(netPayable).toBe(1399);
  await expect(this.buy3message).toBeVisible();
  // Quantity 4 → ₹1799
  await this.firstProductPlusIcon.click();
  await this.page.waitForTimeout(2000);

  netPayableText = await this.netPayable.textContent();
  netPayable = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  expect(netPayable).toBe(1799);
    await expect(this.buy4message).toBeVisible();

  // // Quantity 5 → ₹1799 + plpPrice
  // await this.firstProductPlusIcon.click();
  // await this.page.waitForTimeout(2000);

  // netPayableText = await this.netPayable.textContent();
  // netPayable = parseFloat(
  //   netPayableText.replace(/[^\d.]/g, '')
  // );

  // expect(netPayable).toBe(1799 + plpPrice);
}

async combinationOfBuy3At1399andBuy4OfferAt1799andCombo(){
   await this.announcementBarLink.click();

  const plpPriceText = await this.plpPrice.nth(0).textContent();

  const plpPrice = parseFloat(
    plpPriceText.replace(/[^\d.]/g, '')
  );

  await this.plpATCButton.nth(0).click();

  await this.viewCart.click();

  // Quantity 2
  await this.firstProductPlusIcon.click();
  await this.page.waitForTimeout(2000);

  let netPayableText = await this.netPayable.textContent();
  let netPayable = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  expect(netPayable).toBe(2 * plpPrice);

  // Quantity 3 → ₹1399
  await this.firstProductPlusIcon.click();
  await this.page.waitForTimeout(2000);

  netPayableText = await this.netPayable.textContent();
  netPayable = parseFloat(
    netPayableText.replace(/[^\d.]/g, '')
  );

  expect(netPayable).toBe(1399);
  await expect(this.buy3message).toBeVisible();
  await this.closeCart.click();
return netPayable;
}
async combinePrice(offer) {

  const productPriceText = await this.productPrice.textContent();

  const productPrice = parseFloat(
    productPriceText.replace(/[^\d.]/g, '')
  );

  await this.pdpatcButton.click();

  const total = productPrice + offer;

  await this.cartLink.click();

  await expect(this.netPayable).toHaveText(`₹${total}`);
}











  async priceDetailsSection() {
    await this.cartLink.click();
    const firstProductPrice = await this.cartPrice.first().textContent();
    const firstProductMRP = await this.cartMRP.first().textContent();
    const secondProductPrice = await this.cartPrice2.first().textContent();
    const secondProductMRP = await this.cartMRP2.first().textContent();
    const subTotal = await this.subTotal.first().textContent();
    const netPayable = await this.netPayable.first().textContent();
    const subtotal=firstProductMRP + secondProductMRP;
    const firstProductDiscount = parseFloat(firstProductMRP.replace(/[^0-9.-]+/g, "")) - parseFloat(firstProductPrice.replace(/[^0-9.-]+/g, ""));
    const secondProductDiscount = parseFloat(secondProductMRP.replace(/[^0-9.-]+/g, "")) - parseFloat(secondProductPrice.replace(/[^0-9.-]+/g, ""));
    const totalDiscount = firstProductDiscount + secondProductDiscount;
    const calculatedNetPayable = parseFloat(subTotal.replace(/[^0-9.-]+/g, "")) - totalDiscount;
    const displayedNetPayable = parseFloat(netPayable.replace(/[^0-9.-]+/g, ""));
    await expect(calculatedNetPayable).toEqual(displayedNetPayable);
    console.log("Calculated Net Payable: " + calculatedNetPayable);
    console.log("Displayed Net Payable: " + displayedNetPayable);



  }
async addToCartAndVerifySavedandShippingMessage() {
    await this.pdpatcButton.click();

    // Wait for cart product
    await this.productTitle.first().waitFor();

    var cartPrice = await this.cartPrice.first().textContent();
    var cartMRP = await this.cartMRP.first().textContent();

    var mrp = parseFloat(cartMRP.replace(/[^0-9.-]+/g, ""));
    var price = parseFloat(cartPrice.replace(/[^0-9.-]+/g, ""));

    var discount = Math.abs(mrp - price);
    var totalsaved = discount + 49;

    console.log("MRP: " + mrp);
    console.log("Price: " + price);
    console.log("Discount: " + discount);
    console.log("Total Saved: " + totalsaved);

    await expect(this.youHaveSavedMessage)
        .toContainText(String(totalsaved));
        await expect(this.freeShippingMessage).toBeVisible();
}
  async addToCartAndVerifyTheDiscount() {
    await this.pdpatcButton.click();

    // Wait for cart product
    await this.productTitle.first().waitFor();

    var cartPrice = await this.cartPrice.first().textContent();
    var cartMRP = await this.cartMRP.first().textContent();
    var discountPrice = await this.discountPrice.first().textContent();
    discountPrice = discountPrice.replace("-", "");
    var calculatedDiscount = parseFloat(cartMRP.replace(/[^0-9.-]+/g, "")) - parseFloat(cartPrice.replace(/[^0-9.-]+/g, ""));
    var displayedDiscount = parseFloat(discountPrice.replace(/[^0-9.-]+/g, ""));
    await expect(calculatedDiscount).toEqual(displayedDiscount);
    console.log("Calculated Discount: " + calculatedDiscount);
    console.log("Displayed Discount: " + displayedDiscount);
  }
  async addToCartAndVerifyTheContents() {
    const productTitle = await this.pdpproductTitle.textContent();
    const productPrice = await this.pdpproductPrice.textContent();
    const productMRP = await this.productMRP.textContent();
    await this.pdpatcButton.click();
    await expect(this.ATCSuccessMessage).toBeVisible();
    await this.ATCSuccessMessage.click();
    await this.page.waitForTimeout(5000);

    // Wait for cart product
    await this.productTitle.first().waitFor();
    // Get first cart product
    var cartTitle = await this.productTitle.first().textContent();
    var cartPrice = await this.cartPrice.first().textContent();
    var cartMRP = await this.cartMRP.first().textContent();
    // Take few words from PDP title
    var expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');
    // Validate cart contains similar text
    expect(cartTitle.toLowerCase()).toContain(productTitle.toLowerCase());
    // Validate cart price matches product price
    expect(cartPrice.trim()).toEqual(productPrice.trim());
    // Validate cart MRP matches product MRP
    expect(cartMRP.trim()).toEqual(productMRP.trim());
    await this.closecart();

  }
  async addToCartAndVerifyTheAddedMessage() {
    await this.pdpatcButton.click();
    await expect(this.ATCSuccessMessage).toBeVisible();
  }
  async removeFirstProductFromCart() {
    await this.cartLink.click();
    await this.deleteFirstProduct.click();
    await this.closeCart.click();
    await expect(this.filledCartWithQuantity).toHaveText('1');

  }
  async removeProductFromCart() {
    await this.cartLink.click();
    await this.deleteFirstProduct.click();
    await expect(this.emptyCartMessage).toBeVisible();
  }
  async decreaseQuantityandVerifyTheQuantity() {
    await this.atcButton.click();
    await this.page.waitForTimeout(8000);
    if (await this.cartHeading.isVisible()) {
      await this.closeCart.click();
    }

    await this.qtyPlus.click();
    if (this.closeCart.isVisible()) {
      await this.closeCart.click();
    }
    await this.qtyPlus.click();
    if (this.closeCart.isVisible()) {
      await this.closeCart.click();
    } await this.qtyMinus.click();
    const totalQuantity = await this.qtyInput.inputValue();
    const cartQuantity = await this.cartQuantity.inputValue();
    await expect(totalQuantity).toEqual(cartQuantity);

  }

  async decreaseQuantityandVerifyTheCartBehavior() {
    await this.cartLink.click();
    await this.quantityminus.click();
    await expect(this.emptyCartMessage).toBeVisible();
  }
  async multipleProductQuantitySectorFunctionality() {
    await this.cartLink.click();
    const beforeQuantity = await this.firstProductQuantity.inputValue();
    await this.firstProductPlusIcon.click();
    const afterQuantity = await this.firstProductQuantity.inputValue();
    expect(parseInt(afterQuantity)).toBeGreaterThan(parseInt(beforeQuantity));
    await this.firstProductMinusIcon.click();
    const finalQuantity = await this.firstProductQuantity.inputValue();
    expect(parseInt(finalQuantity)).toBeLessThan(parseInt(afterQuantity));
  }

  async increaseQuantityandVerifyTheQuantity() {
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

    await this.qtyPlus.click();
    await this.qtyPlus.click();
    const totalQuantity = await this.qtyInput.inputValue();
    const cartQuantity = await this.cartQuantity.inputValue();
    await expect(totalQuantity).toEqual(cartQuantity);

  }


  async quantitySelectorDisableFunctionality() {

    await this.hpProductTitle.first().waitFor();
    await this.hpProductTitle.nth(3).click();

    await this.pdpatcButton.click();

    if (await this.cartLink.isVisible()) {
      await this.cartLink.click();
    }

    while (true) {

      const plusButton = this.page.locator(
        '//tr//button[@name="plus"]'
      ).first();

      // Check the CURRENT DOM element
      const isDisabled = await plusButton.evaluate(
        el => el.classList.contains('disabled')
      );

      if (isDisabled) {
        break;
      }

      // Click current enabled button
      await plusButton.click();

      // Allow cart DOM update to complete
      await this.page.waitForTimeout(500);
    }

    // Final verification
    await expect(
      this.page.locator('//tr//button[@name="plus"]').first()
    ).toHaveClass(/disabled/);
  }

  async closePreviewBar() {
    await this.hidebar.click();
    await this.cartLink.click();
  }

  async checkoutValidation() {
    await this.checkoutButton.click();
    await this.gokwikPopup.waitFor();
    await expect(this.gokwikPopup).toBeVisible();
  }

  async closecart() {
    await this.closeCart.waitFor();
    await this.closeCart.click();
  }
  async emptycartVisibility() {
    await this.cartLink.click();
    await expect(this.emptyCartMessage).toBeVisible();
  }
  async continueShopping() {
    await this.cartLink.click();
    await this.emptyCartContinueShopping.waitFor();
    await this.emptyCartContinueShopping.click();
    await expect(this.page).toHaveURL(
      'https://lovebeautyandplanet.in/collections/all-products'
    );
    await expect(this.emptyCartWithoutQuantity).not.toBeVisible();
  }
  async expectEmptyCartAndGoToCollections() {
    await expect(this.emptyCartWrapper).toBeVisible();
    await this.emptyCartContinueShopping.click();
  }

  async expectHasAtLeastNLineItems(n) {
    await expect(this.cartLineItems).toHaveCount(n);
  }

  async expectTotalPriceVisible() {
    await expect(this.cartTotalPrice).toBeVisible();
  }

  async expectFreebiePresent() {
    await expect(this.freebieRow.first()).toBeVisible();
  }
  async addToCart() {
    await expect(this.pdpproductTitle).toBeVisible();

    const productTitle = await this.pdpproductTitle.textContent();

    await this.pdpatcButton.click();
    return productTitle;
  }
  async addFirstProductToCart() {
    var productTitle = await this.addToCart();
    await this.page.waitForTimeout(5000);

    // Wait for cart product
    await this.productTitle.first().waitFor();
    // Get first cart product
    var cartTitle = await this.productTitle.first().textContent();
    // Take few words from PDP title
    var expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');
    // Validate cart contains similar text
    expect(cartTitle.toLowerCase()).toContain(expectedText);
    await this.closecart();
  }
  async addSecondProductToCart() {
    var productTitle = await this.addToCart();
    await this.page.waitForTimeout(5000);
    // if (await this.cartLink.isVisible()) {
    //   await this.cartLink.click();
    // }


    // Wait for cart product
    await this.productTitle.first().waitFor();
    // Get first cart product
    var cartTitle = await this.productTitle.first().textContent();
    // Take few words from PDP title
    var expectedText = productTitle
      .toLowerCase()
      .trim()
      .split(' ')
      .slice(0, 5)
      .join(' ');
    // Validate cart contains similar text
    expect(cartTitle.toLowerCase()).toContain(expectedText);
    await this.closecart();
    await expect(this.filledCartWithQuantity).toHaveText('2');
  }
  async cartQunatitySelectorFunctionality(page) {
    await this.hpProductTitle.first().waitFor();
    await this.hpProductTitle.nth(3).click();
    await this.pdpatcButton.click();
    if (await this.cartLink.isVisible()) {
      await this.cartLink.click();
    }
    // Initial price
    const initialPrice = parseInt(
      (await this.cartTotalPrice.textContent()).replace(/[^\d]/g, '')
    );

    // Increase quantity 3 times
    await this.quantityplus.click();
    await this.page.waitForTimeout(2000);
    await this.quantityplus.click();
    await this.page.waitForTimeout(2000);
    await this.quantityplus.click();

    const increasedPrice = parseInt(
      (await this.cartTotalPrice.textContent()).replace(/[^\d]/g, '')
    );

    // Verify + button worked
    expect(increasedPrice).toBeGreaterThan(initialPrice);
    await page.waitForTimeout(5000);
    // Decrease quantity once
    await this.quantityminus.click();
    // Wait for price to update
    //await this.quantityminus.click();

    const updatedPrice = parseInt(
      (await this.cartTotalPrice.textContent()).replace(/[^\d]/g, '')
    );

    // Verify - button worked
    //expect(updatedPrice).toBeLessThan(increasedPrice);

    // Verify price is still greater than initial
    expect(updatedPrice).toBeGreaterThan(initialPrice);
  }

  async totalPriceCalculation() {

    await this.hpProductTitle.first().waitFor();
    await this.hpProductTitle.nth(3).click();
    await this.productPrice.first().waitFor({
      state: 'visible'
    });

    const productPrice = parseInt(
      (await this.productPrice.first().textContent())
        .replace(/[^\d]/g, '')
    );

    await this.pdpatcButton.click();
    // AWS EC2 IPs are commonly flagged as bots/datacenter traffic by Cloudflare.

    await this.closecart();
    await this.qtyPlus.click();
    await this.qtyPlus.click();
    //await this.qtyPlus.click();



    // await pdp.increaseQuantity();
    console.log(productPrice);


    await expect.poll(async () => {
      const text = await this.cartTotalPrice.textContent();
      return text?.trim();
    }, {
      timeout: 10000
    }).not.toBe('');
    await expect.poll(async () => {
      return parseInt(
        (await this.cartTotalPrice.textContent()).replace(/[^\d]/g, '')
      );
    }, { timeout: 10000 }).toBeGreaterThanOrEqual(productPrice);
    await this.cartTotalPrice.first().waitFor({
      state: 'visible'
    });

    const totalPrice = parseInt(
      (await this.cartTotalPrice.textContent())
        .replace(/[^\d]/g, '')
    );
    // console.log(totalPrice);

    expect(totalPrice).toBeGreaterThanOrEqual(productPrice);
  }

  async freebieVisibility() {
    await this.hpProductTitle.first().waitFor();
    await this.hpProductTitle.first().click();
    await this.pdpatcButton.click();
    // if(await this.qtyPlus.isVisible()){
    // await this.qtyPlus.click();
    // }
    // if(await this.cartLink.isVisible()){
    // await this.cartLink.click();
    // await this.quantityplus.click();
    // }
    await this.quantityplus.click();
    await this.quantityplus.click();
    await this.freebie.waitFor({
      state: 'visible',
      timeout: 30000
    });

    await expect(this.freebie).toBeVisible();
  }
}

