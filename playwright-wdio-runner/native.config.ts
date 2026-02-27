import Memory from './memory';
import NativeApp from './page_object/native';
import { defineConfig } from '@qavajs/playwright-wdio';

export default defineConfig({
    paths: [
        'features/native.feature'
    ],
    require: [
        'node_modules/@qavajs/playwright-wdio/steps.js',
        'steps/*.ts',
        'steps/native/*.ts',
    ],
    memory: new Memory(),
    pageObject: new NativeApp(),
});

