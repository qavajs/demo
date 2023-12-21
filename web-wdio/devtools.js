const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio/index.js',
            'step_definitions/*.js'
        ],
        browser: {
            logLevel: 'warn',
            automationProtocol: 'devtools',
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
        memory: new Memory(),
        pageObject: new App(),
        defaultTimeout: 20000,
        parallel: 1
    }
}
