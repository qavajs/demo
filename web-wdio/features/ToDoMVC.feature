@todoapp
Feature: Todo MVC

  Background:
    Given I open '$todo' url

  Scenario: Add new todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    Then I expect text of '#1 of Todos' to equal 'Learn qavajs'

  Scenario: Complete todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I click '#qavajs in Todos > Complete'
    Then I expect 'text-decoration' css property of '#qavajs in Todos > Label' to contain 'line-through'

  Scenario: Remove todo
    When I type 'Learn qavajs' to 'Todo Input'
    And I press 'Enter' key
    And I hover over '#qavajs in Todos > Label'
    And I click '#qavajs in Todos > Remove'
    Then I expect number of elements in 'Todos' collection to equal '0'
