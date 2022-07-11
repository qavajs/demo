const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/TestWdioTemplate.feature'],
        require: [
            'node_modules/@qavajs/steps-config-loader',
            'node_modules/@qavajs/steps-wdio',
            'step_definitions/*.js'
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
