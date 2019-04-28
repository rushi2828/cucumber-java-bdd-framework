package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefination {
	
	WebDriver driver;
/*
 * This is a cucumber-jvm
 * */	
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();;
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("URL");
	}

	@When("^Title is login page$")
	public void title_is_login_page() {
		String title = driver.getTitle();
		System.out.println(title);		
	}

	@Then("^user enters login credentials \"(.*)\" and \"(.*)\"$")
	public void user_enters_login_credentials(String username, String pass) {
	    driver.findElement(By.xpath("//div[@class='col-lg-5 col-md-5 signup-desktop-div']//div[@class='desktop-view']//input[@id='email'] ")).sendKeys(username);
	    driver.findElement(By.xpath("//div[@class='col-lg-5 col-md-5 signup-desktop-div']//div[@class='desktop-view']//input[@id='password'] ")).sendKeys(pass);
	}

	@Then("^click login button$")
	public void click_login_button() {
		driver.findElement(By.xpath("//div[@class='col-lg-5 col-md-5 signup-desktop-div']//div[@class='desktop-view']//input[@id='login_btn']")).click();
	}

	@Then("^closed browser$")
	public void closed_browser(){
		driver.quit();
	}

}
