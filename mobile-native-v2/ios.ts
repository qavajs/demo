import { Constants } from './memory';
import { App } from './page_object/IOSApp';
import { join } from 'node:path';

export default {
    paths: ['features/TestMobile.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            present: 5000
        },
        path: '/',
        port: 4723,
        capabilities: {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 15',
            'appium:platformVersion': '17.5',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            'appium:app': join(
                process.cwd(),
                './apps/wdiodemoapp.app'
            ),
            'appium:newCommandTimeout': 240,
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    memory: new Constants(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 60000
}
