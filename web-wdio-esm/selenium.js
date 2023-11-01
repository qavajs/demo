import Memory from './memory/index.js';
import App from './page_object/index.js';
import wdioService from '@qavajs/wdio-service-adapter';

export default {
    paths: ['features/*.feature'],
    import: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/*.js'
    ],
    browser: {
        logLevel: 'warn',
        capabilities: {
            browserName: 'MicrosoftEdge'
        }
    },
    format: [
        '@qavajs/console-formatter',
        'junit:report/report.xml',
        '@qavajs/html-formatter:report/report.html'
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    service: [await wdioService('@wdio/selenium-standalone-service')],
    memory: new Memory(),
    pageObject: new App(),
    defaultTimeout: 20000,
    parallel: 2
}
