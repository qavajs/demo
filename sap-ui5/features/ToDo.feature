Feature: SAP UI5

  Background:
    Given I open '$sapToDo' url

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (3)' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Text (qavajs) > Complete'
    Then I expect 'text-decoration' css property of 'Todo By Text (qavajs) > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (3) > Complete'
    And I click 'Todo By Index (4) > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (3)' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Text (qavajs) > Complete'
    Then I expect 'text-decoration' css property of 'Todo By Text (qavajs) > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (3) > Complete'
    And I click 'Todo By Index (4) > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (3)' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Text (qavajs) > Complete'
    Then I expect 'text-decoration' css property of 'Todo By Text (qavajs) > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (3) > Complete'
    And I click 'Todo By Index (4) > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of 'Todo By Index (3)' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Text (qavajs) > Complete'
    Then I expect 'text-decoration' css property of 'Todo By Text (qavajs) > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click 'Todo By Index (3) > Complete'
    And I click 'Todo By Index (4) > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of 'Todo By Index (1)' to equal 'Start this app'
