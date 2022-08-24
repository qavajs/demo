const Memory = require('../desktop-web/memory');

module.exports = {
    default: {
        paths: ['features/TestAPI.feature'],
        require: [
            'node_modules/@qavajs/steps-memory',
            'node_modules/@qavajs/steps-api'
        ],
        format: [
            'html:report/report.html'
        ],
        memory: new Memory(),
        parallel: 2,
        publishQuiet: true
    }
}
