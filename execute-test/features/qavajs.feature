Feature: Demo

  Scenario: Verify that user is able to login
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I expect text of 'App Logo' to equal 'Swag Labs'

  Scenario: Verify that user is able to add item to cart
    Given dependent on 'Verify that user is able to login' from 'features/qavajs.feature'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '1'
    When I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '1'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible

  Scenario: Verify that user is able to add multiple items to cart
    Given dependent on 'Verify that user is able to login' from 'features/qavajs.feature'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '1'
    And I click 'Product (Sauce Labs Bike Light) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '2'
    When I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '2'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible
    And I expect 'Cart Item (Sauce Labs Bike Light)' to be visible

  Scenario: Verify that user is able to remove item from cart
    Given dependent on 'Verify that user is able to add item to cart' from 'features/qavajs.feature'
    When I click 'Cart Item (Sauce Labs Backpack) > Remove'
    Then I expect number of elements in 'Cart Items' collection to equal '0'
    Then I expect 'Cart Badge' not to be visible

  Scenario: Verify that user is able to checkout
    Given dependent on 'Verify that user is able to login' from 'features/qavajs.feature'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    When I click 'Cart Button'
    Then I expect 'Cart Item (Sauce Labs Backpack)' to be visible
    When I click 'Checkout Button'
    And I type 'John' to 'Checkout First Name'
    And I type 'Dou' to 'Checkout Last Name'
    And I type '12345' to 'Checkout Postal Code'
    And I click 'Continue Button'
    Then I expect text of 'Summary Total' to equal 'Total: $32.39'
    When I click 'Finish Button'
    Then I expect text of 'Complete Order Header' to equal 'Thank you for your order!'

  Scenario: Verify that user is able to checkout multiple items
    Given dependent on 'Verify that user is able to login' from 'features/qavajs.feature'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    And I click 'Product (Sauce Labs Bike Light) > Add To Cart'
    And I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '2'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible
    And I expect 'Cart Item (Sauce Labs Bike Light)' to be visible
    When I click 'Checkout Button'
    And I type 'John' to 'Checkout First Name'
    And I type 'Dou' to 'Checkout Last Name'
    And I type '12345' to 'Checkout Postal Code'
    And I click 'Continue Button'
    Then I expect text of 'Summary Total' to equal 'Total: $43.18'
    When I click 'Finish Button'
    Then I expect text of 'Complete Order Header' to equal 'Thank you for your order!'

  Scenario: Verify that non-existing user is not able to login
    Given I open '$app' url
    When I type 'standard_user_123' to 'Username Input'
    And I type 'secret_sauce_123' to 'Password Input'
    And I click 'Login Button'
    And I expect 'Error Message' to be visible
    And I expect text of 'Error Message' to equal 'Epic sadface: Username and password do not match any user in this service'

  Scenario: Verify that user is able to logout
    Given dependent on 'Verify that user is able to login' from 'features/qavajs.feature'
    And I expect text of 'App Logo' to equal 'Swag Labs'
    When I click 'Menu Button'
    Then I expect 'Burger Menu' to be visible
    When I click 'Burger Menu > Logout Button'
    Then I expect 'Username Input' to be visible
    And I expect 'Password Input' to be visible
    And I expect 'Login Button' to be visible
