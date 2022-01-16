// CARPETA ARRAYS O MATRICES

// Multiplicar cada uno de los elementos de un array

let numeros = [1, 2, 3, 4, 5];
let multiplicar = 1;

for (let x = 0; x < numeros.length; x++) {
  multiplicar *= numeros[x];  
}

console.log(`Elementos del array: ${numeros}`);
console.log(multiplicar);  // 1*2*3*4*5 = 120