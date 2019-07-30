package com.test.testRunner;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Stuff\\Reetu\\WorkSpace\\CucumberBDD\\src\\main\\java\\com\\test\\feature\\Demo.feature",
		glue="com/test/stepDefination",
		monochrome=true,
		dryRun=false
		)

public class TestRunner {

}
