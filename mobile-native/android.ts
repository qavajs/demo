import { Constants } from './memory';
import { App } from './page_object/AndroidApp';
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
        port: 4723,
        capabilities: {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/android.wdio.native.app.v1.0.8.apk'),
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
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
    defaultTimeout: 30000
}
