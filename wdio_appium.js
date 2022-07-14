const Memory = require('./memory');
const App = require('./page_object/MobileApp');
const { join } = require('path');

module.exports = {
    default: {
        paths: ["features/TestMobile.feature"],
        require: [
            'node_modules/@qavajs/steps-config-loader',
            'node_modules/@qavajs/steps-wdio',
            'step_definitions/*.js'
        ],
        browser: {
            port: 4723,
            capabilities: {
                platformName: 'Android',
                // browserName: 'chrome',
                // maxInstances: 1,
                // For W3C the appium capabilities need to have an extension prefix
                // http://appium.io/docs/en/writing-running-appium/caps/
                // This is `appium:` for all Appium Capabilities which can be found here
                // 'appium:deviceName': 'Pixel_3_10.0',
                // 'appium:platformVersion': '10.0',
                // 'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'UiAutomator2',
                // 'appium:skipServerInstallation:': true,
                // The path to the app
                'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
                // @ts-ignore
                'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
                'appium:newCommandTimeout': 240,
            }
        },
        format: [
            "html:report/report.html"
        ],
        service: ['services/appium.js'],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        publishQuiet: true
    }
}
