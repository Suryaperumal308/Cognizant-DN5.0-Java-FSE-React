class Student{
   int sid;
   String sname;
   String dept;
   void display(){
       System.out.println("Student id :"+ sid);
       System.out.println("Student Name :"+ sname);
       System.out.println("Student Department :"+ dept);
   }
}
public class ClassAndObject{
    public static void main(String args[]) {
        Student s=new Student();
        s.sid=101;
        s.sname="Surya";
        s.dept="CSE";
        s.display();
    }
}