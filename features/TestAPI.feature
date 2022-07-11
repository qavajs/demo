Feature: API

  Scenario: Verify simple send
    When I send 'GET' request to "https://jsonplaceholder.typicode.com/todos/1" and save response as 'response'
    Then Response '$response' Status Code is equal '200'
    Then Response '$response' contains:
      | userId    |
      | id        |
      | title     |
      | completed |
    Then I expect '$response.userId' equals '$number(1)'
    Then I expect '$response.id' equals '$number(1)'
    Then I expect '$response.title' equals 'delectus aut autem'
    Then I expect '$response.completed' equals '$boolean("false")'
