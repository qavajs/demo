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
            'node_modules/@qavajs/steps-wdio',
            'step_definitions/*.js'
        ],
        browser: {
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
            'html:report/report.html'
        ],
        service: [appiumConfig],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        publishQuiet: true
    }
}
