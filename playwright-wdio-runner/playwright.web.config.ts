import { defineConfig, devices } from '@playwright/test';
import { WdioOptions } from '@qavajs/playwright-wdio';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<WdioOptions>({
    testMatch: 'web.config.ts',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: 1,
    /* Opt out of parallel tests on CI. */
    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['html', { open: 'never', outputFolder: 'report' }],
        ['junit', { outputFile: 'report/report.xml' }]
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        // headless: false
        trace: 'on'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chrome',
            use: {},
        },
        {
            name: 'iosSafari',
            use: {
                wdioLaunchOptions: {
                    port: 4723,
                    capabilities: {
                        platformName: 'iOS',
                        'appium:automationName': 'XCUITest',
                        'appium:browserName': 'Safari',
                    }
                }
            },
        }
    ]
});
