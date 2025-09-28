import { After, QavajsPlaywrightWdioWorld } from '@qavajs/playwright-wdio';

After(async function(this: QavajsPlaywrightWdioWorld) {
    await this.driver.takeScreenshot();
});