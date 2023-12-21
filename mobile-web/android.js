const Memory = require('./memory');
const App = require('./page_object');
const { resolve } = require('path');
const wdioService = require('@qavajs/wdio-service-adapter');

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
                platformName: 'Android',
                browserName: 'chrome'
            }

        },
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            'junit:report/file.xml'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 30000
    }
}
