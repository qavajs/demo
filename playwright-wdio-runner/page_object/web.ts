import { locator } from '@qavajs/playwright-wdio';

export default class App {
    UsernameInput = locator('#user-name');
    PasswordInput = locator('#password');
    LoginButton = locator('#login-button');
    ErrorMessage = locator('div.error');
    AppLogo = locator('.app_logo');
    Product = locator.template(text => `.inventory_item*=${text}`).as(Product);
    CartButton = locator('a.shopping_cart_link');
    CartBadge = locator('.shopping_cart_badge');
    CartItems = locator('.cart_item');
    CartItem = locator.template(text => `.cart_item*=${text}`).as(CartItem);
    CheckoutButton = locator('#checkout');
    CheckoutFirstName = locator('#first-name');
    CheckoutLastName = locator('#last-name');
    CheckoutPostalCode = locator('#postal-code');
    ContinueButton = locator('#continue');
    SummaryTotal = locator('.summary_total_label');
    FinishButton = locator('#finish');
    CompleteOrderHeader = locator('.complete-header');
    MenuButton = locator('button#react-burger-menu-btn');
    BurgerMenu = locator('.bm-menu').as(Menu);
}

class Product {
    Price = locator('.inventory_item_price');
    AddToCart = locator('[data-test^=add-to-cart]');
}

class CartItem {
    Title = locator('.inventory_item_name');
    Price = locator('.inventory_item_price');
    Remove = locator('[data-test^=remove]');
    UsernameInput = locator('#user-name');
    PasswordInput = locator('#password');
    LoginButton = locator('#login-button');
    AppLogo = locator('.app_logo');
}

class Menu {
    LogoutButton = locator('a#logout_sidebar_link');
}
