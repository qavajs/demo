Feature: Mobile Native

  @mobile
  Scenario: Mobile Login
    When I click 'Nav Menu > #3 of Buttons'
    When I type 'Username@email.com' to 'Login Form > Username'
    When I type 'Password' to 'Login Form > Password'
    When I click 'Login Form > Login Button'
    Then I expect 'Notification Popup' to be visible
    Then I expect text of 'Notification Popup > Message' equals 'You are logged in!'

  @mobile @ios
  Scenario: Mobile Login
    When I click 'Nav Menu > #Forms in Buttons'
    When I type 'This is qavajs' to 'Form > Input Field'
    When I expect text of 'Form > You Have Typed' to equal 'This is qavajs'
    When I click 'Form > Switch'
    And I expect 'Form > Switch On' to be visible
    When I click 'Form > Dropdown'
    When I type 'webdriver.io is awesome' to 'Form > Wheel'
    And I click 'Form > Wheel Done'
    Then I click 'Form > Button'
