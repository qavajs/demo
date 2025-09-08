Feature: qavajs

  Scenario: qavajs interacts with mobitru website
    Given I open '$mobitruDocsUrl' url
    And I expect 'Search Input' to be visible
    And I type 'automation' to 'Search Input'
    And I click 'Search Button'
    And I click 'Search Result (Desktop browser Automation overview) > Read More'
    Then I expect text of 'Article Heading' to equal 'Desktop browser Automation'

  Scenario: qavajs interacts with mobitru website (Failed)
    Given I open '$mobitruDocsUrl' url
    And I expect 'Search Input' to be visible
    And I type 'automation' to 'Search Input'
    And I click 'Search Button'
    And I click 'Search Result (Desktop browser Automation overview) > Read More'
    Then I expect text of 'Article Heading' to equal 'Desktop browser Automation (Test)'
