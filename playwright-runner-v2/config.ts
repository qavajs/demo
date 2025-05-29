import Memory from './memory';
import App from './page_object';

export default {
    paths: [
        'features/**/*.feature'
    ],
    require: [
        'node_modules/@qavajs/playwright/steps.js'
    ],
    memory: new Memory(),
    pageObject: new App(),
}
