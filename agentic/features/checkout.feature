Feature: Checkout

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
    Given I open '$app' url
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
  @agentDebug
  Scenario: Verify that user is able to checkout multiple items
    Given I open '$app' url
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
