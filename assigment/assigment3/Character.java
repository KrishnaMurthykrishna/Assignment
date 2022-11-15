import java.io.*;
import java.util.*;
class Character {
	public static void result(int index_value, String character) {
		for(int i=index_value;i<character.length();i++) {
			System.out.print(character.charAt(i));
		}
		    
		  }
    public static void main( String []args ) {
        System.out.println( "Welcome to Check the character found" );
        Scanner sc= new Scanner(System.in);    //System.in is a standard input stream  
        System.out.print("Enter Word");  
        String character= sc.next();  
        System.out.print("Enter alphabet ");  
        String pattern= sc.next(); 
        int index_value = character.indexOf(pattern);
        result(index_value, character);	
        if (index_value >=0) {
        	System.out.println("Found");
        }
        else {
        	System.out.println("Character Not Found");
        }
    }
}