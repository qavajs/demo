const Memory = require('./memory');
const App = require('./page_object');

module.exports = {
    default: {
        paths: ["features/TestWdio.feature"],
        require: [
            'node_modules/@qavajs/steps-wdio',
            'step_definitions/*.js'
        ],
        browser: {
            capabilities: {
                browserName: 'MicrosoftEdge'
            }
        },
        format: [
            "html:report/report.html"
        ],
        service: ['@qavajs/service-selenium-standalone'],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2,
        publishQuiet: true
    }
}
