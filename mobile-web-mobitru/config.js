const Memory = require('./memory');
const App = require('./page_object');
const { resolve } = require('path');
const { wdioService } = require('@qavajs/cli');
const API_KEY = process.env.API_KEY || '1n/HyBdZYnhhS4RxTypKQr0HA9KCOmXlJTx7jq4qaU/XyBeN3dmtwua6A9ioszbtyj4TOvHjQ55llfiLckbdC/yfGw2VIKH2+y5jM/mj/NfHbO3ENvtMCpLp/+VywQg5aA55Po/IupcWrsK7xEjnLxTnEdUKgcirSUH1doNtCQhp/UKopNYsjwJWjyx/Q1ExlapFQf4xYbhveadESAeBMyuLvJdC5mlpC8oa3Qpyq3qzP9RoSQWAerihLB5AYNvQR35rwgIPM/5JCsCQ+qlLlePMTJrh7R2zzFjn7T89ZU0veqOJE7EJ+GECfy0zFhg9bxRCGOclkhmOkXMJ3dXrYM/jLHIrWjy3WObuWmgc+GffsVRLAfdOX15HLhnF+zeZ/GHWA0FaXfLf4jYlKRceZG/oCu32tkQA3r7WaZEfuozT4hNTnjeEDoM8nVFHyB+2o4afxLucZwlXDHfBQoQg169oNqC2s1M9NMdHNZdxyTq5OrXzNqmSvzXBqz7yltRt+HAgIHL12ulHpbRhX8+sTmRm8vkhSSoo7iHnF88A7U4auQsr6iP/ovMG/ud9eh0ZVxDo7GK8wGDHSGLYh8D4Q3KIYuBDnuQZaBHPx12HOvypuxUE/mKqlDKGeP1cXAIW6Bl1hJvw4vpeQb+2xTUuZdKbjKl4aEEnrPaXp+fIrq9+j8dMw8Z3wG9dIT8LrbeAuNLgGP7MQ2YbTPpF3W3oB34s952e09KnzN7kTrJS1gtagR07JyB9sku00vtihLNo0z3pvUe2I/pGZ7aEh9YFBuAMh57ZK4csF/UpI1p2tlBrImY4V3H83KvaM4GP4mvGF3KROYDOVnMvYGfI9l+gYaca3o3cbMmhUaEL3Efo85a5gMjWdh7qqDz7htZIEIUQb+5SViU3Eds+Biy1g3RMcDiAqNyIWc+3eaM9WUyczA';
const encodeKey = encodeURIComponent(API_KEY)
const PROJECT_NAME = process.env.PROJECT_NAME || 'dzmitry_prakapuk';
const PLATFORM_NAME = process.env.PLATFORM_NAME || 'Android';
const BROWSER_NAME = process.env.BROWSER_NAME || 'chrome';
const DEVICE_NAME = process.env.DEVICE_NAME || 'SAMSUNG SM-G998B';
const RP_TOKEN = process.env.RP_TOKEN;
const RP_ENDPOINT = process.env.RP_ENDPOINT;
const RP_PROJECT = process.env.RP_PROJECT;
const RP_LAUNCH = process.env.RP_LAUNCH;
const appiumConfig = wdioService([
    '@wdio/appium-service',
    {
        args: {
            chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
        }
    }
])
module.exports = {
    default: {
        paths: ["features/Wikipedia.feature"],
        require: [
            'node_modules/@qavajs/steps-wdio'
        ],
        browser: {
            protocol: 'https',
            hostname: `${PROJECT_NAME}:${encodeKey}@app.mobitru.com`,
            path: '/wd/hub',
            logLevel: 'debug',
            port: 443,
            timeout: {
                present: 5000
            },
            capabilities: {
                platformName: PLATFORM_NAME,
                browserName: BROWSER_NAME,
                'appium:deviceName': DEVICE_NAME,
            }

        },
        format: [
            'html:report/report.html', '@qavajs/console-formatter', '@qavajs/xunit-formatter:report/file.xml', '@qavajs/format-report-portal'
        ],
        formatOptions: {
            rpConfig: {
                token: RP_TOKEN,
                endpoint: RP_ENDPOINT,
                description: 'Description',
                tags: ['Tag'],
                project: RP_PROJECT,
                launch: RP_LAUNCH
            },
        },
        service: [appiumConfig],
        memory: new Memory(),
        pageObject: new App(),
        parallel: 1,
        defaultTimeout: 30000,
        publishQuiet: true
    }
}
