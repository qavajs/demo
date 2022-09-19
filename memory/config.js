const Memory = require('./memory/');

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-memory'
        ],
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
        ],
        memory: new Memory(),
        parallel: 2,
        publishQuiet: true
    }
}
