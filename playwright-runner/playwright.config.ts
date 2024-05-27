import { defineConfig, devices } from '@playwright/test';

process.env.CONFIG = 'config.ts';
process.env.PROFILE = 'default';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: 'node_modules/@qavajs/playwright-runner-adapter/adapter',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 2,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
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
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                hasTouch: true
            },
        }
    ]
});
