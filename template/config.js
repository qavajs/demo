const Memory = require('../desktop-web/memory');
const App = require('../desktop-web/page_object');

module.exports = {
    default: {
        paths: ['features/Template.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio/index.js'
        ],
        requireModule: [
            '@qavajs/template'
        ],
        templates: [
            'templates/*.feature'
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
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/xunit-formatter:report/report.xml',
            '@qavajs/console-formatter'
        ],
        defaultTimeout: 30000,
        screenshot: ['onFail'],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2,
        publishQuiet: true
    }
}
