const Memory = require('./memory');

module.exports = {
    default: {
        paths: ['features/TestMemory.feature'],
        require: [
            'node_modules/@qavajs/steps-memory',
            'step_definitions/*.js'
        ],
        format: [
            'html:report/report.html'
        ],
        memory: new Memory(),
        parallel: 2,
        publishQuiet: true
    }
}
