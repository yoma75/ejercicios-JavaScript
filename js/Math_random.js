// CARPETA MÉTODOS

// Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"


// número de forma aleatoria del 1 al 10
let escogerNumero = Math.floor((Math.random() * 10) + 1);
console.log(escogerNumero);

let numUser;
do 
  numUser = parseFloat(prompt("Ingrese un número entre 1 y 10: "));
while ((isNaN(numUser)) || ((numUser < 1) || (numUser > 10)));


if (numUser == escogerNumero)
  console.log("Felicitaciones, ese era!");
else
  console.log("Lo siento, intenta nuevamente!");

