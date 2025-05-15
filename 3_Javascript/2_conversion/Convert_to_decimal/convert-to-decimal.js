// Selecciona correctamente los elementos
let button = document.getElementById('convert');
let display = document.getElementById('decimal');

function convertBinary() {
    let binary = document.getElementById('number').value.trim(); // Obtiene el valor y elimina espacios

    // Validar si el input contiene solo 0s y 1s
    if (!/^[01]+$/.test(binary)) {
        display.textContent = "Ingrese un número binario válido";
        return;
    }

    let decimal = 0;

    // Recorre cada dígito de derecha a izquierda
    for (let i = 0; i < binary.length; i++) {
        let bit = parseInt(binary[binary.length - 1 - i]); // Convierte el caracter a número
        decimal += bit * Math.pow(2, i); // Suma la potencia correspondiente
    }

    display.textContent = decimal; // Muestra el resultado
}

// Agrega el evento al botón
button.addEventListener('click', convertBinary);