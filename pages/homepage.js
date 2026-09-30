import { test, expect } from '@playwright/test';
import { generateUser } from '../pages/utils.js';

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
    this.heroBannerRight = page.locator('//section[@class="home-banner"]//button[@class="owl-next"]').first();
    this.heroBannerLeft = page.locator('//section[@class="home-banner"]//button[@class="owl-prev"]').first();

    // Home collection tabs + product cards
    //x product card and ATC selectors need to be added I have hardcoded for now
    this.productTitle = page.locator("//section[@class='home-products']//p[@class='h-pro-card-cnt-description']//a");
    this.combosProductTitle = page.locator('//section[@class="home-products"]//p[@class="h-pro-card-cnt-description"]');
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
    this.heroBanner = page.locator('//section[@class="home-banner"]//div[contains(@id,"home-banner-slide-")]//a');
    this.heroBannerSlider = page.locator('//section[@class="home-banner"]//button[contains(@class,"owl-dot")]');
    this.reelProductTitle = page.locator('[class="reelUp_slider_title"]');
    this.reelPrice = page.locator('[class="money"]');
    this.reelAddToCart = page.locator('[class="reelUp_playlist_button_text"]');
    this.reelMoreInfo = page.locator('[class="reelUp_custom_action reelUp_modal_product_info_btn"]');
    this.reelPopupATC = page.locator('(//p[@class="reelUp_custom_btn_text"])[2]');
    this.reelPopupCart = page.locator('[class="reelUp_custom_action reelUp_modal_cart_btn"]');
    this.reelPopupCartCount = page.locator('[class="reelUp_cart_count"]');
    this.viewcartButton = page.locator('(//button[@id="view-cart-drawer"])[1]');
    this.pdpProductTitle = page.locator('//div[@class="product__title"]//h1');
    this.reelYoumayaslolike = page.locator('[class="reelUp_grid_product_title"]');
    this.reelPopupCloseButton = page.locator('(//button[@class="reelUp_video_preview_action"])[1]');
    this.reelPopupTitle = page.locator('[class="reelUp_modal_product_title"]');
    this.reelPopupPrice = page.locator('[class="reelUp_sale_price"]');
    this.whatsappIcon = page.locator('[class="WhatsAppButton__root"]');
    this.whatappPopup = page.locator('[id="wa-consent-popup"]');
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
    this.productCardPrice = page.locator('//div[@class="h-pro-price"]//span[@class="pro-variant-price active"]').first();
    this.compareAtPrice = page.locator('//div[@class="h-pro-price"]//span[@class="text-decoration-line-through active"]').first();
    this.discountPercentage = page.locator('//div[@class="h-pro-card-sale active"]').first(); this.productCardATC = page.locator('[class="product-form__buttons"]').first();
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
    this.customerServiceDetails = page.locator('//div[@class="detail-desk"]//span');
    this.customerServiceMobile = page.locator('[class="mob-contact-detail"]');
    this.customerServiceMobileDetails = page.locator('//section[@class="mob-contact-detail"]//div[@class="detail"]');
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
    this.blogListingTitle = page.locator('[class="title"]');
    this.viewAllBlog = page.locator('[class="main-btn blogs-show-more mt-4 mt-sm-0"]');
    this.sortOption = page.locator('[class="blog-selected-value"]');
    this.sortByOldest = page.locator('//ul[@class="active"]//li[@data-value="oldest"]');
    this.blogDate = page.locator('//div[@class="date-time"]//span');
    this.customerlovePrev = page.locator('//h2[contains(text(),"Customer Love")]/parent::div//button[@class="owl-prev"]');
    this.customrtloveNext = page.locator('//h2[contains(text(),"Customer Love")]/parent::div//button[@class="owl-next"]');
    this.notifyMeName = page.locator('[id="notify-name"]');
    this.notifyMePhone = page.locator('[id="notify-phone"]');
    this.notifyMeSubmit = page.locator('[class="notify-submit-btn"]');
    this.knowYourIngredinetsLink = page.locator('(//a[contains(text(),"Know Your Ingredients")])[1]');
    this.knowYourIngredinetsLinkMobile = page.locator('(//a[contains(text(),"Know Your Ingredients")])[2]');
    this.keepInTouch = page.locator('//b[contains(text(),"keep in touch!")]');
    this.findIngredients = page.locator('//a[@class="detail"]//h3');
    this.accountLink = page.locator('[class="header__icon header__icon--account link focus-inset"]');
    this.emailTextField = page.locator('[id="CustomerEmail"]');
    this.passwordTextFiled = page.locator('[id="CustomerPassword"]');
    this.loginButton = page.locator('[class="login-btn"]');
    this.viewaddress = page.locator('//a[@href="/account/addresses"]');
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
    this.deleteButton = page.locator('//button[contains(text(),"Delete")]');
    this.returnToAccount = page.locator('//a[contains(text(),"return to account details")]');
    this.whatsappagree = page.locator('[id="wa-agree-btn"]');
    this.plpProductTitle = page.locator('//div[@class=" facets-vertical container"]//p[@class="h-pro-card-cnt-description"]//a');
    this.newsletterTextField = page.locator('[class="field__input email-input"]');
    this.submitNewsletterButton = page.locator('[class="newsletter-form__button field__button submit-btn"]');
    this.concentCheckBox = page.locator('[id="consent"]');
    this.SuccessMessage = page.locator('[class="test newsletter-form__message newsletter-form__message--success form__message"]');
    this.validEmailError = page.locator('//p[contains(text(),"Please enter valid email address")]');
    this.concentError = page.locator('//p[contains(text(),"Please accept the consent.")]');
    this.newsletterConsentvisibility = page.locator('[class="newsletter-consent consent-statement"]');
    this.unileverBrands = page.locator('(//a[contains(text(),"Unilever Brands")])[2]');
    this.privacyNotice = page.locator('(//a[contains(text(),"Privacy Notice")])[2]');
    this.reelNext = page.locator('[class="reelUp_navigator_btn_next"]');
    this.reelPrev = page.locator('[class="reelUp_navigator_btn_prev"]');
    this.reelToolTip = page.locator('[class="reelUp_video_action_tooltip_wrapper reelUp_tooltip_hidden"]');
    this.reelVolume = page.locator('[class="reelUp_flex reelUp_top_action_stack"]');
    this.reelLike = page.locator('[class="reelUp_video_preview_action_wrapper reelUp_video_icon--retro reelUp_popup_video_like "]');
    this.reelLiked = page.locator('[class="reelUp_video_preview_action_wrapper reelUp_video_icon--retro reelUp_popup_video_like reelUp_video_liked"]');
    this.reelShare = page.locator('[class="reelUp_video_preview_action_wrapper reelUp_video_icon--retro reelUp_popup_video_share"]');
    this.reelDiscription = page.locator('[class="reelUp_product_description_wrapper"]');
    this.reelVideo = page.locator('[class="reelUp_modal_video_content"]');
    this.reelPlay = page.locator('[class="reelUp_modal_play_icon"]');
    this.reelImage = page.locator('[class="reelUp_product_image_slider"]');
    this.reelSlider = page.locator('[class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"]');
    this.reelVideoAuto = page.locator('[class="reelUp_video_elem"]');
    this.orderHistory = page.locator('//h2[contains(text(),"Order history")]');
    this.orderNumber = page.locator('//td[@id="RowOrder"]//a');
    this.orderdate = page.locator('//td[@headers="RowOrder ColumnDate"]//time');
    this.fullFilmentStatus = page.locator('[headers="RowOrder ColumnFulfillment"]');
    this.paymentStatus = page.locator('[data-label="Payment status"]');
    this.orderPrice = page.locator('[headers="RowOrder ColumnTotal"]');
    this.orderDetailsHeading = page.locator('//div[@class="customer order section-template--19317909684394__main-padding"]//h2').first();
    this.billingAddress = page.locator('//h2[contains(text(),"Billing Address")]/parent::div');
    this.shippingAddress = page.locator('//h2[contains(text(),"Shipping Address")]/parent::div');
    this.paymentStatus2 = page.locator('(//h2[contains(text(),"Billing Address")]/parent::div//p)[1]');
    this.fullFilmentStatus2 = page.locator('(//h2[contains(text(),"Shipping Address")]/parent::div//p)[1]');
    this.orderPrice2 = page.locator('(//td[@data-label="Total"])[2]');
    this.orderDate = page.locator('(//div[@class="customer order section-template--19317909684394__main-padding"]//time)[1]');
    this.footerTrackOrder = page.locator('(//a[contains(text(),"Track Order")])[2]');
    this.footerTrackOrderMobile = page.locator('(//a[contains(text(),"Track Order")])[1]');
    this.quickLinksMobile = page.locator('//button[contains(text(),"Quick links")]');
    this.trackInput = page.locator('[class="Form__Input"]');
    this.trackOrderSubmit = page.locator('[class="Button Button--primary Button--full click-btn track_order_btn"]');
    this.orderCancelledMessage = page.locator('//div[contains(text(),"This order has been cancelled.")]');
    this.trackOrderID = page.locator('[class="h4 order-id-display"]');
    this.orderDelivered = page.locator('//span[contains(text(),"Order delivered")]');
    this.rtoStatus = page.locator('[class="delivery_status__status rto"]');
    this.status = page.locator('//h2[@class="to-delivery-status"]');
    this.trackUrl = page.locator('[class="tracking_url_container"]');
    this.shipRocketRTOStatus = page.locator('//span[contains(text(),"RTO Delivered")]');
    this.orderPlacedOn = page.locator('[class="h4 pickup-date-display"]');
    this.orderPlacedOnShipRocket = page.locator('(//span[@class="pull-right fs-12px right_info"])[2]');
    this.bannerVideo = page.locator('//div[@id="home-banner-slide-1"]//video');
    this.reelVideo1 = page.locator('[class="reelUp_video_elem"]');
    this.reelThumbnail = page.locator('[class="reelUp_ratio_img_wrapper"]');
    this.newsletterLegal = page.locator('//label[@class="newsletter-consent consent-statement"]//p');
    this.callUs = page.locator('[title="tel:1800-203-5544"]').nth(1);
    this.callUsMobile = page.locator('[title="tel:1800-203-5544"]').nth(0);
    this.emailUs = page.locator('//a[contains(text(),"support@lovebeautyandplanet.in")]').nth(1);
    this.emailUsMobile = page.locator('//a[contains(text(),"support@lovebeautyandplanet.in")]').nth(0);
    this.footerLogo = page.locator('//div[@class="footer-block__details-content footer-block-image "]//div[@class="footer-block__image-wrapper"]');
    this.footerLogoMobile = page.locator('[class="footer-block__details-content footer-block-image footer-logo "]');
    this.footerBeBeautiful = page.locator('//div[@class="footer-block__details-content footer-block-image "]//div[@class="be_beautiful__container"]');
    this.footerBeBeautifulMobile = page.locator('[class="be_beautiful__container"]').first();
    this.haveAQuerries = page.locator('//button[contains(text(),"Have any queries?")]');
    this.mobileSocialLinks = page.locator('//li[@class="list-social__item"]');
    this.chakshuPortalLink = page.locator('//p[@class="bold-para"]//a');
    this.contactUsHeading = page.locator('//h1[contains(text(),"contact us")]');
    this.contactUsPageConcent = page.locator('[class="contact-us-consent consent-statement"]');
    this.contactUsCautionNotice = page.locator('[class="rich-text__blocks left"]');
    this.contactUsStaticPageLinks = page.locator('//label[@class="contact-us-consent consent-statement"]//a');
    this.contactUsPgaeChakshuLink = page.locator('(//div[@class="rich-text__blocks left"]//strong)[3]');
    this.blogimage = page.locator('[class="new-article-image article-image"]');
    this.blogContent = page.locator('[class="rte article-content ss-blog rte--allow-full-width-images wide-image"]');
    this.blogProductCatagory = page.locator('//div[@class="h-pro-card-cnt buy-detail"]//h4').first();
    this.blogProductTitle = page.locator('//div[@class="h-pro-card-cnt buy-detail"]//p').first();
    this.blogProductVariant = page.locator('//div[@class="h-pro-card-cnt buy-detail"]//label').first();
    this.blogProductPrice = page.locator('//div[@class="h-pro-card-cnt buy-detail"]//span').first();
    this.blogProductImage = page.locator('[class="product-image"]').first();
    this.blogPageNotify = page.locator('[id="notify-me-btn"]');
    this.blogDeatailsAuthorname = page.locator('//h3[@class="title card__heading h2"]//p');
    this.blogDeatailsDate = page.locator('//h3[@class="title card__heading h2"]//div//span');
    this.blogDetailsPageReadStoriesImage = page.locator('[class="article-card__image-wrapper card__media"]');
    this.blogListingBanner = page.locator('[class="hero blog-banner"]');
    this.brandingStripe = page.locator('[class="custom navbar"]');
    this.blogListingAuthor = page.locator('[class="author"]').first();
    this.blogListingDate = page.locator('//p[@class="author"]//following-sibling::span').first();
    this.blogListingTags = page.locator('[class="tag"]').first();
    this.latestSort = page.locator('//value[contains(text(),"Latest")]').first();
    this.blogListingFilter = page.locator('[class="blog-selected-value"]').first();
    this.blogListingFilterValues = page.locator('//ul[@class="active"]//li');
    this.reviewNext = page.locator('//section[@class="home-reviews"]//button[@class="owl-next"]');
    this.reviewPrev = page.locator('//section[@class="home-reviews"]//button[@class="owl-prev"]');
    this.intheSpotLightImage = page.locator('[class="owl-carousel in-the-spotlight owl-loaded owl-drag"]');
    this.intheSpotLightNext = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//button[@class="owl-next"]');
    this.intheSpotLightPrev = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//button[@class="owl-prev"]');
    this.inTheSpotLightSliderDot = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//button[@class="owl-dot"]');
    this.inTheSpotLightCatogoty = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//h3').first();
    this.inTheSpotLightProducttitle = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//p').first();
    this.inTheSpotLightVariant = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//label').first();
    this.inTheSpotLightPrice = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//span[@class="pro-variant-price"]').first();
    this.inTheSpotLightCompareAtPrice = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//span[@class="text-decoration-line-through"]').first();
    this.inTheSpotLightDiscount = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//div[@class="h-pro-card-sale"]').first();
    this.intheSpotLightRatings = page.locator('//div[@class="owl-carousel in-the-spotlight owl-loaded owl-drag"]//div[@class="custom-review--rating-value"]').first();
    this.findIngredientsHeading = page.locator('[class="sub-heading"]');
    this.findIngredientsDescription = page.locator('//span[@data-mce-fragment="1"]').first();
    this.findIngredientsReadmore = page.locator('[class="border_btn"]').first();
    this.findIngredientsImage = page.locator('[class="ingredient-img"]').first();
    this.addressPageTitle = page.locator('//h1[contains(text(),"addresses")]');
    this.defaultAddress = page.locator('//li[@data-address]//h2').first();
    this.defaultAddressCountry = page.locator('//li[@data-address]//p').first();
    this.defaulteditAddress = page.locator('[class="edit-address"]');
    this.defaultFirstName = page.locator('//label[contains(text(),"First name")]').nth(1);
    this.defaultLastName = page.locator('//label[contains(text(),"Last name")]').nth(1);
    this.lastName = page.locator('//label[contains(text(),"Last name")]').nth(0);
    this.defaultCompany = page.locator('//label[contains(text(),"Company")]').nth(1);
    this.defaultAddress1 = page.locator('//label[contains(text(),"Address 1")]').nth(1);
    this.address1 = page.locator('//label[contains(text(),"Address 1")]').nth(0);
    this.defaultAddress2 = page.locator('//label[contains(text(),"Address 2")]').nth(1);
    this.address2 = page.locator('//label[contains(text(),"Address 2")]').nth(0);
    this.defaultCity = page.locator('//label[contains(text(),"City")]').nth(1);
    this.defaultPostal = page.locator('//label[contains(text(),"Postal/ZIP code")]').nth(1);
    this.defaultPhone = page.locator('//label[contains(text(),"Phone")]').nth(1);
    this.defaultCountry = page.locator('[name="address[country]"]').nth(1);
    this.defaultProvince = page.locator('[name="address[province]"]').nth(1);
    this.defaultUpdateAddress = page.locator('//button[contains(text(),"Update address")]');
    this.defaultCancel = page.locator('//button[contains(text(),"Cancel")]').nth(0);
    this.productCardNextNavigation = page.locator('//section[@class="home-products"]//button[@class="owl-next"]');
    this.productCardPrevNavigation = page.locator('//section[@class="home-products"]//button[@class="owl-prev"]');
    this.productCradSliderDot = page.locator('//section[@class="home-products"]//button[@class="owl-dot"]').first();

  }
  async addAddressFunctionality(page) {
    await this.viewaddress.click();
    await expect(this.addressPageTitle).toBeVisible();
    await expect(this.defaultAddress).toBeVisible();
    await expect(this.defaultAddressCountry).toBeVisible();
    await this.defaulteditAddress.click();
    await expect(this.defaultFirstName).toBeVisible();
    await expect(this.defaultLastName).toBeVisible();
    await expect(this.defaultCompany).toBeVisible();
    await expect(this.defaultAddress1).toBeVisible();
    await expect(this.defaultAddress2).toBeVisible();
    await expect(this.defaultCity).toBeVisible();
    await expect(this.defaultPostal).toBeVisible();
    await expect(this.defaultPhone).toBeVisible();
    await expect(this.defaultCountry).toBeVisible();
    await expect(this.defaultProvince).toBeVisible();
    await expect(this.defaultUpdateAddress).toBeVisible();
    await this.page.reload();

    await this.addAddress.click();
    this.user = generateUser();
    await this.firstName.fill(this.user.firstName);
    await this.lastName.fill(this.user.lastName);
    await this.companyName.fill('autumn');
    await this.address1.fill('No. 1, 2nd Cross Road, 1st Main Road');
    await this.address2.fill('Sector 1, HSR Layout');
    await this.cityName.fill('Bangalore');
    await this.province.selectOption({ label: 'Karnataka' });
    await this.pincode.fill('560037');
    await this.phoneNumber.fill(this.user.phone);
    await this.defaultAddressCheckbox.click();
    await this.addButton.click();
    await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/account/addresses');
    await this.deleteButton.nth(1).click();
    await page.waitForTimeout(4000);

    page.on('dialog', async dialog => {
      await dialog.accept();
      await expect(this.page).toHaveURL('https://lovebeautyandplanet.in/account/addresses');
      await this.returnToAccount.click();
      await this.logoutButton.click();
      await this.accountLink.click();
      await expect(page).toHaveURL("https://lovebeautyandplanet.in/account");


    });
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

    await expect(this.findIngredientsHeading).toBeVisible();
    await expect(this.findIngredientsDescription).toBeVisible();
    await expect(this.findIngredientsReadmore).toBeVisible();
    await expect(this.findIngredientsImage).toBeVisible();

    //verify all ingresients from menu is present in ingredients page
    const expectedIngredients = [
      'Coconut Water',
      'Mimosa Flowers',
      'Rice Water',
      'Angelica Seed Oil',
      'Argan Oil',
      'Lavender',
      'Tea Tree Oil',
      'Peppermint',
      'Vetiver',
      'Onion Oil',
      'Blackseed Oil',
      'Patchouli',
      'Olive Oil',
      'Peptide',
      'Curry Leaves',
      'Biotin',
      'Mandarins',
      // 'Hibiscus',
      // 'Yuzu Lemon',
      // 'Moringa',
      // 'Rosmary',
      // 'Murumuru Butter',
      // 'Bulgarian Rose',
      // 'Turmeric',
      // 'Cherry Blossom',
      // 'Cofee Bean',
      // 'Warm Venila',
      // 'Chamomile'
    ];

    const normalize = text => text.replace(/\s+/g, ' ').trim().toLowerCase();

    const actualIngredients = (await this.findIngredients.allTextContents())
      .map(normalize);

    for (const ingredient of expectedIngredients) {
      expect(
        actualIngredients.some(card => card.includes(normalize(ingredient))),
        `Missing ingredient card: ${ingredient}`
      ).toBe(true);
    }



    const count = await this.findIngredients.count();

    for (let i = 0; i < count; i++) {

      // Store the text before clicking
      const ingredientText = (
        await this.findIngredients.nth(i).textContent()
      ).trim();

      console.log(`Selected ingredient: ${ingredientText}`);

      // Get the first word and remove plural 's'
      const ingredientUrlText = ingredientText
        .toLowerCase()
        .split(/\s+/)[0]
        .replace(/s$/, '');

      // Click ingredient
      await this.findIngredients.nth(i).click();

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


  async inTheSpotLightSection(page) {
    await expect(this.intheSpotLightImage).toBeVisible();
    await expect(this.inTheSpotLightCatogoty).toBeVisible();
    await expect(this.inTheSpotLightProducttitle).toBeVisible();
    await expect(this.inTheSpotLightVariant).toBeVisible();
    await expect(this.inTheSpotLightPrice).toBeVisible();
    await expect(this.inTheSpotLightCompareAtPrice).toBeVisible();
    await expect(this.inTheSpotLightDiscount).toBeVisible();
    await expect(this.intheSpotLightRatings).toBeVisible();

    // Capture spotlight product title
    const productName = (
      await this.inTheSpotLightProductTitle.first().innerText()
    ).trim().toLowerCase();
    //navigation arrows

    if (await this.intheSpotLightNext.isVisible()) {
      const productNamebefore = (
        await this.inTheSpotLightProductTitle.first().innerText()
      ).trim().toLowerCase();
      await this.intheSpotLightNext.click();
      const productNameafter = (
        await this.inTheSpotLightProductTitle.nth(1).innerText()
      ).trim().toLowerCase();
      await this.intheSpotLightPrev.click();

      await expect(productNamebefore).not.toBe(productNameafter);

    }
    //slider
    if (await this.inTheSpotLightSliderDot.nth(0).isVisible()) {
      const productNamebefore1 = (
        await this.inTheSpotLightProductTitle.first().innerText()
      ).trim().toLowerCase();
      await this.inTheSpotLightSliderDot.nth(0).click();
      const productNameafter1 = (
        await this.inTheSpotLightProductTitle.nth(1).innerText()
      ).trim().toLowerCase();
      await this.inTheSpotLightSliderDot.nth(0).click();
      await expect(productNamebefore1).not.toBe(productNameafter1);

    }

    // Check whether Notify Me button is visible
    if (await this.inTheSpotLightNotifyMeButton.first().isVisible()) {

      // Click Notify Me
      await this.inTheSpotLightNotifyMeButton.first().click();

      // Verify Notify popup is displayed
      await expect(this.inTheSpotLightNotifyPopup).toBeVisible();
      await this.notifyMeName.fill('Amit');
      await this.notifyMePhone.fill('9876543210');
      const dialogPromise = page.waitForEvent('dialog');
      await this.notifyMeSubmit.click();
      const dialog = await dialogPromise;
      expect(dialog.message()).toBe(
        "Thanks! We'll notify you when this item is back in stock."
      );

      await dialog.accept();

    } else {

      await this.cartVisiblity();

      // Click Add to Cart
      await this.inTheSpotLightAddToCartButton.first().click();
      await expect(this.ATCSuccessMessage).toBeVisible();
      await expect(this.cartCount).toHaveText('1');

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




  async customerLoveSectionVisibility(page) {
    if (await this.reviewNext.isVisible()) {
      await this.reviewNext.click();
      await this.reviewPrev.click();
    }

    await expect(this.customerLoveSection).toBeVisible();
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
    await expect(this.latestSort).toBeVisible();
    // Select Sort option
    await this.sortOption.nth(0).click();

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
    await this.viewAllBlog.nth(0).click();
    // Select Sort option
    await this.sortOption.nth(1).click();

    // Select Oldest
    await this.sortByOldest.click();

    // Get only the first 24 blog dates
    const datess = (await this.blogDate.allTextContents()).slice(0, 24);

    console.log('First 24 blog dates:', datess);

    // Convert DD/MM/YY dates to JavaScript Date objects
    const parsedDatess = datess.map(date => {
      const [day, month, year] = date.trim().split('/');

      return new Date(`20${year}-${month}-${day}`);
    });

    console.log(
      'Parsed dates:',
      parsedDatess.map(date => date.toLocaleDateString())
    );

    // Verify dates are sorted from oldest to newest
    for (let i = 0; i < parsedDatess.length - 1; i++) {

      expect(
        parsedDatess[i].getTime(),
        `Date at position ${i + 1} should be older than or equal to date at position ${i + 2}`
      ).toBeLessThanOrEqual(
        parsedDatess[i + 1].getTime()
      );
    }
    await this.blogListingFilter.click();

    const expectedFilters = [
      'All',
      'Hair care',
      'Curl care',
      'Serum',
      'Shampoo',
      'Dandruff',
      'Split ends',
      'Damaged hair',
      'Hair growth',
      'Hair fall',
    ];

    const normalize = text => text.trim().replace(/\s+/g, ' ').toLowerCase();

    const availableFilters = (await this.blogListingFilterValues.allTextContents())
      .map(normalize);

    for (const filter of expectedFilters) {
      expect(
        availableFilters,
        `Missing blog filter: "${filter}"`
      ).toContain(normalize(filter));
    }

    const serumFilter = this.blogListingFilterValues.filter({
      hasText: /^serum$/i,
    });

    await serumFilter.click();
     await page.waitForTimeout(2000);
    await this.scrollSlowlyToBottom(page);
    await expect
      .poll(async () => {
        const titles = await this.blogListingTitle.allTextContents();
        return titles.some(title => /\bserum\b/i.test(title));
      }, { message: 'Expected at least one blog title to contain "Serum"' })
      .toBe(true);
  }

  async scrollSlowlyToBottom(page) {
  while (true) {
    const reachedBottom = await page.evaluate(() => {
      window.scrollBy(0, 300);

      return (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      );
    });

    await page.waitForTimeout(500);

    if (reachedBottom) {
      const stillAtBottom = await page.evaluate(() =>
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      );

      if (stillAtBottom) break;
    }
  }
}


  async readByCategoryFunctionality(page) {
    if (await this.beautyArchives.isVisible()) {
      await this.beautyArchives.click();
    } else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();
    }
    await expect(this.blogListingTitle.nth(0)).toBeVisible();
    await expect(this.blogListingAuthor).toBeVisible();
    await expect(this.blogListingDate).toBeVisible();
    await expect(this.blogListingTags).toBeVisible();
    const expectedUrls = [
      'https://lovebeautyandplanet.in/blogs/hair',
      'https://lovebeautyandplanet.in/blogs/body',
      'https://lovebeautyandplanet.in/blogs/ingredients',
    ];

    for (let i = 0; i < expectedUrls.length; i++) {
      const option = (await this.readByCategory.nth(i).textContent())
        .trim()
        .toLowerCase();

      await this.readByCategory.nth(i).click();
      const titles = (await this.blogListingTitle.allTextContents())
        .map(title => title.trim().toLowerCase());
      expect(
        titles.some(title => title.includes(option)),
        `Expected at least one blog title to contain "${option}". Found: ${titles.join(', ')}`
      ).toBe(true);
      await this.viewAllBlog.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);
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
    await expect(this.blogListingBanner).toBeVisible();
    await expect(this.brandingStripe).toBeVisible();
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

    await expect(this.blogDetailsPageReadStoriesImage.nth(0)).toBeVisible();
    await expect(this.blogDeatailsDate.nth(1)).toBeVisible();
    await expect(this.blogDeatailsAuthorname.nth(1)).toBeVisible();
    const readStoriesTitle = await this.readStoriesTitle.textContent();
    await this.readStoriesTitle.click();
    const blogTitle = await this.blogDetailsPage.textContent();
    expect(blogTitle.toLowerCase()).toContain(readStoriesTitle.toLowerCase());
  }


  async blogPageToPDP(page) {
    if (await this.beautyArchives.isVisible()) {

      // Desktop
      await this.beautyArchives.click();

    } else if (await this.hamburgerMenu.isVisible()) {

      // Mobile
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();

    }

    await this.blogTitle.nth(2).waitFor();
    await this.blogTitle.nth(2).click();
    const productTitle = (await this.blogProductTitle.nth(0).textContent())
      .trim()
      .toLowerCase();

    await this.blogProductImage.nth(0).click();

    const pdpProducts = (await this.pdpProductTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(pdpProducts).toContain(productTitle);
  }
  async blogPageNotifyMe(page) {

    if (await this.beautyArchives.isVisible()) {

      // Desktop
      await this.beautyArchives.click();

    } else if (await this.hamburgerMenu.isVisible()) {

      // Mobile
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();

    }

    await this.blogTitle.nth(0).waitFor();
    await this.blogTitle.nth(0).click();
    await this.blogPageNotify.click();
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


  async blogPageATC() {

    if (await this.beautyArchives.isVisible()) {

      // Desktop
      await this.beautyArchives.click();

    } else if (await this.hamburgerMenu.isVisible()) {

      // Mobile
      await this.hamburgerMenu.click();
      await this.beautyArchivesMobile.click();

    }

    await this.blogTitle.nth(2).waitFor();
    await this.blogTitle.nth(2).click();
    const blogTitle = await this.blogDetailsPage.textContent();
    const productTitle = await this.blogProductTitle.nth(0).textContent();

    const blogWords = new Set(
      blogTitle.toLowerCase().match(/[a-z0-9]+/g) ?? []
    );
    const productWords = productTitle.toLowerCase().match(/[a-z0-9]+/g) ?? [];

    expect(
      productWords.some(word => blogWords.has(word)),
      `Expected at least one word from "${productTitle}" to appear in "${blogTitle}"`
    ).toBe(true);

    await expect(this.blogProductCatagory).toBeVisible();
    await expect(this.blogProductTitle).toBeVisible();
    await expect(this.blogProductVariant).toBeVisible();
    await expect(this.blogProductPrice).toBeVisible();
    await expect(this.blogProductImage).toBeVisible();



    await this.blogATCButton.first().click();
    await expect(this.ATCSuccessMessage).toBeVisible();
    await expect(this.cartCount).toHaveText('1');
    await this.viewcartButton.click();
    await this.page.waitForTimeout(5000);

    const cartTitle =
      await this.cartproductTitle.first().textContent();

    expect(cartTitle.toLowerCase())
      .toContain(productTitle.toLowerCase());

    await this.closeCart.click();
    await this.quantityPlus.click();
    await expect(this.cartCount).toHaveText('2');
    await this.quantityMinus.click();
  }

  async contactUsPageChackshuRedirection(page) {

    if (await this.contactUs.isVisible()) {
      await this.contactUs.click();
    } else if (await this.quicklinks.isVisible()) {
      await this.quicklinks.click();
      await this.contactUsMobile.nth(3).click();
    }


    const newTabPromise = page.waitForEvent('popup');

    await this.contactUsPgaeChakshuLink.click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL('https://sancharsaathi.gov.in/sfc/');
  }
  async conatctUsPageStaticLinksRedirection(page) {
    if (await this.contactUs.isVisible()) {
      await this.contactUs.click();
    } else if (await this.quicklinks.isVisible()) {
      await this.quicklinks.click();
      await this.contactUsMobile.nth(3).click();
    }

    const expectedUrls = [
      'https://lovebeautyandplanet.in/pages/terms-conditions-1',
      'https://www.unilevernotices.com/privacy-notices/india-english.html',
      'https://www.hul.co.in/brands/',
      'https://www.unilevernotices.com/privacy-notices/india-english.html',
    ];

    for (let i = 0; i < expectedUrls.length; i++) {
      // Start listening before the click so a fast-opening tab isn't missed.
      const popupPromise = page.waitForEvent('popup', { timeout: 2000 })
        .catch(() => null);

      await this.contactUsStaticPageLinks.nth(i).click();

      const popup = await popupPromise;

      if (popup) {
        await expect(popup).toHaveURL(expectedUrls[i]);
        await popup.close();
      } else {
        await expect(page).toHaveURL(expectedUrls[i]);
        await page.goBack();
        await expect(this.contactUsStaticPageLinks.nth(i)).toBeVisible();
      }
    }
  }
  async cautionNoticeVisibility(page) {
    await expect(this.cautionNotice).toBeVisible();

    const newTabPromise = page.waitForEvent('popup');

    await this.chakshuPortalLink.click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL('https://sancharsaathi.gov.in/sfc/');
  }

  async mobileSocialLinksRedirection(page) {
    for (let i = 0; i < 3; i++) {
      await expect(this.mobileSocialLinks.nth(i)).toBeVisible();
    }
  }
  async footerContactAndLogo(page) {
    if (await this.haveAQuerries.isVisible()) {
      await this.haveAQuerries.click();
      await expect(this.callUsMobile).toBeVisible();
      await expect(this.emailUsMobile).toBeVisible();
      await expect(this.footerLogoMobile).toBeVisible();
      await expect(this.footerBeBeautifulMobile).toBeVisible();
    }
    else if (await this.callUs.isVisible()) {
      await this.callUs.scrollIntoViewIfNeeded();
      await expect(this.callUs).toBeVisible();
      await expect(this.emailUs).toBeVisible();
      await expect(this.footerLogo).toBeVisible();
      await expect(this.footerBeBeautiful).toBeVisible();
    }

  }
  async reelSectionVideoAndThumbnail(page) {
    for (let i = 0; i < await this.reelVideo1.count(); i++) {
      await this.reelVideo1.nth(i).scrollIntoViewIfNeeded();
      await expect(this.reelVideo1.nth(i)).toBeVisible();
      await expect(this.reelThumbnail.nth(i)).toBeVisible();
    }
  }
  async herobannerNavigationArrows(page) {
    await this.heroBannerRight.click();
    await this.heroBannerLeft.click();
    await expect(this.bannerVideo.nth(0)).toBeVisible();

  }
  async bannerVideoVisibility(page) {
    if (await this.bannerVideo.nth(0).isVisible()) {
      await expect(this.bannerVideo.nth(0)).toBeVisible();
    }
    else if (await this.bannerVideo.nth(1).isVisible()) {
      await expect(this.bannerVideo.nth(1)).toBeVisible();
    }
  }
  async TrackOrderFunctionalityRTO(page) {

    if (await this.footerTrackOrder.isVisible()) {

      await this.footerTrackOrder.click();

    } else if (await this.quickLinksMobile.isVisible()) {

      await this.quickLinksMobile.click();
      await this.footerTrackOrderMobile.click();

    }

    await expect(this.page).toHaveURL(
      "https://lovebeautyandplanet.in/pages/track-order"
    );

    const orderId = "LB263618";

    await this.trackInput.fill(orderId);

    await this.trackOrderSubmit.click();

    await expect(this.trackOrderID).toHaveText(orderId);

    // Verify RTO status color
    await expect(this.rtoStatus).toHaveCSS(
      "color",
      "rgb(76, 175, 80)"
    );

    // Verify RTO status
    await expect(this.status).toHaveText("Return to origin");

    // Get order placed date from LBP
    const orderPlacedon = (
      await this.orderPlacedOn.textContent()
    ).trim();

    // Open Shiprocket in new tab
    const newPagePromise = this.page
      .context()
      .waitForEvent("page");

    await this.trackUrl.click();

    const newPage = await newPagePromise;

    await newPage.waitForLoadState();

    // Verify Shiprocket URL
    await expect(newPage).toHaveURL(/shiprocket\.co/);

    // IMPORTANT:
    // This locator is created on the NEW TAB
    const shipRocketRTOStatus = newPage.locator(
      'xpath=(//span[@class="pull-right fs-12px right_info"])[2]'
    );

    await expect(shipRocketRTOStatus).toBeVisible();

    // Get order placed date from Shiprocket
    const orderPlacedOnShipRocket = (
      await shipRocketRTOStatus.textContent()
    ).trim();

    // Compare dates
    await expect(orderPlacedon).toContain(orderPlacedOnShipRocket);
  }
  async TrackOrderFunctionalityOrderDelivered(page) {
    if (await this.footerTrackOrder.isVisible()) {
      await this.footerTrackOrder.click();
    } else if (await this.quickLinksMobile.isVisible()) {
      await this.quickLinksMobile.click();
      await this.footerTrackOrderMobile.click();
    }
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/track-order");
    const orderId = "LB265680";
    await this.trackInput.fill(orderId);
    await this.trackOrderSubmit.click();
    await expect(this.trackOrderID).toHaveText(orderId);
    await expect(this.orderDelivered).toHaveCSS(
      "color",
      "rgb(76, 175, 80)"
    );
    await expect(this.status).toHaveText("Order delivered");
    const newPagePromise = this.page.context().waitForEvent("page");
    await this.trackUrl.click();
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/delhivery\.com/);

  }

  async TrackOrderFunctionalityCancelledOrder(page) {
    if (await this.footerTrackOrder.isVisible()) {
      await this.footerTrackOrder.click();
    } else if (await this.quickLinksMobile.isVisible()) {
      await this.quickLinksMobile.click();
      await this.footerTrackOrderMobile.click();
    }
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/track-order");
    await this.trackInput.fill('');

    const dialogPromise = new Promise(resolve => {
      this.page.once('dialog', async dialog => {
        const message = dialog.message();
        await page.waitForTimeout(2000);
        await dialog.accept(); // Click OK
        resolve(message);
      });
    });

    await this.trackOrderSubmit.click();

    const alertMessage = await dialogPromise;
    expect(alertMessage).toBe(
      'Please enter an Order ID or AWB tracking number'
    );

    await this.trackInput.fill("LB266430");
    await this.trackOrderSubmit.click();
    await expect(this.orderCancelledMessage).toBeVisible();
  }



  async orderPageFunctionality(page) {
    // Login
    if (await this.accountLink.isVisible()) {
      await this.accountLink.click();
    } else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.loginMobile.click();
    }

    await this.emailTextField.fill("mvtarapur@gmail.com");
    await this.passwordTextFiled.fill("123456789");
    await this.loginButton.click();

    // Verify Order History
    await expect(this.orderHistory).toBeVisible();

    // Get order details from Order History
    const orderNumber = (await this.orderNumber.textContent()).trim();
    const orderDate = (await this.orderdate.textContent()).trim();
    const fullFilmentStatus = (
      await this.fullFilmentStatus.textContent()
    ).trim();
    const paymentStatus = (await this.paymentStatus.textContent()).trim();
    const orderPrice = (await this.orderPrice.textContent()).trim();

    // Open Order Details
    await this.orderNumber.click();

    await expect(this.orderDetailsHeading).toBeVisible();
    await expect(this.billingAddress).toBeVisible();
    await expect(this.shippingAddress).toBeVisible();

    // Get details from Order Details page
    const orderDetailsHeading = (
      await this.orderDetailsHeading.textContent()
    ).trim();

    const paymentStatus2 = (
      await this.paymentStatus2.textContent()
    ).trim();

    const fullFilmentStatus2 = (
      await this.fullFilmentStatus2.textContent()
    ).trim();

    const orderPrice2 = (
      await this.orderPrice2.textContent()
    ).trim();

    const orderDate2 = (
      await this.orderDate.textContent()
    ).trim();

    // --------------------------------------------------
    // Normalize Order Number
    // --------------------------------------------------
    const normalizedOrderNumber = orderNumber.replace(/\s+/g, " ").trim();

    // --------------------------------------------------
    // Normalize Date
    // Example:
    // Order History  : July 3, 2024
    // Order Details  : July 3, 2024 at 1:17 pm
    // --------------------------------------------------
    const orderDateOnly = orderDate2
      .split(/\s+at\s+/i)[0]
      .trim();

    // --------------------------------------------------
    // Normalize Fulfillment Status
    // Example:
    // Order History  : Unfulfilled
    // Order Details  : Fulfillment Status: Unfulfilled
    // --------------------------------------------------
    const fulfillmentStatusOnly = fullFilmentStatus2
      .replace(/^Fulfillment Status:\s*/i, "")
      .replace(/\s+/g, " ")
      .trim();

    // --------------------------------------------------
    // Normalize Payment Status
    // Example:
    // Order History  : Paid
    // Order Details  : Payment Status: Paid
    // --------------------------------------------------
    const paymentStatusOnly = paymentStatus2
      .replace(/^Payment Status:\s*/i, "")
      .replace(/\s+/g, " ")
      .trim();

    // --------------------------------------------------
    // Normalize Price
    // Removes spaces, commas and currency symbols
    // Example:
    // ₹1,299.00 -> 1299.00
    // Rs. 1,299.00 -> 1299.00
    // --------------------------------------------------
    const normalizedOrderPrice = orderPrice
      .replace(/[₹$€£,\s]/g, "")
      .replace(/^Rs\.?/i, "")
      .trim();

    const normalizedOrderPrice2 = orderPrice2
      .replace(/[₹$€£,\s]/g, "")
      .replace(/^Rs\.?/i, "")
      .trim();

    // --------------------------------------------------
    // Assertions
    // --------------------------------------------------

    // Order Number
    await expect(orderDetailsHeading).toContain(normalizedOrderNumber);

    // Order Date
    await expect(orderDateOnly).toBe(orderDate);

    // Fulfillment Status
    await expect(fullFilmentStatus).toBe(fulfillmentStatusOnly);

    // Payment Status
    await expect(paymentStatus).toBe(paymentStatusOnly);

    // Order Price
    await expect(normalizedOrderPrice2).toBe(normalizedOrderPrice);
  }




  async reelPopupFunctionality(page) {

    await this.trendingOnSocialSection.scrollIntoViewIfNeeded();
    await this.reelVideoAuto.first().click();
    await this.reelPopupCloseButton.click();

    const reelPrice = (await this.reelPrice.first().textContent())
      .trim()
      .toLowerCase();

    const productName = (await this.reelProductTitle.first().textContent())
      .trim()
      .toLowerCase();

    // Open reel popup
    await this.reelProductTitle.first().click();

    // Wait for popup
    await expect(this.reelPopupTitle.first()).toBeVisible();

    // Get initial popup details
    const reelPopupPrice = (await this.reelPopupPrice.allTextContents())
      .map(product => product.trim().toLowerCase());

    const reelPopupTitles = (await this.reelPopupTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    expect(reelPopupPrice).toContain(reelPrice);
    expect(reelPopupTitles).toContain(productName);
    await expect(this.reelDiscription).toBeVisible();
    await expect(this.reelImage).toBeVisible();
    await expect(this.reelSlider).toBeVisible();
    //verify volume icon
    await expect(this.reelToolTip).toBeVisible();
    await this.reelVolume.click();
    await expect(this.reelToolTip).not.toBeVisible();
    await this.reelLike.click();
    await expect(this.reelLiked).toBeVisible();

    // Next reel
    await this.reelNext.click();

    // Previous reel
    await this.reelPrev.click();

    // Get title after Next → Previous
    const reelPopupTitles2 = (await this.reelPopupTitle.allTextContents())
      .map(product => product.trim().toLowerCase());

    // Verify it returned to the original reel
    expect(reelPopupTitles2).toEqual(reelPopupTitles);
    // await this.reelShare.click();
    //cant handle share as default windows popup willshow up 
    await this.reelVideo.nth(0).click();
    await expect(this.reelPlay).toBeVisible();
    await this.reelVideo.nth(0).click();
    await expect(this.reelPlay).not.toBeVisible();
    await page.waitForTimeout(2000);
    await this.reelPopupCloseButton.click();
    await expect(this.reelPopupCloseButton).not.toBeVisible();
  }

  async newsletterRedirections() {
    await expect(this.newsletterLegal).toBeVisible();
    // Click Unilever Brands and capture the new tab
    const [brandsPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.unileverBrands.click()
    ]);

    await brandsPage.waitForLoadState();

    await expect(brandsPage).toHaveURL(
      'https://www.hul.co.in/brands/'
    );

    // Close the new tab
    await brandsPage.close();

    // Click Privacy Notice and capture the new tab
    const [privacyPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.privacyNotice.click()
    ]);

    await privacyPage.waitForLoadState();

    await expect(privacyPage).toHaveURL(
      'https://www.unilevernotices.com/privacy-notices/india-english.html'
    );

    // Close the new tab
    await privacyPage.close();
  }
  async newsletterErrorValidation() {
    await this.newsletterTextField.fill(' ');
    await this.concentCheckBox.click();
    await this.submitNewsletterButton.click();
    await this.newsletterTextField.fill('shravan');
    await this.concentCheckBox.click();
    await this.submitNewsletterButton.click();
    await expect(this.newsletterConsentvisibility).toBeVisible();
    await expect(this.validEmailError).toBeVisible();
    await expect(this.concentError).toBeVisible();
    await this.concentCheckBox.click();
    await this.submitNewsletterButton.click();
    await expect(this.validEmailError).toBeVisible();

  }
  async newsletterSuccessValidation() {
    const email = generateUser().email;
    await this.newsletterTextField.fill(email);
    await this.submitNewsletterButton.click();
    await expect(this.concentError).toBeVisible();
    await this.concentCheckBox.click();
    await this.submitNewsletterButton.click();
    await expect(this.SuccessMessage).toBeVisible();
  }
  async quantitySelectorunctionality() {
    await this.addToCartButton.first().click();
    await expect(this.cartCount).toHaveText('1');
    await this.quantityPlus.click();
    await expect(this.cartCount).toHaveText('2');
    await this.quantityMinus.click();
    await expect(this.cartCount).toHaveText('1');

  }

  async loginFunctionality(page) {
    if (await this.accountLink.isVisible()) {
      await this.accountLink.click();
    } else if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
      await this.loginMobile.click();
    } await this.emailTextField.fill("tester1998@gmail.com");
    await this.passwordTextFiled.fill("Shravan@1");
    await this.loginButton.click();
    // await this.accountLink.click();
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
    await expect(this.blogimage).toBeVisible();
    await expect(this.blogContent).toBeVisible();
    await expect(this.blogFaq).toBeVisible();
    await expect(this.blogAuthor).toBeVisible();
    await expect(this.featuredBlog).toBeVisible();
  }






  async contactUsFunctionality(page) {

    await this.contactUs.click();
    await expect(this.contactUsHeading).toBeVisible();
    await expect(this.customerService).toBeVisible();
    for (let i = 0; i < await this.customerServiceDetails.count(); i++) {
      await expect(this.customerServiceDetails.nth(i)).toBeVisible();
    }
    await expect(this.contactUsCautionNotice).toBeVisible();
    await this.contactUsName.fill('test');
    await this.contactUsLastName.fill('user');
    await this.contactUsEmail.fill('testerfromautumn@example.com');
    await this.contactUsPhone.fill('9898767654');
    await this.contactUsMessage.fill('this is for testing purpose please ignore <%^&*5678t78ghj>');
    await this.contactUsOther.click();
    await expect(this.contactUsPageConcent).toBeVisible();
    await expect(this.contactUsCautionNotice).toBeVisible();
    await this.contactUsCheckbox.click();
    await this.contactUsSubmit.click();
    await expect(this.contactUsSuccess).toBeVisible();
    await this.tarckOrder.click();
    await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/pages/track-order");
  }
  async contactUsErrorFunctionality(page) {

    await this.contactUs.click();
    await this.contactUsSubmit.click();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.emailError).toBeVisible();
    await expect(this.concernError).toBeVisible();
    await this.contactUsEmail.fill('testerfromautumn');
    await this.contactUsPhone.fill('9898767^&^%^&');
    await this.contactUsSubmit.click();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.emailError).toBeVisible();
    await expect(this.concernError).toBeVisible();
  }
  async contactUsErrorFunctionalityMobile(page) {
    await this.quicklinks.click();
    await this.contactUsMobile.nth(3).click();
    await this.contactUsSubmit.click();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.emailError).toBeVisible();
    await expect(this.concernError).toBeVisible();
    await this.contactUsEmail.fill('testerfromautumn');
    await this.contactUsPhone.fill('9898767%^&');
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
    for (let i = 0; i < await this.customerServiceMobileDetails.count(); i++) {
      await expect(this.customerServiceMobileDetails.nth(i)).toBeVisible();
    }
    await this.contactUsName.fill('test');
    await this.contactUsLastName.fill('user');
    await this.contactUsEmail.fill('testerfromautumn@example.com');
    await this.contactUsPhone.fill('9898767654');
    await this.contactUsMessage.fill('this is for testing purpose please ignore <%^&*5678t78ghj>');
    await this.contactUsOther.click();
    await expect(this.contactUsPageConcent).toBeVisible();
    await expect(this.contactUsCautionNotice).toBeVisible();
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
    await expect(this.compareAtPrice).toBeVisible();
    await expect(this.discountPercentage).toBeVisible();
    await this.productCardATC.click();
    await expect(this.ATCSuccessMessage).toBeVisible();
    await expect(this.cartCount).toHaveText('1');
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
    await expect(this.reelPopupCartCount).toHaveCount(1);
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
    const bannerCount = await this.heroBanner.count();

    console.log(`Total Hero Banners: ${bannerCount}`);
    console.log(`Total Slider Buttons: ${await this.heroBannerSlider.count()}`);

    for (let i = 0; i < bannerCount; i++) {

      // Re-fetch slider locator after every navigation
      const slider = this.heroBannerSlider.nth(i);

      await slider.scrollIntoViewIfNeeded();
      await slider.waitFor({ state: 'visible' });
      await slider.click();

      // Get corresponding hero banner
      const banner = this.heroBanner.nth(i);

      // Fetch href dynamically
      const href = await banner.getAttribute('href');

      expect(href).toBeTruthy();

      const expectedUrl = new URL(href, page.url()).toString();

      console.log(`Banner ${i + 1}: ${expectedUrl}`);

      // Click banner
      await banner.click();

      // Verify URL
      await expect(page).toHaveURL(expectedUrl);

      // Go back
      await page.goBack();

      // Wait for homepage to load again
      await page.waitForLoadState('domcontentloaded');

      // Wait for hero slider to be available again
      await this.heroBannerSlider.first().waitFor({ state: 'visible' });
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

      const productTitles = await this.plpProductTitle.allTextContents();

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
    if (await this.productCardNextNavigation.nth(0).isVisible()) {
      await this.productCardNextNavigation.nth(0).click();
      await this.productCardPrevNavigation.nth(0).click();
    }
    else if (await this.productCradSliderDot.isVisible()) {
      await this.productCradSliderDot.click();
    }

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
    await this.collectionTabs.nth(1).click();

    const visibleTitles = await this.combosProductTitle
      .filter({ visible: true })
      .allTextContents();

    expect(visibleTitles.length, 'Expected at least 4 visible combo products')
      .toBeGreaterThanOrEqual(4);

    for (const [index, title] of visibleTitles.slice(0, 4).entries()) {
      expect(
        title.toLowerCase(),
        `Visible product ${index + 1} should contain "combo": ${title}`
      ).toContain('combo');
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
      'https://lovebeautyandplanet.in/collections/tea-tree-and-vetiver',
    ];

    for (let i = 0; i < expectedUrls.length; i++) {
      await this.shopByConcernLinks.nth(i).click();
      await expect(page).toHaveURL(expectedUrls[i]);

      const slug = new URL(expectedUrls[i]).pathname.split('/').pop();
      const keywords = slug.split('-').filter(word => word !== 'and');

      await expect(this.plpProductTitle.first()).toBeVisible();

      const titles = (await this.plpProductTitle.allTextContents())
        .map(title => title.toLowerCase());

      expect(
        titles.some(title => keywords.some(word => title.includes(word))),
        `No product title contains a word from "${slug}". Titles: ${titles.join(' | ')}`
      ).toBe(true);

      await page.goBack();
      await expect(this.shopByConcernLinks.nth(i)).toBeVisible();
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

