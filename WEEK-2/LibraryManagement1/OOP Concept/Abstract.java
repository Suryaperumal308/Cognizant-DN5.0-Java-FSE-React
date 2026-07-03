abstract class Vehicle{
    abstract void start();
    void category (){
        System.out.print("The vehicle categories.");
    }
}
class Bike extends Vehicle{
    void start(){
        System.out.println("The bike is starting");
    }
}
class Car extends Vehicle{
    void start(){
        System.out.println("the car is starting");
    }
}
public class Abstract{
    public static void main(String args[]){
        Vehicle v=new Bike();
        Vehicle v1=new Car();
        v.category();
        v.start();
        v1.category();
        v1.start();


    }
}
