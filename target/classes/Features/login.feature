# This is feature file.

Feature: Login Association

Scenario Outline: Login test

Given user is on login page
When Title is login page
Then user enters login credentials "<username>" and "<pass>"
Then click login button
Then closed browser

Examples:
	| username  | pass |
	| testdata	| testdata |	