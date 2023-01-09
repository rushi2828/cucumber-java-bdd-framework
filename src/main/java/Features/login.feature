# This is feature file.

Feature: Login to saucedemo website 

Background:
Given User is on saucedemo page https://www.saucedemo.com/

@ValidCredentials
Scenario: Login with valid credentials 

When user enters login credentials "standard_user" and "secret_sauce"
Then User should be able to login succesfully 

Examples:
	| username  | pass |
	| standard_user	| secret_sauce |	