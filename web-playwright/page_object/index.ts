import {locator} from '@qavajs/steps-playwright/po';
import {Wikipedia} from './wikipedia/Wikipedia';
import {WikipediaArticle} from './wikipedia/WikipediaArticle';
import {TodoItem} from "./todomvc/TodoItem";
import {Product, Menu, CartItem} from "./saucedemo/Components";

export class App {
    // wikipedia
    Wikipedia = locator('.search-container').as(Wikipedia);
    WikipediaArticle = locator('#content').as(WikipediaArticle);

    // todomvc
    Todos = locator('.todo-list li');
    TodoInput = locator('.new-todo');
    TodoByIndex = locator.template(i => `.todo-list li:nth-child(${i})`).as(TodoItem);
    TodoByText = locator.template(text => `.todo-list li:has-text("${text}")`).as(TodoItem);
    ClearCompleted = locator('.clear-completed');
    TodoCounter = locator('.todo-count');
    ActiveFilter = locator('a[href*=active]');
    CompletedFilter = locator('a[href*=completed]');

    // saucedemo
    UsernameInput = locator('#user-name');
    PasswordInput = locator('#password');
    LoginButton = locator('#login-button');
    ErrorMessage = locator('div.error');
    AppLogo = locator('.app_logo');
    Product = locator.template(text => `.inventory_item:has-text("${text}")`).as(Product);
    CartButton = locator('a.shopping_cart_link');
    CartBadge = locator('.shopping_cart_badge');
    CartItems = locator('.cart_item');
    CartItem = locator.template(text => `.cart_item:has-text("${text}")`).as(CartItem);
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
