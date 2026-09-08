import { test, expect } from '@playwright/test';

exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;

    // Global / header
    this.pageUrlMarker = page.locator('[data-page-url-test-id]');
    this.pageTitleMarker = page.locator('[data-page-title-test-id]');
    //X cookie popup selectors need to be added I have hardcoded for now
    this.cookieAcceptPopup = page.locator("//button[@id='onetrust-accept-btn-handler']");
    //x change the logo selector I have hardcoded for now
    this.logo = page.locator('[class="header__heading-logo-wrapper"]');
    this.logoMobile = page.locator('[class="container-fluid logo-strip"]');
    //mega menu locators need to be added 
    this.megaMenuShop = page.locator('(//a[contains(text(),"Shop")])[1]');
    this.megaMenuAllCollectionLinks = page.locator('//a[@class="menu-link mega-menu-link"]');
    this.megaMenuOffers = page.locator("(//a[contains(text(),'Offers')])[1]");
    this.megaMenuOffersDropdown = page.locator("//a[contains(text(),'Offers')]/following-sibling::ul//child::a[@class='menu-link mega-menu-link']");
    this.accountLink = page.locator('[class="header__icon header__icon--account link focus-inset"]');

    //hamburger menu
    this.hamburgerMenu = page.locator('[id="openMenu"]');
    this.hamburgerMenuSubOptions = page.locator("//span[@class='sub-menu-span']");
    this.offersLinkMobile = page.locator("(//a[contains(text(),'Offers')])[2]");
    this.offersDropdownOptionsMobile = page.locator("(//a[contains(text(),'Offers')])[2]/parent::li/child::ul//span");
    this.aboutUsMobile = page.locator("(//a[contains(text(),'About Us')])[2]");
    this.knowYourIngredientsMobile = page.locator("(//a[contains(text(),'Know')])[2]");
    this.beautyArchivesMobile = page.locator("(//a[contains(text(),'Beauty')])[2]");
    this.supportMobile = page.locator("(//a[contains(text(),'Support')])[2]");
    this.loginMobile = page.locator("(//a[contains(text(),'Login')])[2]");

    //x Seacrh link locator needs to be added i have hardcoced now
    this.searchTexfield = page.locator("//div[@class='header__icons header__icons--localization header-localization']//input");
    this.searchSuggestionBox = page.locator("//div[@class='wizzy-autocomplete-suggestions']");
    this.SearchTextFieldMobile = page.locator("[id='mob-search-mob']");
    this.cartLink = page.locator('[class="header__icon header__icon--cart link focus-inset"]');
    this.announcementBarLink = page.locator('[class="announcement"]');

    // Primary nav (top-level)
    this.navAboutUs = page.locator('//div[@class="nav d-none d-lg-block"]//a[contains(text(),"About Us")]');
    this.navIngredients = page.locator('//div[@class="nav d-none d-lg-block"]//a[contains(text(),"Know Your Ingredients")]');
    this.navBeautyArchives = page.locator('//div[@class="nav d-none d-lg-block"]//a[contains(text(),"Beauty Archives")]');
    //x Support link locator needs to be added i have hardcoced now
    this.navSupport = page.locator('//div[@class="nav d-none d-lg-block"]//a[contains(text(),"Support")]');
    this.navContactUs = page.locator("[data-megamenu-link-test-id='index-header-custom-menu-1-menu-link-7']");

    //x Hero banner link locator needs to be added i have hardcoded for now
    this.heroBannerLink = page.locator('[data-hero-banner-link-test-id]').first();
    this.heroBanner = page.locator("//section[@class='home-banner']");

    // Home collection tabs + product cards
    //x product card and ATC selectors need to be added I have hardcoded for now
    this.productTitle = page.locator("//section[@class='home-products']//p[@class='h-pro-card-cnt-description']//a");
    this.addToCartButton = page.locator("//div[@class='product-form__buttons']");
    this.viewAllLink = page.locator('//section[@class="home-products"]//a[contains(text(),"View all")]');
    this.collectionTabs = page.locator('//ul[@class="home-pro-tabs"]//li');
    this.productCards = page.locator('[data-product-card-test-id]');
    this.firstProductLink = page.locator('//p[@class="h-pro-card-cnt-description"]//a').first();
    this.firstAtcButton = page.locator('[class="product-form__buttons"]').first();
    this.atcToast = page.locator('[data-add-to-cart-toast-test-id]').first();
    this.viewCartDrawerButton = page.locator('[data-view-cart-drawer-test-id]').first();

    this.shopByConcernLinks = page.locator("//div[@class='col-4 col-xl-2']//p");

    // Story / discover
    this.discoverOurStoryLink = page.locator('(//h3[contains(text(),"Discover our story")]/ancestor::div//a)[1]');
    this.discoverOurStoryLinkMobile = page.locator('(//h3[contains(text(),"Discover our story")]/ancestor::section//div[@class="hos-cont"])[2]');
    //h3[contains(text(),'Discover our story')]/ancestor::section//div[@class="hos-cont"])[2]
    //x Discover beauty bill link locator needs to be added I have hardcoded for now
    this.discoverBeautyBill = page.locator("(//h3[contains(text(),'Discover Beauty Bill')]//ancestor::section//a[@href='/pages/beauty-bill'])[1]");
    this.discoverBeautyBillMobile = page.locator('(//a[@href="/pages/beauty-bill"])[2]');
    // Ingredients banner
    this.knowYourIngredientsLink = page.locator('(//a[@href="/pages/ingredients"])[4]').first();
    this.knowYourIngredientsLinkMobile = page.locator('(//a[@href="/pages/ingredients"])[5]').first();


    // In the spotlight section presence
    //X hardcoded the in the spotlight section locator and add to cart button locator and product title locator as they are not having any test id or unique attribute
    this.inTheSpotlightSection = page.locator('[data-in-the-spotlight-slide-test-id]').first();
    this.inTheSpotLightAddToCartButton = page.locator("//div[text()='in the spotlight']//parent::div[@class='container']//descendant::div[@class='owl-item active']//button[@name='add']");
    this.inTheSpotLightProductTitle = page.locator('[class="h-spotlight--name-review"]');
    this.inTheSpotLightToastMessage = page.locator('[data-view-cart-drawer-test-id="index--template--19179790860458__home-product-view-cart-drawer-1"]');
    this.inTheSpotLightNotifyMeButton = page.locator("//div[contains(text(),'in the spotlight')]/parent::div//button[@id='notify-me-btn']").first();
    this.inTheSpotLightNotifyPopup = page.locator("//div[@class='notify-modal-box']");

    // What sets us apart section presence
    this.whatSetsUsApartSection = page.locator('//h2[contains(text(),"what sets us apart")]');
    this.whatSetsUsApartCard = page.locator('//h2[contains(text(),"what sets us apart")]/parent::div//div[@class="h-apart-card-img"]');
    this.whatSetsUsApartContent = page.locator('//h2[contains(text(),"what sets us apart")]/parent::div/descendant::div[@class="h-apart-card-img"]/following-sibling::span');

    //whats trending on social
    this.trendingOnSocialSection = page.locator("//div[contains(text(),'wha')]");

    // Reels / Customer Love presence (best-effort)
    this.customerLoveSection = page.locator('//h2[contains(text(),"Customer Love")]').first();

    //x Discover our story banner locator needs to be added I have hardcoded for now
    this.discoverOurStoryBanner = page.locator("(//a[@data-discover-our-story-link-test-id='index--template--19179790860458__story-home-discover-our-story-link-1'])[1]");
    this.discoverOurStoryBannerMobile = page.locator('(//a[@data-discover-our-story-link-test-id="index--template--19179790860458__story-home-discover-our-story-link-1"])[2]');
    //Natural igresints banner

    // Beauty archives (home)
    //x Beauty archives selectors need to be added I have hardcoded for now
    this.beautyArchivesViewAll = page.locator("//h2[contains(text(),'beauty archives')]/parent::div[@class='home-page--blogs-container h-beauty-desk']//a");
    this.beautyArchivesViewAllMobile = page.locator('//h2[contains(text(),"beauty archives")]/ancestor::section//a[@class="home-common-btn d-md-none"]');
    this.beautyArchivesFirstArticle = page.locator('(//a[@href="/blogs/hair/post-festive-season-hair-care-tips"])[1]');

    // Newsletter
    this.newsletterEmail = page.locator('[data-newsletter-email-input-test-id]');
    this.newsletterConsent = page.locator('[data-newsletter-consent-checkbox-test-id]');
    this.newsletterSubmit = page.locator('[data-newsletter-submit-btn-test-id]');
    this.newsletterSuccess = page.locator('[id^="Newsletter-success--"]');

    // Footer
    this.footerProductLinks = page.locator("//p[contains(text(),'Product Links')]//parent::div//a");
    this.footerProductLinksMobile = page.locator('//button[contains(text(),"Product Links")]/ancestor::div[@class="accordion-item"]//a');
    this.footerConcernLinks = page.locator("//p[contains(text(),'Concerns')]//parent::div//a");
    this.footerConcernLinksMobile = page.locator('//button[contains(text(),"Concerns")]/ancestor::div[@class="accordion-item"]//a');
    this.footerQuickLinks = page.locator("//p[contains(text(),'Quick links')]//parent::div//a");
    this.footerQuickLinksMobile = page.locator('//button[contains(text(),"Quick")]/ancestor::div[@class="accordion-item"]//a');
    this.footerLegalLinks = page.locator("//p[contains(text(),'legal')]//parent::div//a");
    this.footerLegalLinksMobile = page.locator('//button[contains(text(),"legal")]/ancestor::div[@class="accordion-item"]//a');
    this.facebookLink = page.locator("//div[@class='footer__blocks-wrapper desktop_only ft-blwr-desk row']//a[@href='https://www.facebook.com/lovebeautyandplanetin']");
    this.facebookLinkMobile = page.locator("(//a[@data-social-link-test-id='index-social-icons-1-facebook-1'])[1]");
    this.instagramLinkMobile = page.locator("(//a[@data-social-link-test-id='index-social-icons-1-instagram-1'])[1]");
    this.instagramLink = page.locator("//div[@class='footer__blocks-wrapper desktop_only ft-blwr-desk row']//a[@href='https://www.instagram.com/lovebeautyandplanet_in/']");
    this.youtubeLinkMobile = page.locator("(//a[@data-social-link-test-id='index-social-icons-1-youtube-1'])[1]");
    this.youtubeLink = page.locator("//div[@class='footer__blocks-wrapper desktop_only ft-blwr-desk row']//a[@href='https://www.youtube.com/channel/UCUFcrEf1Wb1164G6O2_LoyA']");
    this.cautionNotice = page.locator('[class="wide-container half-gutter section-spacing border-top-checkout cstcontainer"]');
    //cart drawer
    this.cartproductTitle = page.locator('//a[contains(@class,"cart-item__name h4 break")]');
    this.cookieBanner = page.locator('[id="onetrust-banner-sdk"]');
    this.cookieOk = page.locator('[id="onetrust-accept-btn-handler"]');
    //footer mobile
    this.productLinksMobile = page.locator("//button[contains(text(),'Product Links')]");
    this.concernLinksMobile = page.locator("//button[contains(text(),'Concerns')]");
    this.quickLinksMobile = page.locator("//button[contains(text(),'Quick')]");
    this.legalLinksMobile = page.locator("//button[contains(text(),'legal')]");
    this.circularBannerMobile = page.locator("[data-hero-before-link-test-id]");
    this.closeCart = page.locator('(//button[@class="drawer__close"])[1]');
    this.cartCount = page.locator('//div[@class="cart-count-bubble"]//span[@aria-hidden="true"]');
    this.cartHeading = page.locator('[class="drawer__heading cart-heading"]');
    this.cookieAccepgt = page.locator('[id="onetrust-accept-btn-handler"]');
    this.cookieNotice = page.locator("//a[contains(text(),' cookie notice.')]");
    this.shopallLinks = page.locator('[class="menu-link mega-menu-link"]');
    this.haircareLink = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Hair Care")]');
    this.haircareSubLinks = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Hair Care")]/following-sibling::ul//a');
    this.bodycareLink = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Body Care")]');
    this.bodycareSubLinks = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Body Care")]/following-sibling::ul//a');
    this.exploreByIngredients = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Explore")]');
    this.exploreByIngredientsSubLinks = page.locator('//ul[@class="mega-menu mega-menu--multiLevel "]//a[contains(text(),"Explore")]/following-sibling::ul//a');
    this.trendingSearches = page.locator('//h2[contains(text(),"Trending Searches")]/parent::div/child::div//span[@class="wizzy-autocomplete-label"]');
    this.topCategoriesSearches = page.locator('//h2[contains(text(),"Top")]/parent::div/child::div//span[@class="wizzy-autocomplete-label"]')
    //this.productTitle = page.locator('//div[@class="h-pro-card-cnt"]//p');
    this.heroBanner = page.locator('//section[@class="home-banner"]//div[contains(@id,"home-banner-slide-")]');
    this.heroBannerSlider = page.locator('//section[@class="home-banner"]//button[contains(@class,"owl-dot")]');
    this.reelProductTitle = page.locator('[class="reelUp_slider_title"]');
    this.reelAddToCart = page.locator('[class="reelUp_playlist_button_text"]');
    this.reelMoreInfo = page.locator('[class="reelUp_custom_action reelUp_modal_product_info_btn"]');
    this.reelPopupATC = page.locator('(//p[@class="reelUp_custom_btn_text"])[2]');
    this.reelPopupCart = page.locator('[class="reelUp_custom_action reelUp_modal_cart_btn"]');
    this.viewcartButton = page.locator('(//button[@id="view-cart-drawer"])[1]');
    this.pdpProductTitle = page.locator('//div[@class="product__title"]//h1');
    this.reelYoumayaslolike = page.locator('[class="reelUp_grid_product_title"]');
    this.reelPopupCloseButton = page.locator('(//button[@class="reelUp_video_preview_action"])[1]');
    this.reelPopupTitle = page.locator('[class="reelUp_modal_product_title"]');
    this.whatsappIcon = page.locator('[class="WhatsAppButton__root"]');
    this.whatappPopup= page.locator('[id="wa-consent-popup"]');
    this.whatsappAgree = page.locator('[id="wa-agree-btn"]');
    this.notifyMeButton = page.locator('[id="notify-me-btn"]').first();
    this.notifyMeName = page.locator('[id="notify-name"]');
    this.notifyMePhone = page.locator('[id="notify-phone"]');
    this.notifyMeSubmit = page.locator('[class="notify-submit-btn"]');
    this.productPrice = page.locator('[class="pro-variant-price active"]').nth(2);
    this.variantSwatch = page.locator('//label[contains(text(),"50 ml")]');
    this.productcardReview = page.locator('[class="custom-review--rating-conatiner"]').first();
    this.productCradCategory = page.locator('//div[@class="h-pro-card-cnt"]//p').first();
    this.productCardTitle = page.locator('[class="h-pro-card-cnt-description"]').first();
    this.productCardVariant = page.locator('[class="h-pro-quant hm-pro-variant"]').first();
    this.productCardPrice = page.locator('[class="h-pro-price"]').first();
    this.productCardATC = page.locator('[class="product-form__buttons"]').first();
    this.quantityPlus = page.locator('//quantity-input[@class="quantity cart-quantity  "]//button[@name="plus"]').first();
    this.quantityMinus = page.locator('//quantity-input[@class="quantity cart-quantity  "]//button[@name="minus"]').first();
    this.beautyCardImage = page.locator('[class="h-beauty-card-img"]').first();
    this.beautyCardDescription = page.locator('//div[@class="h-beauty-card-cnt"]//h3').first();
    this.beautyCardDate = page.locator('//div[@class="h-beauty-card-cnt"]//div').first();
    this.blogNextArrow = page.locator('//section[@class="home-page--custom-blogs home-beautyedits"]//button[@class="owl-next"]');
    this.blogPrevArrow = page.locator('//section[@class="home-page--custom-blogs home-beautyedits"]//button[@class="owl-prev"]');
    this.blogSliderDot = page.locator('//section[@class="home-page--custom-blogs home-beautyedits"]//button[@class="owl-dot"]').first();
    this.contactUs = page.locator('(//a[contains(text(),"Contact Us")])[2]');
    this.customerService = page.locator('[class="detail-desk"]');
    this.customerServiceMobile = page.locator('[class="mob-contact-detail"]');
    this.contactUsName = page.locator('[autocomplete="First Name"]');
    this.contactUsLastName = page.locator('[id="lastname"]');
    this.contactUsEmail = page.locator('[id="ContactForm-email"]');
    this.contactUsPhone = page.locator('[id="ContactForm-phone"]');
    this.contactUsMessage = page.locator('[id="ContactForm-body"]');
    this.contactUsCheckbox = page.locator('//div[@class="contact-form"]//input[@type="checkbox"]');
    this.contactUsSubmit = page.locator('//div[@class="contact__button form-submit"]//button');
    this.contactUsOther = page.locator('[for="other"]');
    this.contactUsSuccess = page.locator('[class="form-status form-status-list form__message"]');
    this.tarckOrder = page.locator('(//a[@class="track-btn"])[1]');
    this.tarckOrderMobile = page.locator('(//a[@class="track-btn"])[2]');
    this.quicklinks = page.locator('//button[contains(text(),"Quick links")]');
    this.contactUsMobile = page.locator('//button[contains(text(),"Quick links")]/ancestor::div[@class="accordion-item"]//a');
    this.contactUsCautionNotice = page.locator('[class="rich-text__blocks left"]');
    this.firstNameError = page.locator('[id="first-name-error"]');
    this.emailError = page.locator('[id="email-error"]');
    this.concernError = page.locator('[id="concern-error"]');
    this.beautyArchives = page.locator('(//a[contains(text(),"Beauty Archives")])[1]');
    this.beautyArchivesMobile = page.locator('(//a[contains(text(),"Beauty Archives")])[2]');
    this.blogTitle = page.locator('[class="title"]');
    this.blogProductTitle = page.locator('//div[@class="h-pro-card-cnt buy-detail"]//p');
    this.blogDetailsPage = page.locator('[class="line-1 h1"]');
    this.blogFaq = page.locator('[class="faq"]');
    this.blogAuthor = page.locator('[class="author_description_container"]');
    this.featuredBlog = page.locator('[class="blog my-featured-blog color-scheme-1 gradient"]');
    this.olderPost = page.locator('(//div[@class="other-products__product__arrow"])[1]');
    this.newerPost = page.locator('(//div[@class="other-products__product__arrow"])[2]');
    this.backToHair = page.locator('//a[contains(text(),"Back to Hair")]');
    this.blogshare = page.locator('[class="share_btn_heading_img"]');
    this.blogSocial = page.locator('//div[@class="social_icon_container"]/child::div');
    this.blogWhythisarticle = page.locator('//table[@class="content_table"]//a');
    this.blogFAQDropDown = page.locator('[class="textContent accordian_que"]');
    this.blogFAQDropDownAnswer = page.locator('[class="accordian_ans"]');
    this.ATCSuccessMessage = page.locator('[class="add-to-cart-pop active"]');
    this.blogATCButton = page.locator('[class="product-form__submit button button--full-width button--primary"]');
    this.readStoriesTitle = page.locator('(//h3[@class="title card__heading h2"]//span)[3]');
    this.blogDropdown = page.locator('[class="header__menu-item list-menu__item link focus-inset"]');
    this.blogDropdownOptions = page.locator('[class="header__submenu list-menu list-menu--disclosure color- gradient caption-large motion-reduce global-settings-popup"]');
    this.blogHair = page.locator('[id="HeaderMenu-hair-all-hair"]');
    this.readByCategory = page.locator('//div[@class="category-btn"]//button');
    this.viewAllBlog = page.locator('[class="main-btn blogs-show-more mt-4 mt-sm-0"]');
    this.sortOption = page.locator('[class="blog-selected-value"]').first();
    this.sortByOldest = page.locator('//ul[@class="active"]//li[@data-value="oldest"]');
    this.blogDate = page.locator('//div[@class="date-time"]//span');
    this.customerlovePrev = page.locator('//h2[contains(text(),"Customer Love")]/parent::div//button[@class="owl-prev"]');
    this.customrtloveNext = page.locator('//h2[contains(text(),"Customer Love")]/parent::div//button[@class="owl-next"]');
    this.notifyMeName = page.locator('[id="notify-name"]');
    this.notifyMePhone = page.locator('[id="notify-phone"]');
    this.notifyMeSubmit = page.locator('[class="notify-submit-btn"]');
    this.knowYourIngredinetsLink = page.locator('(//a[contains(text(),"Know Your Ingredients")])[1]');
    this.knowYourIngredinetsLinkMobile = page.locator('(//a[contains(text(),"Know Your Ingredients")])[2]');

    this.findngredients = page.locator('//a[@class="detail"]//h3');
    this.accountLink = page.locator('[class="header__icon header__icon--account link focus-inset"]');
    this.emailTextField = page.locator('[id="CustomerEmail"]');
    this.passwordTextFiled = page.locator('[id="CustomerPassword"]');
    this.loginButton = page.locator('[class="login-btn"]');
    this.viewaddress = page.locator('//a[contains(text(),"View addresses")]');
    this.addAddress = page.locator('[class="add-address-btn"]');
    this.firstName = page.locator('[id="AddressFirstNameNew"]');
    this.companyName = page.locator('[id="AddressCompanyNew"]');
    this.cityName = page.locator('[id="AddressCityNew"]');
    this.province = page.locator('[id="AddressProvinceNew"]');
    this.pincode = page.locator('[id="AddressZipNew"]');
    this.phoneNumber = page.locator('[id="AddressPhoneNew"]');
    this.defaultAddressCheckbox = page.locator('[id="address_default_address_new"]');
    this.addButton = page.locator('//button[contains(text(),"Add address")]');
    this.defaultAddress = page.locator('//h2[contains(text(),"Default")]');
    this.deleteButton = page.locator('[data-confirm-message="Are you sure you wish to delete this address?"]');
    this.returnToAccount = page.locator('//a[contains(text(),"return to account details")]');
    this.whatsappagree=page.locator('[id="wa-agree-btn"]');
  }

  async quantitySelectorunctionality() {
        await this.addToCartButton.first().click();
        await expect(this.cartCount).toHaveText('1');
        await this.quantityPlus.click();
        await expect(this.cartCount).toHaveText('2');
        await this.quantityMinus.click();
        await expect(this.cartCount).toHaveText('1');

  }
  async addAddressFunctionality(page) {
    await this.viewaddress.click();
    await this.addAddress.click();
    await this.firstName.fill('shravan');
    await this.companyName.fill('autumn');
    await this.cityName.fill('Bangalore');
    await this.province.selectOption({ label: 'Karnataka' });
    await this.pincode.fill('560037');
    await this.phoneNumber.fill('9898987676');
    await this.defaultAddressCheckbox.click();
    await this.addButton.click();
    await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/account/addresses');
    await this.deleteButton.nth(0).click();
    page.on('dialog', async dialog => {
      await dialog.accept();
      await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/account/addresses');
      await this.returnToAccount.click();
      await this.logoutButton.click();
      await this.accountLink.click();
      await expect(page).toHaveURL("https://lovebeautyandplanet.in/account");


    });
  }
  async loginFunctionality(page) {
    await this.accountLink.click();
    await this.emailTextField.fill("tester1998@gmail.com");
    await this.passwordTextFiled.fill("Shravan@1");
    await this.loginButton.click();
    await this.accountLink.click();
  }

  async knowYourIngredientsRedirections(page) {
    // Open Beauty Archives
    if (await this.knowYourIngredinetsLink.isVisible()) {
      await this.knowYourIngredinetsLink.click();
    }
    // Open Beauty Archives from mobile menu
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.knowYourIngredinetsLinkMobile.click();
    }
    const count = await this.findngredients.count();

    for (let i = 0; i < count; i++) {

      // Store the text before clicking
      const ingredientText = (
        await this.findngredients.nth(i).textContent()
      ).trim();

      console.log(`Selected ingredient: ${ingredientText}`);

      // Get the first word and remove plural 's'
      const ingredientUrlText = ingredientText
        .toLowerCase()
        .split(/\s+/)[0]
        .replace(/s$/, '');

      // Click ingredient
      await this.findngredients.nth(i).click();

      // Get actual URL
      const currentUrl = page.url().toLowerCase();

      console.log(`Expected text: ${ingredientUrlText}`);
      console.log(`Current URL: ${currentUrl}`);

      // Verify ingredient text is present in URL
      expect(currentUrl).toContain(ingredientUrlText);

      // Go back
      await page.goBack();

    }
  }

  async sortByDate(page) {

    // Open Beauty Archives
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    // Open Beauty Archives from mobile menu
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }

    // Select Sort option
    await this.sortOption.click();

    // Select Oldest
    await this.sortByOldest.click();

    // Get only the first 24 blog dates
    const dates = (await this.blogDate.allTextContents()).slice(0, 24);

    console.log('First 24 blog dates:', dates);

    // Convert DD/MM/YY dates to JavaScript Date objects
    const parsedDates = dates.map(date => {
      const [day, month, year] = date.trim().split('/');

      return new Date(`20${year}-${month}-${day}`);
    });

    console.log(
      'Parsed dates:',
      parsedDates.map(date => date.toLocaleDateString())
    );

    // Verify dates are sorted from oldest to newest
    for (let i = 0; i < parsedDates.length - 1; i++) {

      expect(
        parsedDates[i].getTime(),
        `Date at position ${i + 1} should be older than or equal to date at position ${i + 2}`
      ).toBeLessThanOrEqual(
        parsedDates[i + 1].getTime()
      );
    }
  }
  async readByCategoryFunctionality(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    const expectedUrls = [
      'https://lovebeautyandplanet.in/blogs/hair',
      'https://lovebeautyandplanet.in/blogs/body',
      'https://lovebeautyandplanet.in/blogs/ingredients'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu

      await this.readByCategory.nth(i).click();
      await this.viewAllBlog.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      await page.goBack();
    }

  }
  async blogdropdownfunctionality() {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    for (let i = 0; i < await this.blogDropdown.count(); i++) {
      await this.blogDropdown.nth(i).click();
      await expect(this.blogDropdownOptions.nth(i)).toBeVisible();
    }
    await this.blogDropdown.nth(0).click();
    await this.blogHair.click();
    await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/blogs/hair');
  }
  async readStoriesFunctionality() {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await this.blogTitle.nth(1).click();
    const readStoriesTitle = await this.readStoriesTitle.textContent();
    await this.readStoriesTitle.click();
    const blogTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).toContain(readStoriesTitle.toLowerCase());
  }
  async blogPageATC() {

    if (await this.beautyArchives.isVisible()) {

      // Desktop
      await this.beautyArchives.click();

    } else if (await this.hamburgerMenu.isVisible()) {

      // Mobile
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();

    }

    await this.blogTitle.nth(1).waitFor();
    await this.blogTitle.nth(1).click();

    const productTitle =
      await this.blogProductTitle.nth(0).textContent();

    await this.blogATCButton.first().click();

    await this.viewcartButton.click();
    await this.page.waitForTimeout(5000);

    const cartTitle =
      await this.cartproductTitle.first().textContent();

    expect(cartTitle.toLowerCase())
      .toContain(productTitle.toLowerCase());
  }
  async blogFAQFunctionality(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await this.blogTitle.nth(1).click();
    for (let i = 0; i < await this.blogFAQDropDown.count(); i++) {
      await this.blogFAQDropDown.nth(i).click();
      await expect(this.blogFAQDropDownAnswer.nth(i)).toBeVisible();

    }
  }
  async whyThisArticle(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await this.blogTitle.nth(1).click();
    for (let i = 0; i < 2; i++) {
      await this.blogWhythisarticle.nth(i).click();
      await expect.poll(async () => {
        return await page.evaluate(() => window.scrollY);
      }).toBeGreaterThan(0);
    }
  }
  async blogDetailsShare(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await this.blogTitle.nth(1).click();
    await this.blogshare.click();

    const expectedUrls = [
      'https://www.facebook.com/lovebeautyandplanetin',
      'https://x.com/',
      'https://www.linkedin.com/',
      'https://api.whatsapp.com/send/?phone=918897526143&text=Hey%2C+Let%E2%80%99s+chat+about+lovebeautyandplanet.&type=phone_number&app_absent=0'
    ];

    const count = await this.blogSocial.count();

    for (let i = 0; i < count; i++) {

      // Wait for the new tab to open
      const newPagePromise = page.context().waitForEvent('page');

      await this.blogSocial.nth(i).click();

      const newPage = await newPagePromise;

      // Wait for the new tab to load
      await newPage.waitForLoadState('domcontentloaded');

      // Verify URL
      await expect(newPage).toHaveURL(expectedUrls[i]);

      // Close the new tab
      await newPage.close();
    }

  }
  async blogDetailsPagePagination(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await this.blogTitle.nth(1).click();
    const blogTitle = await this.blogDetailsPage.textContent();
    await this.newerPost.click();
    const newTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).not.toContain(newTitle.toLowerCase());
    await this.olderPost.click();
    const oldTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).toContain(oldTitle.toLowerCase());
    await this.backToHair.click();
    await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/blogs/hair');
  }
  async blogDetailsPageDetails(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    }
    else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    const blog = await this.blogTitle.nth(1).textContent();
    await this.blogTitle.nth(1).click();
    const blogTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).toContain(blog.toLowerCase());
    await expect(this.blogFaq).toBeVisible();
    await expect(this.blogAuthor).toBeVisible();
    await expect(this.featuredBlog).toBeVisible();
  }






  async contactUsFunctionality(page) {

    await this.contactUs.click();
    await expect(this.customerService).toBeVisible();
    await expect(this.contactUsCautionNotice).toBeVisible();
    await this.contactUsName.fill('test');
    await this.contactUsLastName.fill('user');
    await this.contactUsEmail.fill('testerfromautumn@example.com');
    await this.contactUsPhone.fill('9898767654');
    await this.contactUsMessage.fill('this is for testing purpose please ignore <%^&*5678t78ghj>');
    await this.contactUsOther.click();
    await this.contactUsCheckbox.click();
    await this.contactUsSubmit.click();
    await expect(this.contactUsSuccess).toBeVisible();
    await this.tarckOrder.click();
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/track-order");
  }
  async contactUsErrorFunctionality(page) {

    await this.contactUs.click();
    await this.contactUsEmail.fill('testerfromautumn');
    await this.contactUsPhone.fill('9898767');
    await this.contactUsSubmit.click();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.emailError).toBeVisible();
    await expect(this.concernError).toBeVisible();
  }
  async contactUsErrorFunctionalityMobile(page) {
    await this.quicklinks.click();
    await this.contactUsMobile.nth(3).click();
    await this.contactUsEmail.fill('testerfromautumn');
    await this.contactUsPhone.fill('9898767');
    await this.contactUsSubmit.click();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.emailError).toBeVisible();
    await expect(this.concernError).toBeVisible();
  }
  async contactUsFunctionalityMobile(page) {
    await this.quicklinks.click();
    await this.contactUsMobile.nth(3).click();
    // await this.page.goto('https://lovebeautyandplanet.in/pages/contact-us');
    await expect(this.customerServiceMobile).toBeVisible();
    await expect(this.contactUsCautionNotice).toBeVisible();
    await this.contactUsName.fill('test');
    await this.contactUsLastName.fill('user');
    await this.contactUsEmail.fill('testerfromautumn@example.com');
    await this.contactUsPhone.fill('9898767654');
    await this.contactUsMessage.fill('this is for testing purpose please ignore <%^&*5678t78ghj>');
    await this.contactUsOther.click();
    await this.contactUsCheckbox.click();
    await this.contactUsSubmit.click();
    await expect(this.contactUsSuccess).toBeVisible();
    await this.tarckOrderMobile.click();
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/track-order");
  }








  async beautyCardDetailsVerification(page) {
    await this.beautyCardImage.scrollIntoViewIfNeeded();
    await expect(this.beautyCardImage).toBeVisible();
    await expect(this.beautyCardDescription).toBeVisible();
    await expect(this.beautyCardDate).toBeVisible();
    if (await this.blogNextArrow.isVisible()) {
      await this.blogNextArrow.click();
      await this.blogPrevArrow.click();
    }
    if (await this.blogSliderDot.isVisible()) {
      await this.blogSliderDot.click();
    }
  }



  async productCardDetailsVerification(page) {
    await this.productcardReview.scrollIntoViewIfNeeded();
    await expect(this.productcardReview).toBeVisible();
    await expect(this.productCradCategory).toBeVisible();
    await expect(this.productCardTitle).toBeVisible();
    await expect(this.productCardVariant).toBeVisible();
    await expect(this.productCardPrice).toBeVisible();
    await this.productCardATC.click();
    await this.quantityPlus.click();
    await this.quantityMinus.click();
  }

  async variantswtachFunctionality(page) {
    await this.productPrice.scrollIntoViewIfNeeded();

    const initialPriceText = await this.productPrice.textContent();
    const initialPrice = parseInt(initialPriceText.replace(/\D/g, ''), 10);

    await this.variantSwatch.nth(0).click();

    await page.waitForTimeout(2000);

    const updatedPriceText = await this.productPrice.textContent();
    const updatedPrice = parseInt(updatedPriceText.replace(/\D/g, ''), 10);

    expect(updatedPrice).toBeGreaterThan(initialPrice);
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

  async whatsappRedirection(page) {
    const context = page.context();

    const [childPage] = await Promise.all([
      context.waitForEvent('page'),
      this.whatsappIcon.click(),
    ]);
    //first tranfer control to this popup  - whatappPopup loctor
    if (await this.whatsappAgree.isVisible()) {
      await this.whatsappAgree.click();
    }
    await expect(childPage).toHaveURL(
      'https://api.whatsapp.com/send/?phone=918897526143&text=Hey%2C+Let%E2%80%99s+chat+about+lovebeautyandplanet.&type=phone_number&app_absent=0'
    );
  }

  async reelYoumayalsolike(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();
    await this.reelProductTitle.first().click();
    await page.waitForTimeout(2000);
    const productName = (await this.reelYoumayaslolike.first().textContent())
      .trim()
      .toLowerCase();
    await this.reelYoumayaslolike.first().click();

    const reelProducts = (await this.reelPopupTitle.allTextContents())
      .map(product => product.trim().toLowerCase());
    expect(reelProducts).toContain(productName);
  }

  async reelPopupClose(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();
    await this.reelProductTitle.first().click();
    await page.waitForTimeout(2000);
    await this.reelPopupCloseButton.click();
    await expect(this.reelPopupCloseButton).not.toBeVisible();
  }

  async reelSectionATCFunctinality(page) {
    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();

    await this.reelAddToCart.first().click();
    await this.viewcartButton.click();

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
    await page.waitForTimeout(2000);
    await this.reelPopupATC.click();
    await page.waitForTimeout(2000);
    await this.reelPopupCart.click();

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
    await page.waitForTimeout(2000);
    await this.reelMoreInfo.click();


    const pdpProducts = (await this.pdpProductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(pdpProducts).toContain(productName);
  }


  async heroBannerRedirections(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/bounce-back-reset-mist',
      'https://lovebeautyandplanet.in/collections/bundle-offers',
      'https://lovebeautyandplanet.in/pages/our-story',
      'https://lovebeautyandplanet.in/collections/argan-oil-lavender',
      'https://lovebeautyandplanet.in/collections/hibiscus',
      'https://lovebeautyandplanet.in/collections/yuzu-lemon',
      'https://lovebeautyandplanet.in/collections/curry-leaves-biotin-mandarin',
      'https://lovebeautyandplanet.in/collections/bond-repair',
      'https://lovebeautyandplanet.in/products/love-beauty-planet-curry-leaves-vegan-biotin-hair-growth-scalp-serum-50ml',
      'https://lovebeautyandplanet.in/collections/rice-water-angelica',
      'https://lovebeautyandplanet.in/products/argan-oil-heat-protect-conditioning-mist-100ml'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      await this.heroBannerSlider.nth(i).click();
      await this.heroBanner.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      await page.goBack();
    }
  }
  async trendingSearchesNavigation(page) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/argan-oil-lavender',
      'https://lovebeautyandplanet.in/collections/onion-blackseed-patchouli',
      'https://lovebeautyandplanet.in/collections/bestseller'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      this.clickSearchTextfield();
      await this.trendingSearches.nth(i + 1).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      //await page.goBack();
    }
  }
  async trendingSearchesNavigation(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/new-launches',
      'https://lovebeautyandplanet.in/collections/combos',
      'https://lovebeautyandplanet.in/collections/bundle-offers'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      this.clickSearchTextfield();
      await this.topCategoriesSearches.nth(i + 1).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      //await page.goBack();
    }
  }
  async megamenuShopCollectionNavigation(page) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/new-launches',
      'https://lovebeautyandplanet.in/collections/bounce-back-reset-mist',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/combos',
      'https://lovebeautyandplanet.in/collections/all-products'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu
      await this.megaMenuShop.hover();
      await this.shopallLinks.nth(i).hover();
      await this.shopallLinks.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      //await page.goBack();
    }
  }
  async megamenuShopHaircareCollection(page) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/shampoo',
      'https://lovebeautyandplanet.in/collections/conditioner',
      'https://lovebeautyandplanet.in/collections/hair-scalp-oil',
      'https://lovebeautyandplanet.in/collections/hair-masks',
      'https://lovebeautyandplanet.in/collections/hair-serum',
      'https://lovebeautyandplanet.in/collections/scalp-scrub',
      'https://lovebeautyandplanet.in/collections/hair-care-combos',
      'https://lovebeautyandplanet.in/collections/frizz',
      'https://lovebeautyandplanet.in/collections/hairfall',
      'https://lovebeautyandplanet.in/collections/split-ends',
      'https://lovebeautyandplanet.in/collections/curl-care',
      'https://lovebeautyandplanet.in/collections/dandruff',
      'https://lovebeautyandplanet.in/collections/bond-repair',
      'https://lovebeautyandplanet.in/collections/hair-thinning',
      'https://lovebeautyandplanet.in/collections/scalp-health',
      'https://lovebeautyandplanet.in/collections/hair-care',

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu
      await this.megaMenuShop.hover();
      await this.haircareLink.hover();
      await this.haircareSubLinks.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      // await page.goBack();
    }
  }

  async megamenuShopBodycareCollection(page) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/coconut',
      'https://lovebeautyandplanet.in/collections/tea-tree-and-vetiver'

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu
      await this.megaMenuShop.hover();
      await this.bodycareLink.hover();
      await this.bodycareSubLinks.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      // await page.goBack();
    }
  }
  async megamenuShopExloreTheIngredientsCollection(page) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/coconut',
      'https://lovebeautyandplanet.in/collections/argan-oil-lavender',
      'https://lovebeautyandplanet.in/collections/onion-blackseed-patchouli',
      'https://lovebeautyandplanet.in/collections/olive-oil',
      'https://lovebeautyandplanet.in/collections/curry-leaves-biotin-mandarin',
      'https://lovebeautyandplanet.in/collections/rice-water-angelica',
      'https://lovebeautyandplanet.in/collections/tea-tree-and-vetiver',
      'https://lovebeautyandplanet.in/collections/hibiscus',
      'https://lovebeautyandplanet.in/collections/yuzu-lemon',
      'https://lovebeautyandplanet.in/collections/scalp-health',

    ];

    // Get total dropdown options count
    const count = expectedUrls.length;

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu
      await this.megaMenuShop.hover();
      await this.exploreByIngredients.hover();
      const collectionName = await this.exploreByIngredientsSubLinks.nth(i).textContent();

      await this.exploreByIngredientsSubLinks.nth(i).click();

      await expect(page).toHaveURL(expectedUrls[i]);

      const productTitles = await this.productTitle.allTextContents();

      const collectionWords = collectionName
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 2);

      const matchingProducts = productTitles.filter(title => {
        const productTitle = title.toLowerCase();

        return collectionWords.some(word =>
          productTitle.includes(word)
        );
      });

      expect(matchingProducts.length).toBeGreaterThan(0);
    }
  }



  async cartVisiblity() {
    await this.cartLink.click();
    if (this.closeCart.isVisible()) {
      await this.closeCart.click();
    }
  }
  async goto() {
    await this.page.goto('https://lovebeautyandplanet.in/');
  }
  async cookieAccept() {
    if (await this.cookieAcceptPopup.isVisible()) {
      await this.cookieOk.click();
    }


    await expect(this.cookieAcceptPopup).not.toBeVisible();
  }

  async cookieRedirection() {
    await this.cookieNotice.click();
    await expect(this.page).toHaveURL("https://www.unilevernotices.com/cookie-notices/india-english.html");
  }
  async removeCookiePopup(page) {

    await page.evaluate(() => {

      const popup = document.querySelector('#onetrust-banner-sdk');

      if (popup) {
        popup.remove();
      }

    });

  }
  async cookieAcceptFunctionality() {
    await this.cookieAccept;


  }
  async mobileCollectionBanner(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/shampoo',
      'https://lovebeautyandplanet.in/collections/conditioner',
      'https://lovebeautyandplanet.in/collections/hair-masks',
      'https://lovebeautyandplanet.in/collections/hair-serum'
    ];
    // Get total dropdown options count
    const count = await this.circularBannerMobile.count();

    for (let i = 0; i < count; i++) {

      await this.circularBannerMobile.first().waitFor();
      // Click dropdown option
      await this.circularBannerMobile.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      await page.goBack();
    }
  }
  async clickBrandLogo() {
    await this.navAboutUs.click();
    await this.logo.click();
    await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/');
  }

  async openAccountFromHeader() {
    await this.accountLink.click();
  }

  async openCartFromHeader() {
    await this.cartLink.click();
  }

  async clickAnnouncementBar() {
    await this.announcementBarLink.click();
  }

  async openAboutUs() {
    if (await this.navAboutUs.isVisible()) {
      await this.navAboutUs.click();

    }
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.aboutUsMobile.click();
    }
  }

  async openIngredients() {
    if (await this.navIngredients.isVisible()) {
      await this.navIngredients.click();
    }
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.knowYourIngredientsMobile.click();
    }
  }

  async openBeautyArchives() {
    if (await this.navBeautyArchives.isVisible()) {
      await this.navBeautyArchives.click();
    }
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
  }

  async openSupport() {
    if (await this.navSupport.isVisible()) {
      await this.navSupport.click();

    }
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.supportMobile.click();
    }
  }

  async clickHeroBanner() {
    await this.heroBanner.click();
  }

  async switchToCollectionTabByIndex(index1Based) {
    await this.collectionTabs.nth(index1Based - 1).click();
  }

  async openFirstProductFromCollectionTab() {
    const productName = (await this.firstProductLink.first().textContent())
      .trim()
      .toLowerCase();
    await this.firstProductLink.click();

    const pdpProducts = (await this.pdpProductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(pdpProducts).toContain(productName);

  }

  /* async addFirstProductToCartFromCollectionTab() {
     //  page.on('response', response => {
     //         if (
     //             response.status() === 403 ||
     //             response.url().includes('cdn-cgi')
     //         ) {
     //             console.log('Possible Cloudflare challenge:', response.url());
     //         }
     //     });
     await this.firstAtcButton.click();
   } */

  async openShopByConcernFirstLink() {
    await this.shopByConcernLinks.first().click();
  }
  async openDiscoverOurStory() {
    await this.discoverOurStoryLink.scrollIntoViewIfNeeded();
    if (await this.discoverOurStoryLink.isVisible()) {
      await this.discoverOurStoryLink.click();
    }
    if (await this.discoverOurStoryLinkMobile.isVisible()) {
      await this.discoverOurStoryLinkMobile.click();
    }
  }
  async clickDiscoverBeautyBill() {
    if (await this.discoverBeautyBill.isVisible()) {
      await this.discoverBeautyBill.click();
    }

    if (await this.discoverBeautyBillMobile.isVisible()) {
      await this.discoverBeautyBillMobile.click();
    }
  }

  async openKnowYourIngredientsBanner() {
    if (await this.knowYourIngredientsLink.isVisible()) {
      await this.knowYourIngredientsLink.click();
    }
    if (await this.knowYourIngredientsLinkMobile.isVisible()) {
      await this.knowYourIngredientsLinkMobile.click();
    }
  }

  async openBeautyArchivesViewAll() {
    if (await this.beautyArchivesViewAll.isVisible()) {
      await this.beautyArchivesViewAll.click();
    }

    if (await this.beautyArchivesViewAllMobile.isVisible()) {
      await this.beautyArchivesViewAllMobile.click();

    }
  }

  async openFirstBeautyArchivesArticle() {
    await this.beautyArchivesFirstArticle.click();
  }

  async subscribeNewsletter(email) {
    await this.newsletterEmail.fill(email);
    await this.newsletterConsent.check();
    await this.newsletterSubmit.click();
  }
  async clickFacebookLink() {
    if (await this.facebookLink.isVisible()) {
      await this.facebookLink.click();
    }
    if (await this.facebookLinkMobile.isVisible()) {
      await this.facebookLinkMobile.scrollIntoViewIfNeeded();
      await this.facebookLinkMobile.click();
    }
  }
  async clickInstagramLink() {
    if (await this.instagramLink.isVisible()) {
      await this.instagramLink.click();
    }
    if (await this.instagramLinkMobile.isVisible()) {
      await this.instagramLinkMobile.click();
    }
  }
  async clickYoutubeLink() {
    if (await this.youtubeLink.isVisible()) {
      await this.youtubeLink.click(
      );
    }
    if (await this.youtubeLinkMobile.isVisible()) {
      await this.youtubeLinkMobile.click();
    }
  }

  async PLPRedirectionFromMegaMenu(collectionName) {
    await this.megaMenuShop.hover();
    await this.megaMenuAllCollectionLinks
      .filter({ hasText: collectionName })
      .first()
      .waitFor();
    await this.megaMenuAllCollectionLinks
      .filter({ hasText: collectionName })
      .first()
      .click();
  }

  async PLPRedirectionHambergerMenu(collectionName) {
    await this.hamburgerMenu.click();
    await this.hamburgerMenuSubOptions
      .filter({ hasText: collectionName })
      .first()
      .waitFor();
    await this.hamburgerMenuSubOptions
      .filter({ hasText: collectionName })
      .first()
      .click();
  }
  async megamenuOffersCollectionNavigation(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/buy3-1399',
      'https://lovebeautyandplanet.in/collections/buy4-1799',
      'https://lovebeautyandplanet.in/collections/combos'
    ];

    // Get total dropdown options count
    const count = await this.megaMenuOffersDropdown.count();

    for (let i = 0; i < count; i++) {
      // Hover on Offers menu
      await this.megaMenuOffers.hover();
      // Wait for dropdown visibility
      await this.megaMenuOffersDropdown.first().waitFor();
      // Click dropdown option
      await this.megaMenuOffersDropdown.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      //await page.goBack();
    }
  }












  async hamburgerMenuCollectionNavigation(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/buy3-1399',
      'https://lovebeautyandplanet.in/collections/buy4-1799',
      'https://lovebeautyandplanet.in/collections/combos'
    ];

    // Get total dropdown options count
    const count = await this.offersDropdownOptionsMobile.count();

    for (let i = 0; i < count; i++) {
      await this.hamburgerMenu.click();
      await this.offersLinkMobile.click();
      await this.offersDropdownOptionsMobile.first().waitFor();
      // Click dropdown option
      await this.offersDropdownOptionsMobile.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      await page.goBack();
    }
  }
  async clickSearchTextfield() {
    if (await this.searchTexfield.isVisible()) {
      await this.searchTexfield.click();
    }
    if (await this.SearchTextFieldMobile.isVisible()) {
      await this.SearchTextFieldMobile.click();
    }
  }
  async clickAccountLink() {
    if (await this.accountLink.isVisible()) {
      await this.accountLink.click();
    }
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.loginMobile.click();
    }
  }
  async clickCartLink() {
    await this.cartLink.click();

  }
  async collectionTabsNavigation(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/combos',
      'https://lovebeautyandplanet.in/collections/new-launches'
    ];
    for (let i = 0; i < await this.collectionTabs.count(); i++) {
      await this.collectionTabs.nth(i).click();
      await this.viewAllLink.nth(i).waitFor();
      await this.viewAllLink.nth(i).click();
      // Verify URL
      await expect(page).toHaveURL(expectedUrls[i]);
      // Navigate back
      await page.goBack({
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
    }
  }
  async hpToPDPRedirection(page) {
    await this.productTitle.first().waitFor();
    await this.productTitle.first().click();
  }

  async addFirstProductToCartFromCollectionTab(page) {

    // Get the first product name
    const productName = (await this.productTitle.first().textContent())
      .trim()
      .toLowerCase();

    console.log("Expected Product:", productName);

    // Add the first product to cart
    await this.addToCartButton.first().click();

    // Wait until the cart link is clickable
    await this.cartLink.waitFor({ state: 'visible' });
    await this.cartLink.click();

    // Wait for cart items to load
    await this.cartproductTitle.first().waitFor({ state: 'visible' });

    const cartProducts = (await this.cartproductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    console.log("Cart Products:", cartProducts);

    expect(cartProducts).toContain(productName);
  }

  /*async addFirstProductToCartFromCollectionTab(page) {
    const productName = (await this.productTitle.first().innerText()).toLowerCase();
    await this.addToCartButton.first().click();
    await this.cartLink.click();
    // page.on('response', response => {
    //   if (
    //     response.status() === 403 ||
    //     response.url().includes('cdn-cgi')
    //   ) {
    //     console.log('Possible Cloudflare challenge:', response.url());
    //   }
    // });
    await this.cartproductTitle.first().waitFor();
    const cartProducts = await this.cartproductTitle.allTextContents();
    const lowerCaseProducts = cartProducts.map(product =>
      product.toLowerCase()
    );
    expect(lowerCaseProducts).toContain(productName);
  }   */
  async shopByConcernSectionRedirections(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/argan-oil-lavender',
      'https://lovebeautyandplanet.in/collections/onion-blackseed-patchouli',
      'https://lovebeautyandplanet.in/collections/bond-repair',
      'https://lovebeautyandplanet.in/collections/curry-leaves-biotin-mandarin',
      'https://lovebeautyandplanet.in/collections/rice-water-angelica',
      'https://lovebeautyandplanet.in/collections/tea-tree-and-vetiver'

    ];
    for (let i = 0; i < await this.shopByConcernLinks.count(); i++) {
      await this.shopByConcernLinks.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
      await this.shopByConcernLinks.nth(i).waitFor();
    }
  }
  async inTheSpotLightSection() {

    // Capture spotlight product title
    const productName = (
      await this.inTheSpotLightProductTitle.first().innerText()
    ).trim().toLowerCase();

    // Check whether Notify Me button is visible
    if (await this.inTheSpotLightNotifyMeButton.first().isVisible()) {

      // Click Notify Me
      await this.inTheSpotLightNotifyMeButton.first().click();

      // Verify Notify popup is displayed
      await expect(this.inTheSpotLightNotifyPopup).toBeVisible();

    } else {

      await this.cartVisiblity();

      // Click Add to Cart
      await this.inTheSpotLightAddToCartButton.first().click();

      // Open cart drawer
      await this.cartLink.click();


      // Wait for cart product to appear
      await this.cartproductTitle.first().waitFor();

      // Get all cart product titles
      const cartProducts = await this.cartproductTitle.allTextContents();

      // Convert cart products to lowercase
      const lowerCaseProducts = cartProducts.map(product =>
        product.trim().toLowerCase()
      );

      // Extract actual product name from spotlight title
      const expectedProduct = productName
        .split('\n')
        .pop()
        .trim();

      console.log('Expected Product:', expectedProduct);
      console.log('Cart Products:', lowerCaseProducts);

      // Validate product exists in cart
      expect(lowerCaseProducts.join(' ')).toContain(expectedProduct);
    }
  }
  async whatSetsUsApartDropdown() {
    for (let i = 0; i < await this.whatSetsUsApartCard.count(); i++) {
      await this.whatSetsUsApartCard.nth(i).click();
      await expect(this.whatSetsUsApartContent.nth(i)).toBeVisible();
    }
  }
  async footerProductLinksRedirections(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/shampoo',
      'https://lovebeautyandplanet.in/collections/conditioner',
      'https://lovebeautyandplanet.in/collections/hair-masks',
      'https://lovebeautyandplanet.in/collections/hair-serum',
      'https://lovebeautyandplanet.in/collections/hair-scalp-oil',
      'https://lovebeautyandplanet.in/collections/new-launches',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/combos'

    ];
    for (let i = 0; i < await this.footerProductLinks.count(); i++) {
      await this.footerProductLinks.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
      await this.footerProductLinks.nth(i).waitFor();
    }
  }
  async footerProductLinksRedirectionsMobile(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/shampoo',
      'https://lovebeautyandplanet.in/collections/conditioner',
      'https://lovebeautyandplanet.in/collections/hair-masks',
      'https://lovebeautyandplanet.in/collections/hair-serum',
      'https://lovebeautyandplanet.in/collections/hair-scalp-oil',
      'https://lovebeautyandplanet.in/collections/new-launches',
      'https://lovebeautyandplanet.in/collections/bestseller',
      'https://lovebeautyandplanet.in/collections/combos'

    ];

    for (let i = 0; i < await this.footerProductLinksMobile.count(); i++) {
      if (await this.productLinksMobile.isVisible()) {
        await this.productLinksMobile.click();
      }
      await this.footerProductLinksMobile.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
    }
  }
  async footerConcernLinksRedirections(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/frizz',
      'https://lovebeautyandplanet.in/collections/hairfall',
      'https://lovebeautyandplanet.in/collections/split-ends',
      'https://lovebeautyandplanet.in/collections/curl-care',
      'https://lovebeautyandplanet.in/collections/dandruff',
      'https://lovebeautyandplanet.in/collections/bond-repair',
      'https://lovebeautyandplanet.in/collections/hair-thinning',
      'https://lovebeautyandplanet.in/collections/scalp-health'

    ];
    for (let i = 0; i < await this.footerConcernLinks.count(); i++) {
      await this.footerConcernLinks.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
    }
  }
  async footerConcernLinksRedirectionsMobile(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/collections/frizz',
      'https://lovebeautyandplanet.in/collections/hairfall',
      'https://lovebeautyandplanet.in/collections/split-ends',
      'https://lovebeautyandplanet.in/collections/curl-care',
      'https://lovebeautyandplanet.in/collections/dandruff',
      'https://lovebeautyandplanet.in/collections/bond-repair',
      'https://lovebeautyandplanet.in/collections/hair-thinning',
      'https://lovebeautyandplanet.in/collections/scalp-health'

    ];
    for (let i = 0; i < await this.footerConcernLinksMobile.count(); i++) {
      if (await this.concernLinksMobile.isVisible()) {
        await this.concernLinksMobile.click();
      }
      await this.footerConcernLinksMobile.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
    }
  }

  async footerQuickLinksRedirections(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/pages/our-story',
      'https://lovebeautyandplanet.in/pages/faq',
      'https://lovebeautyandplanet.in/pages/blogs',
      'https://lovebeautyandplanet.in/pages/contact-us',
      'https://lovebeautyandplanet.in/pages/shipping-refund-policy',
      'https://lovebeautyandplanet.in/pages/refund-policy',
      'https://lovebeautyandplanet.in/pages/track-order'
    ];
    for (let i = 0; i < await this.footerQuickLinks.count(); i++) {
      await this.footerQuickLinks.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
      await this.footerQuickLinks.nth(i).waitFor();
    }
  }
  async footerQuickLinksRedirectionsMobile(page) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/pages/our-story',
      'https://lovebeautyandplanet.in/pages/faq',
      'https://lovebeautyandplanet.in/pages/blogs',
      'https://lovebeautyandplanet.in/pages/contact-us',
      'https://lovebeautyandplanet.in/pages/shipping-refund-policy',
      'https://lovebeautyandplanet.in/pages/refund-policy',
      'https://lovebeautyandplanet.in/pages/track-order'
    ];
    for (let i = 0; i < await this.footerQuickLinksMobile.count(); i++) {
      if (await this.quickLinksMobile.isVisible()) {
        await this.quickLinksMobile.click();
      }
      await this.footerQuickLinksMobile.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
      await page.goBack();
    }
  }
  async footerLegalLinksRedirections(page, context) {
    const expectedUrls = [
      'https://lovebeautyandplanet.in/policies/privacy-policy',
      'https://www.unilevernotices.com/privacy-notices/india-english.html',
      'https://notices.unilever.com/general/en/accessibility/',
      'https://www.unilevernotices.com/cookie-notices/india-english.html',
      'https://lovebeautyandplanet.in/pages/terms-of-use',
      'https://lovebeautyandplanet.in/pages/site-map',
      'https://lovebeautyandplanet.in/pages/terms-conditions-1'
    ];

    for (let i = 0; i < await this.footerLegalLinks.count(); i++) {
      if (await this.legalLinksMobile.isVisible()) {
        await this.legalLinksMobile.click();
      }

      const link = this.footerLegalLinks.nth(i);

      let popup = null;

      //Listen for popup BUT don't block forever
      const popupPromise = context.waitForEvent('page', { timeout: 4000 })
        .catch(() => null);

      await link.click();

      popup = await popupPromise;

      // CASE 1: NEW TAB OPENED
      if (popup) {

        await popup.waitForLoadState('domcontentloaded');

        await expect(popup).toHaveURL(expectedUrls[i]);

        await popup.close();

        await page.bringToFront();

      }

      // CASE 2: SAME TAB NAVIGATION
      else {

        await page.waitForURL(expectedUrls[i], { timeout: 20000 });

        await expect(page).toHaveURL(expectedUrls[i]);

        await page.goBack();

        await page.waitForLoadState('domcontentloaded');
      }

      // Ensure footer is stable before next iteration
      await link.waitFor({ state: 'visible' });
    }
  }
  async footerLegalLinksRedirectionsMobile(page, context) {

    const expectedUrls = [
      'https://lovebeautyandplanet.in/policies/privacy-policy',
      'https://www.unilevernotices.com/privacy-notices/india-english.html',
      'https://notices.unilever.com/general/en/accessibility/',
      'https://www.unilevernotices.com/cookie-notices/india-english.html',
      'https://lovebeautyandplanet.in/pages/terms-of-use',
      'https://lovebeautyandplanet.in/pages/site-map',
      'https://lovebeautyandplanet.in/pages/terms-conditions-1'
    ];

    for (let i = 0; i < expectedUrls.length; i++) {

      // Re-open footer accordion after every back navigation
      if (await this.legalLinksMobile.isVisible()) {

        const expanded =
          await this.footerLegalLinksMobile.first().isVisible()
            .catch(() => false);

        if (!expanded) {
          await this.legalLinksMobile.click();
        }
      }

      // Re-fetch locator after DOM reload
      const link = this.footerLegalLinksMobile.nth(i);

      await link.scrollIntoViewIfNeeded();

      // Start listening BEFORE click
      const popupPromise = context.waitForEvent('page', {
        timeout: 3000
      }).catch(() => null);

      await link.click();

      const popup = await popupPromise;

      // NEW TAB
      if (popup) {

        await popup.waitForLoadState('domcontentloaded');

        await expect(popup).toHaveURL(expectedUrls[i]);

        await popup.close();

        await page.bringToFront();

      }

      // SAME TAB
      else {

        await page.waitForURL(expectedUrls[i], {
          timeout: 20000
        });

        await expect(page).toHaveURL(expectedUrls[i]);

        await page.goBack();

        await page.waitForLoadState('domcontentloaded');

      }

      // Small stabilization wait for mobile DOM
      await page.waitForTimeout(1000);

    }

  }
  async facebookRedirection(page, context) {
    // Wait for new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      this.clickFacebookLink()
    ]);

    // Wait until page is loaded
    //await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.facebook.com/lovebeautyandplanetin');
  }
  async instagramRedirection(page, context) {

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      this.clickInstagramLink()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    //note: Instagram is blocking/restricting access from the Jenkins server IP
    await expect(this.instagramLink).toHaveAttribute(
      'href',
      /instagram\.com\/lovebeautyandplanet_in/
    );

  }
  async youtubeRedirection(page, context) {

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      this.clickYoutubeLink()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    await expect(newPage)
      .toHaveURL(/youtube\.com/);

  }
}

