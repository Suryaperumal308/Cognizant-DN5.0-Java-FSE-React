class Main{
    void mul(int a,int b){
        System.out.print("Multiplication: "+(a*b));
    }
    void mul(int a,int b ,int c){
        System.out.println("Multiplication: "+(a*b*c));
    }
}
public class Polymorphism{
    public static void main(String args[]){
        Main m=new Main();
        System.out.println("Two parameter :");
        m.mul(10,20);
        System.out.println();
        System.out.println("Three parameter: ");
        m.mul(10,20,30);
    }
}