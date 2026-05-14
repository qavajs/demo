@chrome-extension
Feature: Counter Extension Popup

  Background:
    Given I open '$extensionPopupUrl' url

  Scenario: Default count is zero
    Then I expect text of 'Counter > Count' to equal '0'

  Scenario: Increment increases count
    When I click 'Counter > Increment'
    Then I expect text of 'Counter > Count' to equal '1'
    When I click 'Counter > Increment'
    Then I expect text of 'Counter > Count' to equal '2'

  Scenario: Decrement decreases count
    When I click 'Counter > Increment'
    And I click 'Counter > Increment'
    And I click 'Counter > Increment'
    And I click 'Counter > Decrement'
    Then I expect text of 'Counter > Count' to equal '2'

  Scenario: Reset returns count to zero
    When I click 'Counter > Increment'
    And I click 'Counter > Increment'
    And I click 'Counter > Reset'
    Then I expect text of 'Counter > Count' to equal '0'

  Scenario: Status message appears on interaction
    When I click 'Counter > Increment'
    Then I expect text of 'Counter > Status' to contain 'Incremented'
    When I click 'Counter > Reset'
    Then I expect text of 'Counter > Status' to contain 'Reset'
