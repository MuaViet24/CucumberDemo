package com.test.testRunner;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Stuff\\Reetu\\WorkSpace\\CucumberBDD\\src\\main\\java\\com\\test\\feature\\HooksConcept.feature",
		glue="com/test/stepDefination",
		//plugin={"pretty","html:test-output"},
		//plugin={"pretty"},
		monochrome=true,
		dryRun=false
		//tags={"@Execute3 or @Execute2 or not @Execute1"}
		//tags={"@Execute3 and @Execute1"}- dont exist
		)

public class TestRunner {

}
