package casting;

public class Casting01 {
    public static void main(String[] args) {
        Object circle1 = new Circle();  // implicit casting
        Circle circle = (Circle) circle1; // explicit casting

        int a = 3;
        long b = a; // implicit casting
        long c = (long) a;
        
    }
}
