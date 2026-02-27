import { Before, QavajsPlaywrightWdioWorld } from '@qavajs/playwright-wdio';

Before({ name: 'launch app' }, async function(this: QavajsPlaywrightWdioWorld) {
    await this.driver.terminateApp('org.reactjs.native.example.wdiodemoapp');
    await this.driver.activateApp('org.reactjs.native.example.wdiodemoapp');
});
