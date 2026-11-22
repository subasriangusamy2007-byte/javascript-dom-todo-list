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
 	int area(int he,int ba)
 	{
 		return((ba*he)/2);
 	}
 }
 public class Overload {
	public static void main(String[] args) throws IOException {
		int a,he,ba;
		float l,b;
		DataInputStream t=new DataInputStream(System.in);
		System.out.println("METHOD OVERLOADING");
		System.out.println("________________");
		System.out.println("enter the value for square");
		System.out.println("Area:");
		a=Integer.parseInt(t.readLine());
		System.out.println("enter the value for rectangle");
		System.out.println("length");
		l=Float.parseFloat(t.readLine());
		System.out.println("breadth");
		b=Float.parseFloat(t.readLine());
		System.out.println("enter the value for triangle");
		System.out.println("height");
		he=Integer.parseInt(t.readLine());
		System.out.println("base");
		ba=Integer.parseInt(t.readLine());
		areaofshape A=new areaofshape();
		int SA=A.area(a);
		float RA=A.area(l,b);
		int TA=A.area(ba,he);
		System.out.println("area of square="+SA);
		System.out.println("area of rectangle="+RA);
		System.out.println("area of triangle="+TA);	
	}
}