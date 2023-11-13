const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/Template.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio/index.js',
            'step_definition/*.js'
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
            '@qavajs/html-formatter:report/report.html',
            'junit:report/report.xml',
            '@qavajs/console-formatter'
        ],
        formatOptions: {
            console: {
                showLogs: true
            }
        },
        defaultTimeout: 30000,
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2
    }
}
