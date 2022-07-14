const { After, Before, When, setDefaultTimeout } = require('@cucumber/cucumber');
// const defaultTimeouts= require('./defaultTimeouts');
const { remote }= require('webdriverio');
const { po }= require('@qavajs/po');

setDefaultTimeout(60000);

Before(async function () {
    global.device = global.browser;
});

When('sleep', async function() { 
    await device.pause(5000);
})