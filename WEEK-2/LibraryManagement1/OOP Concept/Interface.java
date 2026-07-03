interface Vehi{
     void start();
}
class Bikes implements Vehi{
    public void start(){
        System.out.println("The bike is starting");
    }
}
class Cars implements Vehi{
    public void start(){
        System.out.println("the car is starting");
    }
}
public class Interface{
    public static void main(String args[]){
        Vehi v=new Bikes();
        Vehi v1=new Cars();

        v.start();

        v1.start();


    }
}

