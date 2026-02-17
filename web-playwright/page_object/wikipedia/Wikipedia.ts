import { locator } from '@qavajs/steps-playwright/po';

export class Wikipedia {
    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
}
