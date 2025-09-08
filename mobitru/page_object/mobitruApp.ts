import { locator } from '@qavajs/steps-wdio/po';

const XCUITestPredicate = (selector: string) => `-ios predicate string:${selector}`;
const XCUITestClassChain = (selector: string) => `-ios class chain:${selector}`

export default class App {
    SignInWithCorrectUser = locator(XCUITestPredicate('label == "Sign in with correct user"'));
    Product = locator
        .template(text => `//XCUIElementTypeStaticText[contains(@label, '${text}')]/..`)
        .as(Product);
    CartButton = locator(XCUITestPredicate(`name == 'cartButton'`));
    Cart = locator.as(Cart);
    Checkout = locator.as(Checkout);
}

class Product {
    AddToCart = locator(`./XCUIElementTypeButton[@label='Add to cart']`);
}

class Cart {
    ContinueToCheckout = locator(XCUITestPredicate(`label == 'Continue to checkout'`));
}

class Checkout {
    FirstName = locator(XCUITestPredicate('name == "First name" and type == "XCUIElementTypeTextField"'));
    LastName = locator(XCUITestPredicate('name == "Last name" and type == "XCUIElementTypeTextField"'));
    Address = locator(XCUITestPredicate('name == "Address" and type == "XCUIElementTypeTextField"'));
    Email = locator(XCUITestPredicate('name == "Email" and type == "XCUIElementTypeTextField"'));
    ReviewOrder = locator('//*[@value="Review order"]');
    Total = locator('//XCUIElementTypeStaticText[@name="Total"]/following-sibling::*[1]');
    PlaceOrder = locator('//*[@value="Confirm & place order"]');
    OrderPlacementMessage = locator(XCUITestPredicate('value == "Order successfully placed. Please check your email."'));
}