Feature: Template

  @wikipedia
  Scenario Outline: search in wikipedia (<term>)
    When I search for '<term>' in wikipedia
    Then Verify 'Wikipedia Article' title equals '<term>'

    Examples:
      | term       |
      | JavaScript |
      | Java       |
      | Python     |
