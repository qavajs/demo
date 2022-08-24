import Memory from './memory';
import App from './page_object';

module.exports = {
    default: {
        paths: ['features/*.feature'],
        require: [
            'node_modules/@qavajs/steps-wdio', 'step_definitions/*.ts'
        ],
        browser: {
            logLevel: 'warn',
            capabilities: {
                browserName: 'chrome'
            }
        },
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 2,
        publishQuiet: true
    }
}

// export default {
//     paths: ['features/*.feature'],
//     require: [
//         'node_modules/@qavajs/steps-wdio', 'step_definitions/*.ts'
//     ],
//     browser: {
//         logLevel: 'warn',
//         capabilities: {
//             browserName: 'chrome'
//         }
//     },
//     format: [
//         'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml'
//     ],
//     memory: new Memory(),
//     pageObject: new App(),
//     parallel: 2,
//     publishQuiet: true
// }
