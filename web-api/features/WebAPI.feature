Feature: API

  Scenario: Verify simple send
    When I send 'GET' request to "https://jsonplaceholder.typicode.com/todos/1" and save response as 'response'
    Then Response "$response" Status Code to be equal '200'
    Then Response "$response.payload" contains:
      | userId    |
      | id        |
      | title     |
      | completed |
    Then I expect '$response.payload.userId' equals '$number(1)'
    Then I expect '$response.payload.id' equals '$number(1)'
    Then I expect '$response.payload.title' equals 'delectus aut autem'
    Then I expect '$response.payload.completed' equals '$boolean("false")'
