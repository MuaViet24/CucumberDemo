package com.test.stepDefination;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HooksStepDefination {
	
	/*
	 * Hooks can classified into 2 type- Global , Local
	 * Global Hooks- @Before , @After
	 * Local Hooks-These are tagged hooks. @Before , @After only to be executed before specific scenario
	 * We can define multiple Global Hooks which gets executed based 
	 * based on order defined	
	*/
	
	//Global Hook
	@Before(order=0)
	public void setup(){
		System.out.println("Launch Browser");
		System.out.println("Enter the URL");
	}
	@Before(order=1)
	public void setup1(){
		System.out.println("Second Before Global Hook");
		
	}
	//Tagged Hook
	@Before("@First")
	public void execute_before_firs_scenario(){
		System.out.println("Method executed just before first scenario");
	}
	
	@Given("^user is on contacts page$")
	public void user_is_on_contacts_page(){
		System.out.println("user is on contacts page");
		
	}
	
	@When("^user clicks on new contact and enter details$")
	public void user_clicks_on_new_contact_and_enter_details(){
		System.out.println("user clicks on new contact and enter details");
	}
	
	@Then("^user new contact details updated$")
	public void user_new_contact_details_updated(){
		System.out.println("user new contact details updated");
		
	}
	
	//Tagged Hook
	@After("@First")
	public void execute_after_firs_scenario(){
		System.out.println("Method executed just after first scenario");
	}
	
	//Global Hook
	@After(order=0)
	public void teardown(){
		System.out.println("Close the browser"); 
		
		
	}
	
	@After(order=1)
	public void teardown1(){
		System.out.println("Second After Global Hook"); 
		
		
	}

}
