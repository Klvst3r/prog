#include <stdio.h>

int main(){
    int edad;
    //Pedir la edad al usuario
    printf("Ingrese su edad: ");
    scanf("%d", &edad);

    //Verifica si es mayor o menor de edad
    if(edad >= 18){
        printf("Eres mayor de edad. \n");
    } else {
        printf("Eres menor de edad. \n");
    }

    return 0;
}