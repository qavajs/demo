Feature: this is test feature

  @wikipedia
  Scenario Outline: search in wikipedia (<term>)
    When open 'https://www.wikipedia.org/' url
    And type '<term>' to 'Wikipedia > Search Input'
    And click 'Wikipedia > Search Button'
    And text of 'Wikipedia Article > Title' element should be equal to 'Javacript'

    Examples:
      | term       |
      | Javascript |
#      | JavaScript |
#      | javascript |
