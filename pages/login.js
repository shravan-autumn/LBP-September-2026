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
    }

    async registerUser() {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        }
        if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.accountLinkMobile.scrollIntoViewIfNeeded();
            await this.accountLinkMobile.click();
        } await this.createAccountLink.click();
        await this.firstName.waitFor();
        this.user = generateUser();
        await this.firstName.fill(this.user.firstName);
        await this.lastName.fill(this.user.lastName);
        await this.email.fill(this.user.email);
        await this.phone.fill(this.user.phone);
        await this.password.fill(this.user.password);
        await this.confirmPassword.fill(this.user.password);
        await this.consentCheckbox.click();
        await this.registerButton.click();
        await this.accountLink.click();

    }
    async logout() {
        await this.logoutButton.click();
    }


    async login() {
        await this.accountLink.click();
        await this.emailTextField.fill(this.user.email);
        await this.passwordTextFiled.fill(this.user.password);
        await this.loginButton.click();
        await this.accountLink.click();
    }
    async loginNavigation() {
        if (await this.accountLink.isVisible()) {
            await this.accountLink.click();
        }
        if (await this.hamburgerMenu.isVisible()) {
            await this.hamburgerMenu.click();
            await this.accountLinkMobile.scrollIntoViewIfNeeded();
            await this.accountLinkMobile.click();
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
    }
    async registerErrorValidation() {
        await this.createAccountLink.click();
        await this.registerButton.click();
        await expect(this.firstnameerrorMessage).toBeVisible();
        await expect(this.emailErrorMessage).toBeVisible();
        await expect(this.phoneNumberError).toBeVisible();
        await expect(this.passwordErrorMessage).toBeVisible();

    }
    async recoveryEmailErrorValidation() {
         await this.forgotPassword.click();
        await this.submitButton.click();
        await expect(this.recoveryEmailErrorMessage).toBeVisible();
    }
}