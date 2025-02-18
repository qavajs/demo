import 'dotenv/config';
import Memory from './memory';
import App from './page_object';

const defaultConfig = {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/*.ts'
    ],
    browser: {
        logLevel: 'warn',
        capabilities: {
            browserName: 'chrome',
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    memory: new Memory(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 20000
}

export default defaultConfig;

export const bstack = {
    ...defaultConfig,
    browser: {
        logLevel: 'info',
        hostname: 'hub.browserstack.com',
        port: 4444,
        path: '/wd/hub',
        capabilities: {
            browserName: 'chrome',
            'bstack:options' : {
                "os" : "Windows",
                "osVersion" : "10",
                "browserVersion" : "120.0",
                "userName" : process.env.BSTACK_USERNAME,
                "accessKey" : process.env.BSTACK_ACCESS_KEY,
            }
        }
    }
}