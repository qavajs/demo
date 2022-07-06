Feature: this is test feature

  Scenario: equals
    Then I expect '$value1' equals '42'
    Then I expect '$value1' equals '$value2'
    Then I expect '$value1' does not equal '1'
    Then I expect '$value1' does not equal '$value3'

  Scenario: contains
    Then I expect '$value1' contains '4'
    Then I expect '$value1' contains '$value2'
    Then I expect '$value1' does not contain '1'
    Then I expect '$value1' does not contain '$value3'
