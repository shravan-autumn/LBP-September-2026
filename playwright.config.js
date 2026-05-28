// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 120000,

  expect: {
    timeout: 120000
  },

  fullyParallel: false,
  workers: 1,

  // Retry failed tests
  retries: 2,

  reporter: [['html'], ['list']],

  use: {
    headless: false,
    channel: 'chrome',

    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'on-first-retry',

    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ],
      slowMo: 1000,
    },
  },

  projects: [

    {
      name: 'desktop',
      grep: /@desktop|@all/,
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 }
      }
    },

    {
      name: 'mobile',
      grep: /@mobile|@all/,
      use: {
        ...devices['Pixel 5']
      }
    }

  ]
});