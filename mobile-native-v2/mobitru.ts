import 'dotenv/config';
import { Constants } from './memory';
import { App } from './page_object/AndroidApp';

const KEY = encodeURIComponent(process.env.API_KEY);
const BILLING_UNIT = process.env.BILLING_UNIT;
const UDID = process.env.UDID;

const credentials = `${BILLING_UNIT}:${KEY}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

export default {
    paths: ['features/TestMobile.feature'],
    require: [
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
            platformName: 'android',
            'appium:udid': UDID,
        },
        reuseSession: true
    },
    format: [
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml'],
    ],
    memory: new Constants(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 30000,
    tags: '@android',
    service: [{
        before() {
            console.log('Find and book device');
        }
    }]
}
