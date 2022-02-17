// CARPETA ARRAYS

// Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

// Ingresa un número> 5
// 1
// 3
// 4
// 5

let numeros = [];
let n = 0;

let num = parseInt(prompt("ingrese un numero"));

while (n < num){
  numeros.push(n + 1);
n++;
}

console.log(numeros);
numeros.splice(1,1);  // A partir del index [1] elimine una posición
console.log(numeros);