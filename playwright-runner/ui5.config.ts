import { defineConfig } from '@qavajs/playwright';
import Memory from './memory';
import App from './page_object/ui5';

export default defineConfig({
    paths: [
        'features/**/ui5.feature'
    ],
    require: [
        'node_modules/@qavajs/playwright/steps.js',
        'step_definitions/*.ts'
    ],
    memory: new Memory(),
    pageObject: new App(),
});
