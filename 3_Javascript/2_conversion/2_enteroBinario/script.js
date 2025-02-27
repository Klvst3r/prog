const enteroPositivoABinario = (entrada) => {
    if (entrada === 0) return '0';
  
    const bits = [];
    
    let numero = entrada;
    while (numero >= 1) {
      const resultadoDiv = numero / 2;
      const resultadoRed = Math.floor(resultadoDiv);
      
      bits.push(resultadoDiv > resultadoRed ? 1 : 0);
      
      numero = resultadoRed;
    }
  
    return bits.reverse().join('');
  }
  
  // preguntar al usuario por un número
  let entradaUsuario = prompt("Ingrese un entero positivo");
  
  // convertir la entrada a un número
  let numeroEntrada = Number(entradaUsuario);
  
  // verificar si la entrada es válida
  if (Number.isInteger(numeroEntrada) && numeroEntrada >= 0) {
    // llamar a la función y mostrar el resultado
    let salidaBinaria = enteroPositivoABinario(numeroEntrada);
    alert("La representación binaria de " + numeroEntrada + " es " + salidaBinaria);
  } else {
    // mostrar un mensaje de error
    alert("Entrada inválida. Por favor ingrese un entero positivo.");
  }