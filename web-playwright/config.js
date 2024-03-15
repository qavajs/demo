const Memory = require('./memory');
const App = require('./page_object');
const { devices } = require('playwright');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-playwright/index.js'
        ],
        browser: {
            logLevel: 'warn',
            timeout: {
                page: 5000
            },
            capabilities: {
                browserName: 'chromium',
                headless: false
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
