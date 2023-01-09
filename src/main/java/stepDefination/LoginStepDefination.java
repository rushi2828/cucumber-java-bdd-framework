package stepDefination;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefination {

	private static WebDriver driver;

	/*
	 * This is a cucumber-jvm
	 */

	@Before
	public void setUp() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}

	@Given("User is on saucedemo page https:\\/\\/www.saucedemo.com\\/")
	public void user_is_on_saucedemo_page_https_www_saucedemo_com() {
		driver.get("https://www.saucedemo.com/");
	}

	@When("user enters login credentials {string} and {string}")
	public void user_enters_login_credentials_and(String userName, String password) {
		driver.findElement(By.xpath("//*[@id=\"user-name\"]")).sendKeys(userName);
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id=\"login-button\"]")).click();
	}

	@Then("User should be able to login succesfully")
	public void user_should_be_able_to_login_succesfully() {
		String title = driver.getTitle();
		Assert.assertEquals(title, "Swag Labs");
	}

	@After
	public void teardown() {
		driver.quit();
	}
}
