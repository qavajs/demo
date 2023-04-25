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
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['--headless']
                }
            }
        },
        format: [
            '@qavajs/console-formatter',
            '@qavajs/xunit-formatter:report/report.xml',
            '@qavajs/html-formatter:report/report.html'
        ],
        memory: new Memory(),
        pageObject: new App(),
        defaultTimeout: 20000,
        screenshot: ['onFail'],
        parallel: 2,
        publishQuiet: true
    }
}
