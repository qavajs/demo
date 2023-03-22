const Memory = require('./memory');
const App = require('./page_object');
const { resolve } = require('path');
const { wdioService } = require('@qavajs/cli');

const appiumConfig = wdioService([
    '@wdio/appium-service',
    {
        args: {
            chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
        }
    }
])

module.exports = {
    default: {
        paths: ["features/Wikipedia.feature"],
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
                'appium:deviceName': 'iPhone 13',
                'appium:platformVersion': '15.5',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'XCUITest',
                'appium:newCommandTimeout': 240
            }

        },
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            '@qavajs/xunit-formatter:report/file.xml'
        ],
        service: [appiumConfig],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 60000,
        publishQuiet: true
    }
}
