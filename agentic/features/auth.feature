Feature: Authentication

#  Test Case 1: Verify User Login
#  Preconditions:
#
#  The user navigates to the '$app' URL.
#  Steps:
#
#  Enter 'standard_user' into the 'Username Input'.
#  Enter 'secret_sauce' into the 'Password Input'.
#  Click on the 'Login Button'.
#  Expected Results:
#
#  Verify that the text of 'App Logo' is equal to 'Swag Labs'.
  Scenario: Verify that user is able to login
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I expect text of 'App Logo' to equal 'Swag Labs'

#  Test Case 7: Verify Non-Existing User Is not Able to Login
#  Preconditions:
#
#  The user navigates to the '$app' URL.
#  Steps:
#
#  Enter 'standard_user_123' into the 'Username Input'.
#  Enter 'secret_sauce_123' into the 'Password Input'.
#  Click on the 'Login Button'.
#  Expected Results:
#  Verify that 'Error Message' is displayed
#  Verify that the text of 'Error Message' is equal to 'Epic sadface: Username and password do not match any user in this service'.
  Scenario: Verify that non-existing user is not able to login
    Given I open '$app' url
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
    Given I open '$app' url
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
