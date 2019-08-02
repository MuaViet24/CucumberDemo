$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Stuff/Reetu/WorkSpace/CucumberBDD/src/main/java/com/test/feature/CucumberDataPassing.feature");
formatter.feature({
  "name": "Cucumber BDD Data passing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Cucumber BDD Data Passing without Ex",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "ths is present",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is \"user\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "thi is ok",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Cucumber BDD Data Passing with Ex",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "check with pre",
  "keyword": "Given "
});
formatter.step({
  "name": "pass the \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "this is ok",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user"
      ]
    },
    {
      "cells": [
        "test"
      ]
    },
    {
      "cells": [
        "XXX"
      ]
    },
    {
      "cells": [
        "YYY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cucumber BDD Data Passing with Ex",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "check with pre",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberDataStepDefination.check_with_pre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberDataStepDefination.pass_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is ok",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Cucumber BDD Data Passing with Ex",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "check with pre",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberDataStepDefination.check_with_pre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the \"XXX\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberDataStepDefination.pass_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is ok",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Cucumber BDD Data Passing with Ex",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "check with pre",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberDataStepDefination.check_with_pre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the \"YYY\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberDataStepDefination.pass_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is ok",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Cucumber BDD Step wise data passing",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "ths is present",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is ok user",
  "rows": [
    {
      "cells": [
        "data"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_ok_user(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "thi is ok",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberDataStepDefination.this_is_ok()"
});
formatter.result({
  "status": "passed"
});
});