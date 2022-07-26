Feature: wdio test feature

  @wikipedia
  Scenario Outline: search in wikipedia (<term>)
    When I search for '<term>' in wikipedia
    Then Verify 'Wikipedia Article' element equals '<term>'

    Examples:
      | term       |
      | JavaScript |
      | Java       |
      | Python     |
