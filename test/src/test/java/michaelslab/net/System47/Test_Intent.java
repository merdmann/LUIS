package michaelslab.net.System47;


import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class Test_Intent {
	Intent intent = null; 
	
	@BeforeTest
	public void setup() {
		 System.out.println("++++++ Test_Intend");
	     intent = new Intent();
	}
	
	
	@Test
	public void test() {
		try {
			String response = intent.command("Fire torpedos");
			//JSONObject o = new jsonObject(response);

		} catch(Exception ex ) {
			System.out.println( "Excpetion " + ex);
		}
	}

}
