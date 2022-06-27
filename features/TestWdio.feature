Feature: wdio test feature

  @wikipedia
  Scenario Outline: search in wikipedia (<term>)
    When I open 'https://www.wikipedia.org/' url
    And I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I expect text of 'Wikipedia Article > Title' element equals 'JavaScript'

    Examples: 
      | term        |
      | Javascript  |
