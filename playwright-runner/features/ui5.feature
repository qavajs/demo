Feature: SAP UI5

  Background:
    Given I open '$sapApp' url

  Scenario: Open order
    When I click 'Order (7375)'
    Then I expect text of 'Order Details > Title' to equal 'Order 7375'

  Scenario: Search order
    When I type 'Tortuga' to 'Search Input'
    And I click 'Search Button'
    Then I expect number of elements in 'Orders' collection to equal '2'
    And I expect 'Order (7918)' to be visible
    And I expect 'Order (6858)' to be visible

  Scenario: Open order processor
    When I click 'Order (7375)'
    And I click 'Order Details > Processor Information'
    Then I expect text of 'Order Details > Employee Name' to equal 'Jack Smith'