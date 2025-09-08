import 'dotenv/config';
import Memory from './memory';
import MobitruWebsite from './page_object/mobitruWebsite';
import MobitruNativeApp from './page_object/mobitruApp';

const KEY = encodeURIComponent(process.env.MOBITRU_API_KEY as string);
const BILLING_UNIT = process.env.MOBITRU_BILLING_UNIT;
const UDID = process.env.MOBITRU_UDID;

const credentials = `${BILLING_UNIT}:${KEY}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

export const webLocal = {
    paths: ['features/web.feature'],
    require: [
        'node_modules/@qavajs/steps-memory/index.js',
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definition/*.ts'
    ],
    format: [
        '@qavajs/console-formatter',
        ['@qavajs/html-formatter', 'report/report.html'],
        ['junit', 'report/report.xml']
    ],
    memory: new Memory(),
    pageObject: new MobitruWebsite(),
    browser: {
        capabilities: {
            browserName: 'chrome',
            'wdio:enforceWebDriverClassic': true
        },
        screenshot: ['onFail'],
    },
}

export const mobitruWebDesktop = {
    paths: ['features/web.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/*.ts'
    ],
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    browser: {
        protocol: 'https',
        hostname: `@browserhub-us.mobitru.com`,
        headers: {
            Authorization: `Basic ${encodedCredentials}`
        },
        path: '/wd/hub',
        logLevel: 'debug',
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            alwaysMatch: {},
            firstMatch: [{
                browserName: 'chrome',
                browserVersion: '139.0',
                'mobitru:options': {
                    'sessionTimeout': '1m'
                }
            }]

        },
        screenshot: ['onFail'],
    },
    memory: new Memory(),
    pageObject: new MobitruWebsite(),
    parallel: 1,
    retry: 0,
    defaultTimeout: 30000,
}

export const mobitruWebMobile = {
    paths: ['features/web.feature'],
    require: [
        'node_modules/@qavajs/steps-memory/index.js',
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/mobitru/*.js'
    ],
    browser: {
        protocol: 'https',
        hostname: 'app.mobitru.com',
        headers: {
            Authorization: `Basic ${encodedCredentials}`
        },
        path: '/wd/hub',
        logLevel: 'debug',
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            platformName: 'ios',
            browserName: 'safari',
            'appium:udid': UDID,
            'mobitru:keepDevice': true
        },
        screenshot: ['onFail'],
    },
    format: [
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml'],
        ['@qavajs/html-formatter', 'report/report.html'],
    ],
    memory: new Memory(),
    pageObject: new MobitruWebsite(),
    parallel: 1,
    defaultTimeout: 30000
}

export const mobitruNativeMobile = {
    paths: ['features/native.feature'],
    require: [
        'node_modules/@qavajs/steps-memory/index.js',
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definition/mobitru/*.ts'
    ],
    browser: {
        protocol: 'https',
        hostname: 'app.mobitru.com',
        headers: {
            Authorization: `Basic ${encodedCredentials}`
        },
        path: '/wd/hub',
        logLevel: 'debug',
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            platformName: 'ios',
            'appium:udid': UDID,
            'appium:automationName': 'XCUITest',
            'mobitru:keepDevice': true,
        },
        screenshot: ['onFail'],
    },
    format: [
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml'],
        ['@qavajs/html-formatter', 'report/report.html'],
    ],
    memory: new Memory(),
    pageObject: new MobitruNativeApp(),
    parallel: 1,
    defaultTimeout: 30000
}



