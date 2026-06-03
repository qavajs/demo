import { test, expect } from './fixtures';

test.describe('Inventory page', () => {
    test('shows 6 products after login', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.expectLoaded();
        await expect(inventoryPage.inventoryItems).toHaveCount(6);
    });

    test('cart badge updates when adding items', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.addProductToCart('sauce-labs-bike-light');
        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt');
        await expect(inventoryPage.cartBadge).toHaveText('2');
    });

    test('cart badge decrements when removing item', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.addProductToCart('sauce-labs-bike-light');
        await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt');
        await expect(inventoryPage.cartBadge).toHaveText('2');

        await inventoryPage.removeProductFromCart('sauce-labs-bike-light');
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

    test('logout navigates back to login page', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.logout();
        await expect(loginPage.loginButton).toBeVisible();
    });
});
