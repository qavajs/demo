import { After, Before, QavajsPlaywrightWdioWorld } from '@qavajs/playwright-wdio';

Before({ name: 'launch app' }, async function (this: QavajsPlaywrightWdioWorld) {
    await this.driver.terminateApp('org.wdiodemoapp');
    await this.driver.activateApp('org.wdiodemoapp');
});

After({ name: 'complete' }, async function (this: QavajsPlaywrightWdioWorld, testCase) {
    if (testCase.result?.status === 'FAILED') {
        try {
            console.log('Test failed, appium page source:');
            const pageSource = await this.driver.getPageSource();
            console.log(pageSource);
        } catch (error) {
            console.error('Failed to get page source:', error);
        }
    }
});
