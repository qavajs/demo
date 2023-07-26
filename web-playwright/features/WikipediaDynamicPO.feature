Feature: Desktop Web Feature with dynamic PO

  Background:
    Given I define '.search-container #searchInput' as 'Wikipedia Search Input' element
    And I define '.search-container button[type=submit]' as 'Wikipedia Search Button' element
    And I define '#content #firstHeading' as 'Wikipedia Article Title' element

  @wikipedia
  Scenario Outline: Search in wikipedia (<term>)
    Given I open '$wikipediaUrl' url
    When I type '<term>' to 'Wikipedia Search Input'
    And I click 'Wikipedia Search Button'
    And I expect text of 'Wikipedia Article Title' equals '<term>'
    And I wait until text of 'Wikipedia Article Title' not to contain 'Python'
    And I wait until 'Wikipedia Article Title' to be visible
    And I expect 'Wikipedia Article Title' to be visible

    Examples:
      | term       |
      | JavaScript |
      | Java       |
