const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'lib/*.js'
        ],
        browser: {
            logLevel: 'warn',
            capabilities: {
                browserName: 'chromium'
            }
        },
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 15000,
        publishQuiet: true
    }
}
