class Product {
    int productId;
    String productName;
    String category;

    Product(int productId,String productName,String category){
        this.productId=productId;
        this.productName=productName;
        this.category=category;
    }
}
public class ECommerceSearch {
    public static Product linearSearch(Product products[],int id){

        for(Product p:products){
            if(p.productId==id){
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product products[],int id){
        int low=0;
        int high=products.length-1;
        while(low<=high){
            int mid=(low+high)/2;
            if(products[mid].productId==id){
                return products[mid];
            }

            else if(products[mid].productId<id){
                low=mid+1;
            }

            else{
                high=mid-1;
            }
        }
        return null;
    }

    public static void main(String[] args){
        Product products[]={
                new Product(101,"Laptop","Electronics"),
                new Product(102,"Phone","Electronics"),
                new Product(103,"Shoes","Fashion"),
                new Product(104,"Watch","Accessories"),
                new Product(105,"Bag","Fashion")
        };

        Product p1=linearSearch(products,101);
        if(p1!=null){
            System.out.println("Linear Search Found : " +p1.productName);
        }

        Product p2=binarySearch(products,104);
        if(p2!=null){
            System.out.println("Binary Search Found : " +p2.productName);
        }
    }
}