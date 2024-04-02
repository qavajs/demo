import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/**/*.feature'],
    require: [
        'step_definition/*.ts',
        'node_modules/@qavajs/steps-playwright/playwright-runner.js',
        'node_modules/@qavajs/steps-memory/index.js'
    ],
    memory: new Memory(),
    pageObject: new App(),
    browser: {
        timeout: {},
        screenshot: ['afterStep']
    }
}
