import { Constants } from './memory';
import { App } from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'node_modules/@qavajs/steps-accessibility-ea/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chrome'
        }
    },
    format: [
        ['json', 'report/report.json'],
        ['@qavajs/html-formatter', 'report/report.html'],
        ['junit', 'report/report.xml'],
        '@qavajs/console-formatter'
    ],
    memory: new Constants(),
    pageObject: new App(),
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    parallel: 1,
    defaultTimeout: 25000
}
