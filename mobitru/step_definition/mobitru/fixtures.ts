import { Before, After } from '@qavajs/core';

Before({name: 'Open App', tags: '@native'}, async function() {
    await this.wdio.driver.terminateApp('com.epam.mobitru.demoapp');
    await this.wdio.driver.activateApp('com.epam.mobitru.demoapp');
});

After({name: 'Close App', tags: '@native'}, async function() {
    await this.wdio.driver.terminateApp('com.epam.mobitru.demoapp');
});