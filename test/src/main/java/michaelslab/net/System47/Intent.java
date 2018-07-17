package michaelslab.net.System47;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Intent {
	// DesiredCapabilities capabilities = DesiredCapabilities.chrome();
	private WebDriver drv = null;
	
	public Intent() {
		System.setProperty("webdriver.chrome.driver", "/home/merdmann/work/eclipse-workspace-java/System47/lib/chromedriver");
		drv = new ChromeDriver();
	}
	
	public String command(String inputCommand) throws InterruptedException {
		drv.get("http://localhost:8080");
		drv.findElement(By.id("input")).sendKeys(inputCommand);
		drv.findElement(By.id("btn-process")).click();
		WebElement text = drv.findElement(By.id("textarea"));
		Thread.sleep(5000);
		String result = text.getText();
		System.out.print( result );
		
		drv.quit();
		
		return result;
	}

}


