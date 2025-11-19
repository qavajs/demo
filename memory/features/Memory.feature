Feature: Memory

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

  Scenario: math expression
    When I save '$js($value1 / 2)' to memory as 'result1'
    When I save result of math expression '{$value1} / 2' as 'result2'
    Then I expect '$result1' equals '21'
    Then I expect '$result2' equals '21'
