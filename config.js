const Memory = require("./memory");
const App = require("./page_object");

module.exports = {
    default: {
        paths: ["features/**/*.feature"],
        require: [
            "node_modules/@yaatp/steps-config-loader/lib",
            "node_modules/@yaatp/steps-wdio/lib"
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
        format: [],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        publishQuiet: true
    }
}
