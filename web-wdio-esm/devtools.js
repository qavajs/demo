import Memory from './memory/index.js';
import App from './page_object/index.js';

export default {
    paths: ['features/*.feature'],
    import: [
        'node_modules/@qavajs/steps-wdio/index.js', 'step_definitions/*.js'
    ],
    browser: {
        logLevel: 'warn',
        capabilities: {
            browserName: 'chrome'
        }
    },
    format: [
        '@qavajs/console-formatter',
        '@qavajs/xunit-formatter:report/report.xml',
        '@qavajs/html-formatter:report/report.html'
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    memory: new Memory(),
    pageObject: new App(),
    defaultTimeout: 20000,
    parallel: 2,
    publishQuiet: true
}
