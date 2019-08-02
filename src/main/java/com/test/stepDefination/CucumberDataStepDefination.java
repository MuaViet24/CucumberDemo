package com.test.stepDefination;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CucumberDataStepDefination {

	@Given("^ths is present$")
	public void this_is_present(){

	}
	@When("^this is \"(.*)\"$")
	public void this_is_user(String val){
		System.out.println("Parameter passed ====>" + val);
	}
	@Then("^thi is ok$")
	public void this_is_ok(){

	}

	@Given("^check with pre$")
	public void check_with_pre(){

	}

	@When("^pass the \"(.*)\"$")
	public void pass_the_user(String data){
		System.out.println("Values passed ====>" + data);
	}

	@When("^this is ok user for ListValue$")
	public void this_is_ok_user_for_ListValue(DataTable dataTable){

		List<List<String>> list =dataTable.asLists();
		System.out.println("Data table value passed====>" + list.get(0).get(0));
	}

	@When("^this is ok user for MapValue$")
	public void this_is_ok_user_for_MapValue(DataTable tab){

		for(Map<Object, Object> map1 : tab.asMaps(String.class, String.class)){
			System.out.println(map1.get("UserName"));
		}



	}



}
