const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-testcafe/index.js'
        ],
        browser: {
            capabilities: {
                browserName: 'chrome'
            }
        },
        formatOptions: {
            console: {
                showLogs: true
            }
        },
        format: [
            'json:report/report.json',
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            'junit:report/report.xml'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 25000
    }
}
