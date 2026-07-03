class Students{
    int id;
    String name;
    String dept;
    Students(int id,String name,String dept){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
}
public class Constructor {
    public static void main(String args[]) {
        Students s = new Students(101,"Surya","CSE");
        System.out.println("ID :"+s.id);
        System.out.println("Name: "+s.name);
        System.out.println("Department: "+s.dept);
    }
}
