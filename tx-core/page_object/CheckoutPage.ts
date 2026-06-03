import { expect } from '@qavajs/tx';

export class CheckoutPage {
    private readonly page: Page;

    readonly title: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly summaryTotal: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.firstNameInput = page.getByTestId('firstName');
        this.lastNameInput = page.getByTestId('lastName');
        this.postalCodeInput = page.getByTestId('postalCode');
        this.continueButton = page.getByTestId('continue');
        this.finishButton = page.getByTestId('finish');
        this.summaryTotal = page.locator('.summary_total_label');
        this.completeHeader = page.locator('.complete-header');
    }

    async expectStepOneLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Checkout: Your Information');
    }

    async fillShippingInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async expectStepTwoLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Checkout: Overview');
    }

    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }

    async expectOrderComplete(): Promise<void> {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }
}
