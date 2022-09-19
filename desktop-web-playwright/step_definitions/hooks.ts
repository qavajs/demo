import { After, Before } from '@cucumber/cucumber';
import defaultTimeouts from './defaultTimeouts';
import { po } from '@qavajs/po-playwright';
import * as playwright from 'playwright';
import {Browser, BrowserContext, Page} from 'playwright';
declare global {
    var context: BrowserContext;
    var browser: Page;
    var config: any;
}

let browserInstance: Browser;

Before(async function () {
    const driverConfig = config.browser ?? config.driver;
    driverConfig.timeout = {
        defaultTimeouts,
        ...driverConfig.timeout
    }
    const capabilities = driverConfig.capabilities;
    // @ts-ignore
    browserInstance = await playwright[capabilities.browserName].launch({
        headless: false
    });
    const context = await browserInstance.newContext();
    global.browser = await context.newPage();
    global.context = context;
    console.log(po)
    po.init(global.browser, { timeout: driverConfig.timeout.present });
    po.register(config.pageObject);
});

After(async function () {
    await browserInstance.close();
});
