const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio', 'step_definitions/*.js'
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
        defaultTimeout: 20000,
        parallel: 2,
        publishQuiet: true
    }
}
