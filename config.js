const Memory = require("./memory");
const App = require("./page_object");

module.exports = {
    default: {
        paths: ["features/**/*.feature"],
        require: [
            "node_modules/@qavajs/steps-config-loader/lib",
            "node_modules/@qavajs/steps-wdio/lib",
            "step_definitions/*.js"
        ],
        browser: {
            logLevel: 'warn',
            waitforTimeout: 15000,
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: [
                        '--disable-web-security'
                    ]
                }
            }
        },
        format: [
            "html:report/report.html"
        ],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        publishQuiet: true
    }
}
