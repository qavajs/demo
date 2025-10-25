import { Data } from './memory';
import { App } from './page_object';

const DEVICE_NAME = process.env.DEVICE_NAME;
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
        hostname: 'ondemand.us-west-1.saucelabs.com',
        path: '/wd/hub',
        logLevel: 'debug',
        user: process.env.SAUCELABS_USER,
        key: process.env.SAUCELABS_USER,
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            platformName: 'Android',
            browserName: 'chrome',
            'appium:deviceName': DEVICE_NAME,
            'appium:automationName': 'UIAutomator2'
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
