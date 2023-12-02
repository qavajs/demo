import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-playwright/index.js',
        'step_definitions/*.ts'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 25000,
            value: 25000
        },
        capabilities: {
            browserName: 'electron',
            args: ['app/main.js']
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
    defaultTimeout: 30000
}

