package com.test.stepDefination;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DemoStepDefination {
	
	
	@Given("^features file has been created$")
	public void test1(){
		System.out.println("test1");
	}
	
	@When("^defination file has been linked$")
	public void test2(){
		System.out.println("test2");
	}
	
	@Then("^run the runner file$")
	public void test3(){
		System.out.println("test3");
	}
	
	

}
