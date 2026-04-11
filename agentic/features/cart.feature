Feature: Cart

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
    Given I open '$app' url
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
    Given I open '$app' url
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
    Given I open '$app' url
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
