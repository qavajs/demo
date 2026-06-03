import { expect } from '@qavajs/tx';

export class CartPage {
    private readonly page: Page;

    readonly title: Locator;
    readonly cartItems: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.cartItems = page.locator('.cart_item');
        this.continueShoppingButton = page.getByTestId('continue-shopping');
        this.checkoutButton = page.getByTestId('checkout');
    }

    cartItemName(name: string): Locator {
        return this.page.locator(`[data-test="inventory-item-name"]:has-text("${name}")`);
    }

    async expectLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Your Cart');
    }

    async expectItemInCart(name: string): Promise<void> {
        await expect(this.cartItemName(name)).toBeVisible();
    }

    async expectCartCount(count: number): Promise<void> {
        await expect(this.cartItems).toHaveCount(count);
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}
