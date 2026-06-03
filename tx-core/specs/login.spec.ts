import { test, expect } from './fixtures';

test.describe('Login', () => {
    test('successful login navigates to inventory', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();
        await loginPage.expectInventoryLoaded();
    });

    test('locked out user sees error message', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.expectError('locked out');
    });

    test('wrong password shows error', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'wrong_password');
        await loginPage.expectError('Username and password do not match');
    });

    test('empty credentials shows username required error', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('', '');
        await loginPage.expectError('Username is required');
    });
});
