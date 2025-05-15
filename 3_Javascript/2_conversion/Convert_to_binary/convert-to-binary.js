// Selecciona correctamente los elementos
let button = document.getElementById('convert');
let display = document.getElementById('binario');

function convertDecimal() {
    let decimal = parseInt(document.getElementById('number').value); // Convierte a número

    if (isNaN(decimal) || decimal < 0) { 
        display.textContent = "Ingrese un número válido";
        return;
    }

    let binario = [];
    let numero = decimal;

    // Algoritmo para convertir a binario
    while (numero > 0) {
        binario.unshift(numero % 2); // Obtiene el residuo (0 o 1)
        numero = Math.floor(numero / 2); // Divide y trunca
    }

    // Si es 0, el binario es "0"
    display.textContent = binario.length ? binario.join('') : "0";
}

// Agrega el evento al botón
button.addEventListener('click', convertDecimal);