import { test as base, expect } from '@qavajs/tx';
import { LoginPage } from '../page_object/LoginPage';
import { InventoryPage } from '../page_object/InventoryPage';
import { CartPage } from '../page_object/CartPage';
import { CheckoutPage } from '../page_object/CheckoutPage';

type AppFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<AppFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

export { expect } from '@qavajs/tx';
