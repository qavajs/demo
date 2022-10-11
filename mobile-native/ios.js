const Memory = require('./memory');
const App = require('./page_object/IOSApp');
const { join } = require('path');
const { wdioService } = require('@qavajs/cli');

module.exports = {
    default: {
        paths: ['features/TestMobile.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio'
        ],
        browser: {
            logLevel: 'warn',
            timeout: {
                present: 5000
            },
            port: 4723,
            capabilities: {
                platformName: 'iOS',
                'appium:deviceName': 'iPhone 13',
                'appium:platformVersion': '15.5',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'XCUITest',
                'appium:app': join(
                    process.cwd(),
                    './apps/wdioNativeDemoApp.app'
                ),
                'appium:newCommandTimeout': 240,
            }
        },
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
        ],
        service: [wdioService('@wdio/appium-service')],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 60000,
        publishQuiet: true
    }
}
