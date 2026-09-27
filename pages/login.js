import { expect } from '@playwright/test';
import { generateUser } from '../pages/utils.js';


exports.Login = class Login {

    constructor(page) {
        this.page = page;
        this.accountLink = page.locator('[class="header__icon header__icon--account link focus-inset"]');
        this.accountLinkMobile = page.locator('(//a[contains(text(),"Login")])[2]');
        this.createAccountLink = page.locator('[href="/account/register"]');
        this.emailTextField = page.locator('[id="CustomerEmail"]');
        this.passwordTextFiled = page.locator('[id="CustomerPassword"]');
        this.loginButton = page.locator('[class="login-btn"]');
        this.firstName = page.locator('[id="RegisterForm-FirstName"]');
        this.lastName = page.locator('[id="RegisterForm-LastName"]');
        this.email = page.locator('[id="RegisterForm-email"]');
        this.phone = page.locator('[id="RegisterForm-Phone"]');
        this.password = page.locator('[id="RegisterForm-password"]');
        this.confirmPassword = page.locator('[id="confirm_password"]');
        this.registerButton = page.locator('[id="customer-register-submit"]');
        this.consentCheckbox = page.locator('[id="myCheckbox_reg"]');
        this.accountHeading = page.locator('[class="customer__title"]');
        this.logoutButton = page.locator('//a[@href="/account/logout"]');
        this.hamburgerMenu = page.locator('[id="openMenu"]');
        this.forgotPassword = page.locator('[class="recovery"]');
        this.recoveryEmail = page.locator('[id="RecoverEmail"]');
        this.submitButton = page.locator('//button[contains(text(),"SUBMIT")]');
        this.resetPasswordMessage = page.locator('[class="form__message"]');
        // store user data
        this.user = null;
        this.loginError = page.locator('[class="errors"]');
        this.firstnameerrorMessage = page.locator('[id="RegisterForm-first_name-error"]');
        this.emailErrorMessage = page.locator('[id="RegisterForm-email-error"]');
        this.phoneNumberError = page.locator('[id="RegisterForm-Phone-error"]');
        this.passwordErrorMessage = page.locator('[id="RegisterForm-password-error"]');
        this.recoveryEmailErrorMessage = page.locator('[id="RecoverEmail-email-error"]');
        this.loginMobile = page.locator("(//a[contains(text(),'Login')])[2]");
        this.accountMobile = page.locator('(//a[@href="/account"])[1]');
        this.loginPageImage = page.locator('[class="login-page"]');
        this.loginConcent = page.locator('//div[@class="consent-message"]');
        this.loginPageStaticLinks = page.locator('//div[@class="consent-message"]//a');
        this.eyeIcon = page.locator('[alt="password show icon"]');
        this.passwordVisible = page.locator('//div[@class="field"]//input[@type="text"]');
        this.emailPlaceHolder = page.locator('//label[@for="CustomerEmail"]');
        this.passwordPlaceHolder = page.locator('//label[@for="CustomerPassword"]');
        this.emailPassError = page.locator('//li[contains(text(),"Incorrect email or password.")]');
        this.resetPasswordHeading = page.locator('[id="recover"]');
        this.resetPasswordInstrauctionText = page.locator('//p[contains(text(),"We will send you an email to reset your password")]');
        this.resetPasswordEmailPlaceholder = page.locator('//label[@for="RecoverEmail"]');
        this.resetPasswordCancel = page.locator('//a[contains(text(),"Cancel")]');
        this.staticLinks = page.locator('//div[@class="popup-option"]//a');
        this.registerPageLoginLink = page.locator('//a[contains(text(),"login")]');
        this.registerConcent = page.locator('[class="popup-option"]');
        this.passwordDontMatch = page.locator('[id="confirmMessage"]');
        this.accountTitle=page.locator('[class="customer__title"]');
        this.orderHistory=page.locator('//h2[contains(text(),"Order history")]');
        this.accountdetails=page.locator('//h2[contains(text(),"Account details")]');
    }

     async loginapageVisibilityandlogout() {
        await expect(this.accountTitle).toBeVisible();
        await expect(this.orderHistory).toBeVisible();
        await expect(this.accountdetails).toBeVisible();
        await this.logoutButton.click();
    }
    async loginNavigation() {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        } else if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.loginMobile.click();
        }

        await expect(this.loginPageImage).toBeVisible();
        await expect(this.loginConcent).toBeVisible();
        await expect(this.eyeIcon).toBeVisible();
        await expect(this.emailPlaceHolder).toBeVisible();
        await expect(this.passwordPlaceHolder).toBeVisible();

        // First link opens in the same tab.
        await this.loginPageStaticLinks.nth(0).click();
        await expect(this.page).toHaveURL(
            'https://lovebeautyandplanet.in/pages/terms-conditions-1'
        );

        await this.page.goBack();
        await expect(this.loginPageStaticLinks.nth(1)).toBeVisible();

        // Second link opens in a child tab.
        const [childPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.loginPageStaticLinks.nth(1).click(),
        ]);

        await expect(childPage).toHaveURL(
            'https://www.unilevernotices.com/privacy-notices/india-english.html'
        );

        await childPage.close();
    }
    async registerUser(page) {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        } else if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.loginMobile.click();
        }
        await this.createAccountLink.click();

        const expectedUrls = [
            'https://lovebeautyandplanet.in/pages/terms-conditions-1',
            'https://www.unilevernotices.com/privacy-notices/india-english.html',
            'https://www.hul.co.in/brands/',
            'https://www.unilevernotices.com/privacy-notices/india-english.html',
        ];

        for (let i = 0; i < expectedUrls.length; i++) {
            const popupPromise = this.page
                .waitForEvent('popup', { timeout: 2000 })
                .catch(() => null);

            await this.staticLinks.nth(i).click();
            const popup = await popupPromise;

            if (popup) {
                await expect(popup).toHaveURL(expectedUrls[i]);
                await popup.close();
            } else {
                await expect(this.page).toHaveURL(expectedUrls[i]);
                await this.page.goBack();
                await expect(this.staticLinks.nth(i)).toBeVisible();
            }
        }

        await this.firstName.waitFor();
        this.user = generateUser();
        await this.firstName.fill(this.user.firstName);
        await this.lastName.fill(this.user.lastName);
        await this.email.fill(this.user.email);
        await this.phone.fill(this.user.phone);
        await this.password.fill(this.user.password);
        await this.confirmPassword.fill(this.user.password);
        await this.consentCheckbox.click();
        await expect(this.registerConcent).toBeVisible();
        await expect(this.registerPageLoginLink).toBeVisible();
        await this.registerButton.click();
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        } else if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.accountMobile.click();
        }
    }
   


    async login() {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        } else if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.loginMobile.click();
        } await this.emailTextField.fill(this.user.email);
        await this.passwordTextFiled.fill(this.user.password);
        await this.loginButton.click();
        //await this.accountLink.click();
    }
    async loginNavigation() {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        } else if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.loginMobile.click();
        }
    }
    async forgotPasswordFunctionality() {
        await this.forgotPassword.click();
        await this.recoveryEmail.fill("shravan@weareautumn.com");
        await this.submitButton.click();
        await expect(this.resetPasswordMessage).toBeVisible();
    }

    async loginErrorValidation() {
        await this.loginButton.click();
        await expect(this.loginError).toBeVisible();
        await this.emailTextField.fill("asas");
        await this.passwordTextFiled.fill("Password << Is >> Visible");
        await this.eyeIcon.click();
        await expect(this.passwordVisible).toBeVisible();
        await this.eyeIcon.click();
        await expect(this.passwordVisible).not.toBeVisible();
        await this.loginButton.click();
        await expect(this.emailPassError).toBeVisible();
        await this.emailTextField.fill("testwr678@gmal.com");
        await this.passwordTextFiled.fill("*");
        await expect(this.emailPassError).toBeVisible();

    }
    async registerErrorValidation() {
        await this.createAccountLink.click();
        await this.firstName.waitFor();
        this.user = generateUser();




        await this.firstName.fill("");
        await this.lastName.fill("");
        await this.email.fill("");
        await this.phone.fill("");
        await this.password.fill("");
        await this.confirmPassword.fill("");
        await this.consentCheckbox.click();
        await this.registerButton.click();
        await expect(this.firstnameerrorMessage).toBeVisible();
        await expect(this.emailErrorMessage).toBeVisible();
        await expect(this.phoneNumberError).toBeVisible();
        await expect(this.passwordErrorMessage).toBeVisible();
        await this.page.reload();
        await this.firstName.fill(this.user.firstName);
        await this.lastName.fill(this.user.lastName);
        await this.email.fill("ssasa%^&");
        await this.phone.fill("11111");
        await this.password.fill("12345");
        await this.confirmPassword.fill("1234567");
        await this.eyeIcon.nth(0).click();
        await this.eyeIcon.nth(1).click();
        await expect(this.passwordVisible.nth(2)).toBeVisible();
        await expect(this.passwordVisible.nth(3)).toBeVisible();
        await this.consentCheckbox.click();
        await this.registerButton.click();
        await expect(this.passwordDontMatch).toBeVisible();
        await expect(this.phoneNumberError).toBeVisible();
        await this.page.reload();
        await this.firstName.fill(this.user.firstName);
        await this.lastName.fill(this.user.lastName);
        await this.email.fill("ssasa%^&");
        await this.phone.fill("dsdsds%^&");
        await this.password.fill("12345");
        await this.confirmPassword.fill("1234567");
        await this.eyeIcon.nth(0).click();
        await this.eyeIcon.nth(1).click();
        await expect(this.passwordVisible.nth(2)).toBeVisible();
        await expect(this.passwordVisible.nth(3)).toBeVisible();
        await this.consentCheckbox.click();
        await this.registerButton.click();
        await expect(this.passwordDontMatch).toBeVisible();
        await expect(this.phoneNumberError).toBeVisible();

    }
    async recoveryEmailErrorValidation() {
        await this.forgotPassword.click();
        await expect(this.resetPasswordHeading).toBeVisible();
        await expect(this.resetPasswordInstrauctionText).toBeVisible();
        await this.submitButton.click();
        await expect(this.recoveryEmailErrorMessage).toBeVisible();
        await expect(this.resetPasswordEmailPlaceholder).toBeVisible();
        await this.resetPasswordCancel.click();
        await expect(this.page).toHaveURL("https://lovebeautyandplanet.in/account/login#login");
    }
    async recoveryEmailSuccessValidation() {
        await this.forgotPassword.click();
        await this.resetPasswordEmailPlaceholder.fill("shravan@weareautumn.com");
        await this.submitButton.click();
        await expect(this.resetPasswordMessage).toBeVisible();
        a
    }
}