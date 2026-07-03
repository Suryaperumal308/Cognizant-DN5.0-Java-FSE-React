class Animals{
     void eat(){
         System.out.println("Animal is eating");
     }
}
class Dogs extends Animals{
     void bark(){
         System.out.println("The dog is barking");
     }
}
class Cats extends Animals{
    void sound(){
        System.out.println("Cat meows.");
    }
}
public class Inheritance{
    public static void main(String args[]){
        Cats c=new Cats();
        Dogs d=new Dogs();

        c.eat();
        c.sound();

        d.eat();
        d.bark();




    }
}
