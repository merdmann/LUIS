package michaelslab.net.System47;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Intent intent = new Intent();
        
        try {
            System.out.println("Fire");
        	intent.command("Fire tropedo");
        }
        catch( Exception  ex) {
        	
        }
        
    }
}
