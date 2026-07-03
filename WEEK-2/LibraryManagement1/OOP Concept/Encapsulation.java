class Stud {
    int id;
    String name;
    String dept;
    public void setName(){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    public void getName(){
        System.out.println("Student id: "+id);
        System.out.println("Student name: "+name);
        System.out.println("Student id: "+dept);
    }
}
public class Encapsulation{
    public static void main(String args[]){
       Stud s=new Stud();
       s.id=111;
       s.name="Madhan";
       s.dept="ECE";
       s.getName();
    }
}
