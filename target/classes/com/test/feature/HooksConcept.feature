Feature: Cucumber BDD create contacts feature

#Hooks are define by @Before, @After tags in step defination file imported from Cucumber.api package
#Hooks are used to define pre and post conditions
@First
Scenario: Cucumber BDD create contacts test

Given user is on contacts page
When user clicks on new contact and enter details
Then user new contact details updated