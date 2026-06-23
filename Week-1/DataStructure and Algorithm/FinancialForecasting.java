public class FinancialForecasting {
    public static double futureValue(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return futureValue(amount,rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.10;
        int years = 5;
        double result = futureValue(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years = %.2f" ,years, result);
    }
}
