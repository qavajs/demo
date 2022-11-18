Feature: Mobile Web

  @wikipedia
  Scenario: search in wikipedia JavaScript
    Given I open '$wikipediaUrl' url
    When I type 'JavaScript' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I expect text of 'Wikipedia Article > Title' equals 'JavaScript'
    And I wait until text of 'Wikipedia Article > Title' not to contain 'Python'
    And I wait until 'Wikipedia Article > Title' to be visible
    And I expect 'Wikipedia Article > Title' to be visible

