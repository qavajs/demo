import {locator} from '@qavajs/steps-playwright/po';

export class Product {
    Price = locator('.inventory_item_price');
    AddToCart = locator('[data-test^=add-to-cart]');
}

export class CartItem {
    Title = locator('.inventory_item_name');
    Price = locator('.inventory_item_price');
    Remove = locator('[data-test^=remove]');
    UsernameInput = locator('#user-name');
    PasswordInput = locator('#password');
    LoginButton = locator('#login-button');
    AppLogo = locator('.app_logo');
}

export class Menu {
    LogoutButton = locator('a#logout_sidebar_link');
}