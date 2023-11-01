const Memory = require('./memory');
const App = require('./page_object');
const wdioService = require('@qavajs/wdio-service-adapter');
module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio/index.js',
            'step_definitions/*.js'
        ],
        browser: {
            logLevel: 'warn',
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['--headless']
                }
            },
            screenshot: ['onFail']
        },
        format: [
            '@qavajs/console-formatter',
            'junit:report/report.xml',
            '@qavajs/html-formatter:report/report.html'
        ],
        formatOptions: {
            console: {
                showLogs: true
            }
        },
        service: [wdioService('@wdio/selenium-standalone-service')],
        memory: new Memory(),
        pageObject: new App(),
        defaultTimeout: 40000,
        parallel: 2
    }
}
