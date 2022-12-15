const Memory = require('../desktop-web/memory');

module.exports = {
    default: {
        paths: ['features/WebAPI.feature'],
        require: [
            'node_modules/@qavajs/steps-memory',
            'node_modules/@qavajs/steps-api'
        ],
        format: [
            '@qavajs/html-formatter:report/report.html',
            '@qavajs/console-formatter'
        ],
        memory: new Memory(),
        parallel: 2,
        publishQuiet: true
    }
}
