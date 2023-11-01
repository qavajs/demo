const Memory = require('./memory');
const App = require('./page_object');
const SUACELABS_HOSTNAME = process.env.SUACELABS_HOSTNAME;
const SUACELABS_USER = process.env.SUACELABS_USER;
const SUACELABS_KEY = process.env.SUACELABS_KEY;
const PLATFORM_NAME = process.env.PLATFORM_NAME;
const BROWSER_NAME = process.env.BROWSER_NAME;
const DEVICE_NAME = process.env.DEVICE_NAME;
const RP_TOKEN = process.env.RP_TOKEN;
const RP_ENDPOINT = process.env.RP_ENDPOINT;
const RP_PROJECT = process.env.RP_PROJECT;
const RP_LAUNCH = process.env.RP_LAUNCH;
module.exports = {
    default: {
        paths: ["features/Wikipedia.feature"],
        require: [
            'node_modules/@qavajs/steps-wdio/index.js'
        ],
        browser: {
            protocol: 'https',
            hostname: SUACELABS_HOSTNAME,
            path: '/wd/hub',
            logLevel: 'debug',
            user: SUACELABS_USER,
            key: SUACELABS_KEY,
            port: 443,
            timeout: {
                present: 5000
            },
            capabilities: {
                platformName: PLATFORM_NAME,
                browserName: BROWSER_NAME,
                'appium:deviceName': DEVICE_NAME,
            }

        },
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            'junit:report/file.xml',
            '@qavajs/format-report-portal'
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
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 30000,
        publishQuiet: true
    }
}
