// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 70000,

  expect: {
    timeout: 70000
  },

  fullyParallel: false,
  workers: 1,

  reporter: [['html'], ['list']],

  use: {
    headless: true,
    channel: 'chrome',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ],
      slowMo: 500,
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