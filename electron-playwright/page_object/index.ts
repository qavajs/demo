import { locator } from '@qavajs/steps-playwright/po';

export default class App {
    OpenNewWindowElectronButton = locator('#electronButton');
    CloseCurrentWindowElectronButton = locator('#closeCurrentWindow');
}
