Feature: Actions

  Scenario: I search for <term> in wikipedia
    When I open 'https://www.wikipedia.org/' url
    And I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'

  Scenario: Verify <element> element equals <term>
    And I expect text of '<element> > Title' equals '<term>'
    And I wait until '<element> > Title' to be visible
    And I wait until number of elements in '<element> > References' collection to be below '109'
