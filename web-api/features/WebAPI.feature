Feature: API

  Scenario: Verify simple send
    When I send 'GET' request to "https://jsonplaceholder.typicode.com/todos/1" and save response as 'response'
    And I parse '$response' body as json
    Then Response "$response" Status Code to be equal '200'
    Then Response "$response.payload" contains:
      | userId    |
      | id        |
      | title     |
      | completed |
    Then I expect '$response.payload.userId' equals '1'
    Then I expect '$response.payload.id' equals '1'
    Then I expect '$response.payload.title' equals 'delectus aut autem'
    Then I expect '$response.payload.completed' equals '$boolean("false")'

  Scenario: Verify simple send via construction api
    Given I create 'POST' request 'request'
    And I add 'https://jsonplaceholder.typicode.com/posts' url to '$request'
    And I add body to '$request':
    """
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    """
    And I send '$request' request and save response as 'response'
    And I parse '$response' body as json
    Then Response '$response' Status Code to be equal '201'
    And Response '$response' Status Message to be equal 'Created'
