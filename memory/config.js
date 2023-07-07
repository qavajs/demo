const Memory = require('./memory/');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-memory/index.js'
        ],
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter',
            '@qavajs/xunit-formatter:report/report.xml'
        ],
        formatOptions: {
            console: {
                showLogs: true
            }
        },
        memory: new Memory(),
        parallel: 2,
        publishQuiet: true
    }
}
