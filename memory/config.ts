import Memory from './memory';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-memory/index.js'
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
    memory: new Memory(),
    parallel: 2
}
