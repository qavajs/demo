import { locator } from '@qavajs/steps-wdio/po';

export class Wikipedia {
    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
}