import { locator } from '@qavajs/steps-playwright/po';

export class TodoItem {
    Complete = locator('input.toggle');
    Label = locator('label');
    Remove = locator('.destroy');
}
