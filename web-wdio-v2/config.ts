import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/*.ts'
    ],
    browser: {
        logLevel: 'warn',
        capabilities: {
            browserName: 'chrome',
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    memory: new Memory(),
    pageObject: new App(),
    parallel: 2
}
