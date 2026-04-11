Feature: Inventory

#  Test Case 9: Verify Sort on Product List Page (Inventory)
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Select 'Name (Z to A)' option from the 'Sort Dropdown'.
#  Verify that the text of 'First Product Name' equals 'Test.allTheThings() T-Shirt (Red)'.
#  Select 'Price (low to high)' option from the 'Sort Dropdown'.
#  Verify that the text of 'First Product Name' equals 'Sauce Labs Onesie'.
#  Expected Results:
#
#  Products are correctly reordered according to the selected sort criteria.
  Scenario: Verify that user is able to sort products on inventory page
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    When I select 'Name (Z to A)' option from 'Sort Dropdown' dropdown
    Then I expect text of 'First Product Name' to equal 'Test.allTheThings() T-Shirt (Red)'
    When I select 'Price (low to high)' option from 'Sort Dropdown' dropdown
    Then I expect text of 'First Product Name' to equal 'Sauce Labs Onesie'

#  Test Case 10: Verify Sort Z to A on Product List Page
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Select 'Name (Z to A)' option from the 'Sort Dropdown'.
#  Expected Results:
#
#  The first product displayed is 'Test.allTheThings() T-Shirt (Red)' (alphabetically last).
  Scenario: Verify that user is able to sort products by name Z to A
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    When I select 'Name (Z to A)' option from 'Sort Dropdown' dropdown
    Then I expect text of 'First Product Name' to equal 'Test.allTheThings() T-Shirt (Red)'

#  Test Case 11: Verify Sort by Price Ascending on Product List Page
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Select 'Price (low to high)' option from the 'Sort Dropdown'.
#  Expected Results:
#
#  The first product displayed is 'Sauce Labs Onesie' (cheapest item at $7.99).
  Scenario: Verify that user is able to sort products by price ascending
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    When I select 'Price (low to high)' option from 'Sort Dropdown' dropdown
    Then I expect text of 'First Product Name' to equal 'Sauce Labs Onesie'

#  Test Case 12: Verify Sort by Price Descending on Product List Page
#  Preconditions:
#
#  The user is logged in (follow steps from "Verify User Login").
#  Steps:
#
#  Select 'Price (high to low)' option from the 'Sort Dropdown'.
#  Expected Results:
#
#  The first product displayed is 'Sauce Labs Fleece Jacket' (most expensive item at $49.99).
  Scenario: Verify that user is able to sort products by price descending
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    When I select 'Price (high to low)' option from 'Sort Dropdown' dropdown
    Then I expect text of 'First Product Name' to equal 'Sauce Labs Fleece Jacket'
