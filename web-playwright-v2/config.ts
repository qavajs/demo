import 'dotenv/config';
import { Constants } from './memory';
import { App } from './page_object'

const defaultConfig = {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-playwright/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium',
            headless: false
        }
    },
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    memory: new Constants(),
    pageObject: App,
    parallel: 1,
    defaultTimeout: 25000
}

export const headless = {
    ...defaultConfig,
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium',
            headless: true
        }
    },
}

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Single Build',
        'name': 'Playwright Sample Test',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '', // Optional
        'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
        'playwrightClientVersion': '1.56.1'
    }
}

export const lambdaTest = {
    ...defaultConfig,
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium',
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
        }
    },
}

export default defaultConfig;
