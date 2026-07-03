class Logger {
    private static Logger instance = new Logger();
    private Logger() {
    }

    public static Logger getInstance() {
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class SingletonPatternExample {
    public static void main(String[] args) {

        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        l1.log("First message");
        l2.log("Second message");

        if (l1 == l2) {
            System.out.println("Both objects are same.");
        } else {
            System.out.println("Objects ars different.");
        }
    }
}
