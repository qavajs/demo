import Memory from './memory';
import WebApp from './page_object/web';
import NativeApp from './page_object/native';

export const web = {
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
}

export const native = {
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
}

