import { test, expect } from './fixtures';

test.describe('Shopping cart', () => {
    test('added item appears in cart', async ({ loginPage, inventoryPage, cartPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.addProductToCart('sauce-labs-bike-light');
        await inventoryPage.openCart();

        await cartPage.expectLoaded();
        await cartPage.expectItemInCart('Sauce Labs Bike Light');
        await cartPage.expectCartCount(1);
    });

    test('multiple items appear in cart', async ({ loginPage, inventoryPage, cartPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.addProductToCart('sauce-labs-bike-light');
        await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt');
        await inventoryPage.openCart();

        await cartPage.expectLoaded();
        await cartPage.expectCartCount(2);
    });
});

test.describe('Checkout flow', () => {
    test('complete purchase end to end', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForInventory();

        await inventoryPage.addProductToCart('sauce-labs-backpack');
        await inventoryPage.openCart();

        await cartPage.expectLoaded();
        await cartPage.expectItemInCart('Sauce Labs Backpack');
        await cartPage.proceedToCheckout();

        await checkoutPage.expectStepOneLoaded();
        await checkoutPage.fillShippingInfo('John', 'Doe', '12345');

        await checkoutPage.expectStepTwoLoaded();
        await checkoutPage.finishOrder();

        await checkoutPage.expectOrderComplete();
    });
});
