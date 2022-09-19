Feature: Actions

  Scenario: I search for '<term>' in wikipedia
    When I open 'https://www.wikipedia.org/' url
    And I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'

  Scenario: Verify '<element>' title equals '<term>'
    And I expect text of '<element> > Title' equals '<term>'
