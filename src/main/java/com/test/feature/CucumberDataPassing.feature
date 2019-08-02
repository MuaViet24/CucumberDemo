Feature: Cucumber BDD Data passing

Scenario: Cucumber BDD Data Passing without Ex 

Given ths is present
When this is "user"
Then thi is ok

#Feature: Cucumber BDD Data passing Ex

@Execute1
Scenario Outline: Cucumber BDD Data Passing with Ex

Given check with pre
When pass the "<user>"
Then thi is ok

Examples:
| user|
| test |
| XXX |
| YYY |


#Below approach is good if only 1 set of row data needs to be passed, if multiple
#row needs to be tested prefer Examples sample
#Disadvantage of below scenario is its not readable as data doesnot have header
#and tester may not understand what value is being passed
@Execute2
Scenario: Cucumber BDD Step wise data passing with DataTable as ListValue

Given ths is present
When this is ok user for ListValue
| data |
Then thi is ok

#To overcome the disadvantage of above scenario we can use Data table as Map value
@Execute3
Scenario: Cucumber BDD Step wise data passing with DataTable as MapValue

Given ths is present
When this is ok user for MapValue
| UserName |
| admin1 |
| admin2 |
| admin3 |
Then thi is ok
