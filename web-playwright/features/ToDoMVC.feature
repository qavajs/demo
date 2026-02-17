@todoapp
Feature: Todo MVC

  Background:
    Given I open '$todo' url

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (1)' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Text (qavajs) > Complete'
    Then I expect 'text-decoration' css property of 'Todo By Text (qavajs) > Label' to contain 'line-through'

  Scenario: Remove todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I hover over 'Todo By Text (qavajs) > Label'
    And I click 'Todo By Text (qavajs) > Remove'
    Then I expect 'Todo By Text (qavajs) > Remove' not to be present

  Scenario: Add multiple todos and remove one
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 3' to 'Todo Input'
    And I press 'Enter' key
    And I hover over 'Todo By Index (1) > Label'
    And I expect 'Todo By Index (1) > Remove' to be visible
    And I click 'Todo By Index (1) > Remove'
    And I expect text of 'Todo By Index (1)' to equal 'new todo 2'

  Scenario: Add and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 3' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (3)' to equal 'new todo'
    And I expect text of 'Todo By Index (2)' to equal 'new todo 2'
    And I expect text of 'Todo By Index (1)' to equal 'new todo 3'
    And I expect number of elements in 'Todos' collection to equal '3'
    And I hover over 'Todo By Index (2)'
    And I expect 'Todo By Index (2) > Remove' to be visible
    And I click 'Todo By Index (2) > Remove'
    And I expect text of 'Todo By Index (2)' to equal 'new todo'
    And I expect text of 'Todo By Index (1)' to equal 'new todo 3'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (1) > Complete'
    And I click 'Todo By Index (2) > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '0'

  Scenario: Add and complete todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I expect text of 'Todo Counter' to equal '1 item left'
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I expect text of 'Todo Counter' to equal '2 items left'
    And I click 'Todo By Index (1) > Complete'
    And I expect text of 'Todo Counter' to equal '1 item left'

  Scenario: Complete and filter todos (active)
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (1) > Complete'
    And I click 'Active Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'new todo'

  Scenario: Complete and filter todos (completed)
    When I type 'new todo 1' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (1) > Complete'
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'new todo 2'

  Scenario: Complete and filter todos
    When I type 'new todo 1' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (1) > Complete'
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'new todo 2'
