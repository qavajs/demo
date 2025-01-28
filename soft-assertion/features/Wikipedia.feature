Feature: Desktop Web Feature

  @wikipedia
  Scenario Outline: Search in wikipedia (<term>)
    Given I open '$wikipediaUrl' url
    When I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I softly expect text of 'Wikipedia Article > Title' equals '<term>'
    And I softly expect text of 'Wikipedia Article > Title' to contain 'Python'
    And I softly expect 'Wikipedia Article > Title' to be visible

    @JavaScript
    Examples:
      | term       |
      | JavaScript |

    @Java
    Examples:
      | term       |
      | Java       |
