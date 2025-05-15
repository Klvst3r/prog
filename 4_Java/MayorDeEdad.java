import java.util.Scanner;

public class MayorDeEdad {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir la edad al usuario
        System.out.print("Ingrese su edad: ");
        int edad = scanner.nextInt();

        // Verificar si es mayor o menor de edad
        if (edad >= 18) {
            System.out.println("Eres mayor de edad.");
        } else {
            System.out.println("Eres menor de edad.");
        }

        scanner.close();
    }
}