Feature: Accessibility

  @accessibility
  Scenario: I verify accessibility
    Given I open '$baseUrl' url
    And I perform accessibility check:
    """
    {
      "outputFormat": ["json", "html"],
      "failLevels": ["violation"]
    }
    """
