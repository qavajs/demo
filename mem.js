const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ['features/TestMemory.feature'],
        require: [
            'node_modules/@qavajs/steps-config-loader',
            'node_modules/@qavajs/steps-memory',
            'step_definitions/*.js'
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
