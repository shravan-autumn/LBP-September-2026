// @ts-check
import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  timeout: 120000,

  expect: {
    timeout: 120000,
  },

  fullyParallel: false,
  workers: 1,

  forbidOnly: isCI,
  retries: isCI ? 2 : 0,

  reporter: [['html'], ['list']],

  use: {
    // ✅ correct way: CI = headless, local = headed
    headless: isCI ? true : false,

    channel: 'chrome',

    // ✅ consistent viewport handling

    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',

    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-dev-shm-usage',

        // ✅ headless-safe window size (important for CI rendering)
        isCI ? '--window-size=1920,1080' : '--start-maximized',
      ],

      slowMo: isCI ? 1000 : 1000,
    },
  },

  projects: [
    {
      name: 'desktop',
      grep: /@desktop|@all/,
      use: {
        browserName: 'chromium',

        // optional but good for consistency
        //viewport: { width: 1440, height: 900 },
        //headless =false, viewport = null is required to open the browser in full screen
        viewport: null,

      },
    },

    {
      name: 'mobile',
      grep: /@mobile|@all/,
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});