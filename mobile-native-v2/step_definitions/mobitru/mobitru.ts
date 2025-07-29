import { Before, After } from '@qavajs/core';

Before({name: 'Install app in Mobitru'}, async function() {
    await this.wdio.driver.removeApp('com.wdiodemoapp');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${process.env.API_KEY}`);
    await fetch(
        `https://app.mobitru.com/billing/unit/${process.env.BILLING_UNIT}/automation/api/storage/install/${process.env.UDID}/${process.env.APP_FILE_ID}`,
        { headers }
    );
    await this.wdio.driver.terminateApp('com.wdiodemoapp');
    await this.wdio.driver.activateApp('com.wdiodemoapp');
});
