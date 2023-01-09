package MyRunner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
		features = "C:/RU$HI's/rushi2828_gitProjects/CucumberBDDSel/src/main/java/Features/login.feature", 
		glue = {"stepDefination" },
		plugin = {})

public class TestRunner extends AbstractTestNGCucumberTests {

}