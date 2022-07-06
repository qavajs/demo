const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/TestWdioTemplate.feature'],
        require: [
            'node_modules/@qavajs/steps-config-loader',
            'node_modules/@qavajs/steps-wdio',
            'node_modules/@qavajs/steps-template'
        ],
        templates: [
            'templates/*.feature'
        ],
        browser: {
            capabilities: {
                browserName: 'chrome'
            }
        },
        format: [
            'html:report/report.html'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2,
        publishQuiet: true
    }
}
