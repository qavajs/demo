Feature: SAP UI5

  Background:
    Given I open '$sapToDo' url

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of '#3 of Todos' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click '#qavajs in Todos > Complete'
    Then I expect 'text-decoration' css property of '#qavajs in Todos > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click '#3 of Todos > Complete'
    And I click '#4 of Todos > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of '#1 of Todos' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of '#1 of Todos' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of '#3 of Todos' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click '#qavajs in Todos > Complete'
    Then I expect 'text-decoration' css property of '#qavajs in Todos > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click '#3 of Todos > Complete'
    And I click '#4 of Todos > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of '#1 of Todos' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of '#1 of Todos' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of '#3 of Todos' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click '#qavajs in Todos > Complete'
    Then I expect 'text-decoration' css property of '#qavajs in Todos > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click '#3 of Todos > Complete'
    And I click '#4 of Todos > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of '#1 of Todos' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of '#1 of Todos' to equal 'Start this app'

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of '#3 of Todos' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click '#qavajs in Todos > Complete'
    Then I expect 'text-decoration' css property of '#qavajs in Todos > Label' to contain 'line-through'

  Scenario: Complete and remove todos
    When I type 'new todo' to 'Todo Input'
    And I press 'Enter' key
    And I type 'new todo 2' to 'Todo Input'
    And I press 'Enter' key
    And I click '#3 of Todos > Complete'
    And I click '#4 of Todos > Complete'
    And I click 'Clear Completed'
    Then I expect number of elements in 'Todos' collection to equal '1'

  Scenario: Complete and filter todos (active)
    And I click 'Active Filter'
    Then I expect text of '#1 of Todos' to equal 'Learn OpenUI5'

  Scenario: Complete and filter todos (completed)
    And I click 'Completed Filter'
    Then I expect text of '#1 of Todos' to equal 'Start this app'
