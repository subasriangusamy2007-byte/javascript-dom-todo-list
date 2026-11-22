import java.io.*;
class areaofshape
{
	int area(int a)
	{
		return(a*a);
	}
	float area(float l,float b)
	{
		return(l*b);
	}
	int area(int ba,int he)
	{
		return((ba*he)/2);
	}
}
public class Overload {
	public static void main(String[] args) throws IOException {
		int a,ba,he;
		float l,b;
		DataInputStream t=new DataInputStream(System.in);
		System.out.println("METHOD OVERLOADING");
		System.out.println("_______________");
		System.out.println("Enter the value for square");
		System.out.println("Area:");
		a=Integer.parseInt(t.readLine());
		System.out.println("Enter the value for rectangle");
		System.out.println("Length:");
		l=Float.parseFloat(t.readLine());
		System.out.println("Breadth:");
		b=Float.parseFloat(t.readLine());
		System.out.println("Enter the value.for triangle:");
		System.out.println("Height:");
		he=Integer.parseInt(t.readLine());
		System.out.println("Base:");
		ba=Integer.parseInt(t.readLine());
		areaofshape A=new areaofshape();
		int SA=A.area(a);
		float RA=A.area(l,b);
		int TA=A.area(ba,he);
		System.out.println("square vaue is="+SA);
		System.out.println("rectangle value is="+RA);
		System.out.println("triangle value is="+TA);	
	}
}