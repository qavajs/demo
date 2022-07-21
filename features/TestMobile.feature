Feature: wdio test feature

  # @mobile
  # Scenario: Mobile Login
  #   When I click 'Nav Menu > Login Button'
  #   When I type 'Username@email.com' to 'Login Form > Username'
  #   When I type 'Password' to 'Login Form > Password'
  #   When I click 'Login Form > Login Button'
  #   Then I expect 'Notification Popup' to be visible
  #   Then I expect text of 'Notification Popup > Message' equals 'You are logged in!' 
  #   When sleep

  @mobile
  Scenario: Mobile Login
    When I click 'Nav Menu > #3 of Buttons'
    When I type 'Username@email.com' to 'Login Form > Username'
    When I type 'Password' to 'Login Form > Password'
    When I click 'Login Form > Login Button'
    Then I expect 'Notification Popup' to be visible
    Then I expect text of 'Notification Popup > Message' equals 'You are logged in!'