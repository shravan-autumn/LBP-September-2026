import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage.js';
import { Login } from '../pages/login.js';

let hp;
let lp;


test.beforeEach(async ({ page }) => {
  hp = new HomePage(page);
  lp = new Login(page);
  await hp.goto();
  await hp.cookieAccept;
});
test.describe('Login / Account', () => {
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
  test.only('@desktop Login6 Verify recover password error message', async ({ page }) => {
        await lp.loginNavigation();
    await lp.recoveryEmailErrorValidation();
  })
});

