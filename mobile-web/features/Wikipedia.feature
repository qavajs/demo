Feature: Mobile Web

  @wikipedia
  Scenario Outline: search in wikipedia (<term>)
    Given I open '$wikipediaUrl' url
    When I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I expect text of 'Wikipedia Article > Title' equals '<term>'
    And I wait until text of 'Wikipedia Article > Title' not to contain 'Python'
    And I wait until 'Wikipedia Article > Title' to be visible
    And I expect 'Wikipedia Article > Title' to be visible

    Examples:
      | term       |
      | JavaScript |
      | Java       |
