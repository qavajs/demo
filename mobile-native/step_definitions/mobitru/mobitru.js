const {Before, After} = require('@cucumber/cucumber');

Before({name: 'Install app in Mobitru'}, async function() {
    // await driver.removeApp('digital.metro.companion.metro.beta');
    // const headers = new Headers();
    // headers.append('Authorization', `Bearer ${process.env.API_KEY}`);
    // await fetch(
    //     `https://app.mobitru.com/billing/unit/${process.env.BILLING_UNIT}/automation/api/storage/install/${process.env.UDID}/${process.env.APP_FILE_ID}`,
    //     { headers }
    // );
    await driver.terminateApp('com.wdiodemoapp');
    await driver.activateApp('com.wdiodemoapp');
});
