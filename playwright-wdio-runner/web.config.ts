import Memory from './memory';
import WebApp from './page_object/web';
import { defineConfig } from '@qavajs/playwright-wdio';

export default defineConfig({
    paths: [
        'features/web.feature'
    ],
    require: [
        'node_modules/@qavajs/playwright-wdio/steps.js',
        'steps/*.ts',
        'steps/web/*.ts',
    ],
    memory: new Memory(),
    pageObject: new WebApp(),
});

