import { Constants } from './memory/index.js';
import { App } from './page_object/index.js'

export default {
    paths: ['features/*.feature'],
    import: [
        'node_modules/@qavajs/steps-playwright/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium'
        }
    },
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    memory: new Constants(),
    pageObject: App,
    parallel: 1,
    defaultTimeout: 25000
}
