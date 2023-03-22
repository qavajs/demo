const Memory = require('./memory');
const App = require('./page_object/AndroidApp');
const { join } = require('path');
const { wdioService } = require('@qavajs/cli');

module.exports = {
    default: {
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
                'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
                'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
                'appium:newCommandTimeout': 240,
            }
        },
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            '@qavajs/xunit-formatter:report/file.xml'
        ],
        service: [wdioService('@wdio/appium-service')],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 30000,
        publishQuiet: true
    }
}
