import { expect } from '@qavajs/tx';

export class LoginPage {
    private readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error');
        this.title = page.getByTestId('title');
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async waitForInventory(): Promise<void> {
        await this.page.waitForURL(/inventory/, { timeout: 5000 });
    }

    async expectInventoryLoaded(): Promise<void> {
        expect(this.page.url()).toContain('inventory');
        await expect(this.title).toBeVisible({ timeout: 3000 });
        await expect(this.title).toHaveText('Products');
    }

    async expectError(text: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible({ timeout: 3000 });
        await expect(this.errorMessage).toContainText(text);
    }
}
