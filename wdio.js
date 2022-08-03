const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/TestWdio.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio',
            'node_modules/@qavajs/steps-memory',
            'step_definitions/*.js'
        ],
        browser: {
            logLevel: 'warn',
            capabilities: {
                browserName: 'chrome'
            }
        },
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2,
        publishQuiet: true
    }
}
