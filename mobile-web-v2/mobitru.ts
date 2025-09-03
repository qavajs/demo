import 'dotenv/config'
import { Data } from './memory';
import { App } from './page_object';

const KEY = process.env.API_KEY;
const BILLING_UNIT = process.env.BILLING_UNIT;
const UDID = process.env.UDID;
const credentials = `${BILLING_UNIT}:${KEY}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

const PLATFORM_NAME = process.env.PLATFORM_NAME;
const BROWSER_NAME = process.env.BROWSER_NAME;
const AUTOMATION_NAME = process.env.AUTOMATION_NAME;

const RP_TOKEN = process.env.RP_TOKEN;
const RP_ENDPOINT = process.env.RP_ENDPOINT;
const RP_PROJECT = process.env.RP_PROJECT;
const RP_LAUNCH = process.env.RP_LAUNCH;

export default {
    paths: ['features/Wikipedia.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
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
            browserName: BROWSER_NAME,
            platformName: PLATFORM_NAME,
            'appium:udid': UDID,
            'appium:automationName': AUTOMATION_NAME
        }

    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/file.xml']
    ],
    formatOptions: {
        rpConfig: {
            token: RP_TOKEN,
            endpoint: RP_ENDPOINT,
            description: 'Description',
            tags: ['Tag'],
            project: RP_PROJECT,
            launch: RP_LAUNCH
        },
    },
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 30000
}
