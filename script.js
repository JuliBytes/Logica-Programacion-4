// Solicitar al usuario un número
const userInput = prompt('Ingresa un número para la serie de Fibonacci:');

// Convertir el valor ingresado a un número
const number = parseFloat(userInput);

// Verificar si el valor es válido
if (isNaN(number)) {
  console.error('Error: Ingresa un número válido.');
} else {
  let n1 = 0;
  let n2 = 1;

  // Imprimir el resultado
  console.log('Serie de Fibonacci:');
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    const nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
