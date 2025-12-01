import { Constants } from './memory';

export default {
    paths: ['features/WebAPI.feature'],
    require: [
        'node_modules/@qavajs/steps-memory/index.js',
        'node_modules/@qavajs/steps-api/index.js'
    ],
    format: [
        ['html', 'report/report2.html'],
        ['@qavajs/html-formatter', 'report/report.html'],
        ['@qavajs/console-formatter'],
        ['junit', 'report/report.xml']
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    memory: new Constants(),
    parallel: 2
}
