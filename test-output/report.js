$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/git_rushi2828/Cucmber_Selenium/src/main/java/Features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# This is feature file."
    }
  ],
  "line": 3,
  "name": "Login Association",
  "description": "",
  "id": "login-association",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login test",
  "description": "",
  "id": "login-association;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title is login page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Then user enters login credentials \"healthpole12@gmail.com\" and \"testqwer\""
    }
  ],
  "line": 10,
  "name": "user enters login credentials \"\u003cusername\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "closed browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-association;login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ],
      "line": 15,
      "id": "login-association;login-test;;1"
    },
    {
      "cells": [
        "healthpole12@gmail.com",
        "testqwer"
      ],
      "line": 16,
      "id": "login-association;login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login test",
  "description": "",
  "id": "login-association;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title is login page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Then user enters login credentials \"healthpole12@gmail.com\" and \"testqwer\""
    }
  ],
  "line": 10,
  "name": "user enters login credentials \"healthpole12@gmail.com\" and \"testqwer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "closed browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 39272266826,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_is_login_page()"
});
formatter.result({
  "duration": 98519754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthpole12@gmail.com",
      "offset": 31
    },
    {
      "val": "testqwer",
      "offset": 60
    }
  ],
  "location": "LoginStepDefination.user_enters_login_credentials_and(String,String)"
});
formatter.result({
  "duration": 10090030340,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_login_button()"
});
formatter.result({
  "duration": 12581177434,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PC\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\dell\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50815}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: cd5f7c36439f922d5ff1a8b7094beff0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefination.LoginStepDefination.click_login_button(LoginStepDefination.java:43)\r\n\tat ✽.Then click login button(D:/git_rushi2828/Cucmber_Selenium/src/main/java/Features/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.closed_browser()"
});
formatter.result({
  "status": "skipped"
});
});