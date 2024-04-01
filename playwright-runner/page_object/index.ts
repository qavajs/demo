import { $, $$, Component } from '@qavajs/po-playwright';

export default class App {
  UsernameInput = $('#user-name');
  PasswordInput = $('#password');
  LoginButton = $('#login-button');
  ErrorMessage = $('div.error');
  AppLogo = $('.app_logo');
  Products = $$(new Product('.inventory_item'));
  CartButton = $('a.shopping_cart_link');
  CartBadge = $('.shopping_cart_badge');
  CartItems = $$(new CartItem('.cart_item'));
  CheckoutButton = $('#checkout');
  CheckoutFirstName = $('#first-name');
  CheckoutLastName = $('#last-name');
  CheckoutPostalCode = $('#postal-code');
  ContinueButton = $('#continue');
  SummaryTotal = $('.summary_total_label');
  FinishButton = $('#finish');
  CompleteOrderHeader = $('.complete-header');
  MenuButton = $('button#react-burger-menu-btn');
  BurgerMenu = $(new Menu('.bm-menu'));
}

class Product extends Component {
  Price = $('.inventory_item_price');
  AddToCart = $('[data-test^=add-to-cart]');
}

class CartItem extends Component {
  Title = $('.inventory_item_name');
  Price = $('.inventory_item_price');
  Remove = $('[data-test^=remove]');
  UsernameInput = $('#user-name');
  PasswordInput = $('#password');
  LoginButton = $('#login-button');
  AppLogo = $('.app_logo');
}

class Menu extends Component {
  LogoutButton = $('a#logout_sidebar_link');
}
