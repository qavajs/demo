const Memory = require('../desktop-web/memory');

module.exports = {
    default: {
        paths: ['features/WebAPI.feature'],
        require: [
            'node_modules/@qavajs/steps-memory/index.js',
            'node_modules/@qavajs/steps-api/index.js'
        ],
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter'
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
