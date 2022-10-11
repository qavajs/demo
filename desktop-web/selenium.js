const Memory = require('./memory');
const App = require('./page_object');
const { wdioService } = require('@qavajs/cli');
module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio', 'step_definitions/*.js'
        ],
        browser: {
            logLevel: 'warn',
            capabilities: {
                browserName: 'MicrosoftEdge'
            }
        },
        format: [
            "html:report/report.html"
        ],
        service: [wdioService('@wdio/selenium-standalone-service')],
        memory: new Memory(),
        pageObject: new App(),
        defaultTimeout: 20000,
        parallel: 2,
        publishQuiet: true
    }
}
