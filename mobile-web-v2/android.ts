import { Data } from './memory';
import { App } from './page_object';

export default {
    paths: ['features/Wikipedia.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            present: 5000
        },
        port: 4723,
        capabilities: {
            platformName: 'Android',
            browserName: 'chrome'
        }

    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/file.xml']
    ],
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 30000
}

