Feature: Sauce Demo

#  Test Case 1: Verify User Login
#  Preconditions:
#
#  The user navigates to the '$sauceDemoUrl' URL.
#  Steps:
#
#  Enter 'standard_user' into the 'Username Input'.
#  Enter 'secret_sauce' into the 'Password Input'.
#  Click on the 'Login Button'.
#  Expected Results:
#
#  Verify that the text of 'App Logo' is equal to 'Swag Labs'.
  Scenario: Verify that user is able to login
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I expect text of 'App Logo' to equal 'Swag Labs'

#  Test Case 2: Verify Adding Item to Cart
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Click on 'Add To Cart' button of 'Sauce Labs Backpack'.
#  Verify that the text of 'Cart Badge' is '1'.
#  Click on 'Cart Button'.
#  Verify there is one item in 'Cart Items'.
#  Verify that 'Sauce Labs Backpack' Cart Item is visible.
  Scenario: Verify that user is able to add item to cart
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '1'
    When I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '1'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible

#  Test Case 3: Verify Adding Multiple Items to Cart
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Click on 'Add To Cart' button of 'Sauce Labs Backpack'
#  Verify that the text of 'Cart Badge' is '1'.
#  Click on 'Add To Cart' button of 'Sauce Labs Bike Light'
#  Verify that the text of 'Cart Badge' is '2'.
#  Click on 'Cart Button'.
#  Verify there are two items in 'Cart Items'.
#  Verify 'Sauce Labs Backpack' and 'Sauce Labs Bike Light' in Cart Items are visible.
  Scenario: Verify that user is able to add multiple items to cart
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '1'
    And I click 'Product (Sauce Labs Bike Light) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '2'
    When I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '2'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible
    And I expect 'Cart Item (Sauce Labs Bike Light)' to be visible

#  Test Case 4: Verify Removing Item from Cart
#  Preconditions:
#
#  The user has an item in the cart (follow steps from "Verify Adding Item to Cart").
#  Steps:
#
#  Click on 'Cart Button'.
#  Verify there is one item in 'Cart Items'.
#  Verify 'Sauce Labs Backpack' in Cart Items is visible.
#  Click on Remove button on 'Sauce Labs Backpack' Cart Item.
#  Verify there are no items in 'Cart Items'.
#  Verify 'Cart Badge' is not visible.
  Scenario: Verify that user is able to remove item from cart
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I click 'Product (Sauce Labs Backpack) > Add To Cart'
    Then I expect text of 'Cart Badge' to equal '1'
    When I click 'Cart Button'
    Then I expect number of elements in 'Cart Items' collection to equal '1'
    And I expect 'Cart Item (Sauce Labs Backpack)' to be visible
    When I click 'Cart Item (Sauce Labs Backpack) > Remove'
    Then I expect number of elements in 'Cart Items' collection to equal '0'
    Then I expect 'Cart Badge' not to be visible

#  Test Case 5: Verify Checkout Process
#  Preconditions:
#
#  The user has an item in the cart (follow steps from "Verify Adding Item to Cart").
#  Steps:
#
#  Click on 'Cart Button'.
#  Verify '#Sauce Labs Backpack in Cart Items' is visible.
#  Click on 'Checkout Button'.
#  Enter 'John' into 'Checkout First Name'.
#  Enter 'Dou' into 'Checkout Last Name'.
#  Enter '12345' into 'Checkout Postal Code'.
#  Click on 'Continue Button'.
#  Verify that the text of 'Summary Total' is 'Total: $32.39'.
#  Click on 'Finish Button'.
#  Verify that the text of 'Complete Order Header' is 'Thank you for your order!'.
  Scenario: Verify that user is able to checkout
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
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


#  Test Case 6: Verify Checkout Process for multiple items
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Click on 'Add To Cart' button of 'Sauce Labs Backpack'
#  Verify that the text of 'Cart Badge' is '1'.
#  Click on 'Add To Cart' button of 'Sauce Labs Bike Light'
#  Verify that the text of 'Cart Badge' is '2'.
#  Click on 'Cart Button'.
#  Verify there are two items in 'Cart Items'.
#  Verify 'Sauce Labs Backpack' and 'Sauce Labs Bike Light' in Cart Items are visible.
#  Click on 'Checkout Button'.
#  Enter 'John' into 'Checkout First Name'.
#  Enter 'Dou' into 'Checkout Last Name'.
#  Enter '12345' into 'Checkout Postal Code'.
#  Click on 'Continue Button'.
#  Verify that the text of 'Summary Total' is 'Total: $43.18'.
#  Click on 'Finish Button'.
#  Verify that the text of 'Complete Order Header' is 'Thank you for your order!'.
  Scenario: Verify that user is able to checkout multiple items
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
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

#  Test Case 7: Verify Non-Existing User Is not Able to Login
#  Preconditions:
#
#  The user navigates to the '$sauceDemoUrl' URL.
#  Steps:
#
#  Enter 'standard_user_123' into the 'Username Input'.
#  Enter 'secret_sauce_123' into the 'Password Input'.
#  Click on the 'Login Button'.
#  Expected Results:
#  Verify that 'Error Message' is displayed
#  Verify that the text of 'Error Message' is equal to 'Epic sadface: Username and password do not match any user in this service'.
  Scenario: Verify that non-existing user is not able to login
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user_123' to 'Username Input'
    And I type 'secret_sauce_123' to 'Password Input'
    And I click 'Login Button'
    And I expect 'Error Message' to be visible
    And I expect text of 'Error Message' to equal 'Epic sadface: Username and password do not match any user in this service'

#  Test Case 8: Verify User is able to logout
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Click on the 'Menu Button'.
#  Verify that 'Burger Menu' is displayed
#  Click on the 'Logout Button in Burger Menu'.
#  Verify that 'Username Input' is displayed.
#  Verify that 'Password Input' is displayed.
#  Verify that 'Login Button' is displayed.
  Scenario: Verify that user is able to logout
    Given I open '$sauceDemoUrl' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I expect text of 'App Logo' to equal 'Swag Labs'
    When I click 'Menu Button'
    Then I expect 'Burger Menu' to be visible
    When I click 'Burger Menu > Logout Button'
    Then I expect 'Username Input' to be visible
    And I expect 'Password Input' to be visible
    And I expect 'Login Button' to be visible
