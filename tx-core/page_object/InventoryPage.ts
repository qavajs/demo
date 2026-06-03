import { expect } from '@qavajs/tx';

export class InventoryPage {
    private readonly page: Page;

    readonly title: Locator;
    readonly inventoryItems: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.sortDropdown = page.getByTestId('product-sort-container');
    }

    addToCartButton(productSlug: string): Locator {
        return this.page.locator(`[data-test="add-to-cart-${productSlug}"]`);
    }

    removeFromCartButton(productSlug: string): Locator {
        return this.page.locator(`[data-test="remove-${productSlug}"]`);
    }

    async expectLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Products');
    }

    async addProductToCart(productSlug: string): Promise<void> {
        await this.addToCartButton(productSlug).click();
    }

    async removeProductFromCart(productSlug: string): Promise<void> {
        await this.removeFromCartButton(productSlug).click();
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }

    async openMenu(): Promise<void> {
        await this.menuButton.click();
    }

    async logout(): Promise<void> {
        await this.openMenu();
        await this.logoutLink.click();
    }
}
