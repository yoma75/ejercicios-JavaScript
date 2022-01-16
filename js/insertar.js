// CARPETA ARRAY

// Crea un programa a partir de las siguientes instrucciones:

// * Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: 
// "Pedro", "Pablo", "María", "Juan", "Diana".
// * Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// * Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// * Recorre el arreglo e imprímelo.

// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:
// Ingresa un nombre> Camilo
// Ingresa otro nombre> Ariel
// Pedro
// Pablo
// Ariel
// Juan
// Diana
// Camilo

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]

nombres.push(prompt("ingresa un nombre: "));
nombres[2] = prompt("ingresa otro nombre: ");

for (let nombre of nombres)
  console.log(nombre);


// let finalArreglo = prompt("ingresa un nombre: ");
// nombres.push(finalArreglo)

// let terceraPosicion = prompt("ingresa otro nombre: ")
// nombres[2] = terceraPosicion

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);  
// }
