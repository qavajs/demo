import {Data} from './memory';
import {App} from './page_object';

export default {
    paths: ['features/Wikipedia.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            present: 5000
        },
        port: 4723,
        capabilities: {
            platformName: 'iOS',
            browserName: 'safari',
            'appium:deviceName': 'iPhone 14',
            'appium:platformVersion': '16.4',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            'appium:newCommandTimeout': 240
        }

    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/file.xml']
    ],
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 60000
}
