import { locator } from '@qavajs/steps-wdio/po';
export default class App {
    Product = locator
        .template(text => `//*[@class='shelf-item'][./p[@class='shelf-item__title'][text()='${text}']]`)
        .as(Product);
    Cart = locator('.float-cart').as(Cart);
}

class Product {
    AddToCart = locator('.shelf-item__buy-btn');
}

class Cart {
    Subtotal = locator('.sub-price__val');
}