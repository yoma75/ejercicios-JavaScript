// CARPETA FOR

// Pedir un numero y sumarlo desde 1 hasta el numero pedido, ejemplo: 5, 1+2+3+4+5

const pedirNum = parseInt(prompt('Digite un numero: '))

let acumulador = 0

for (let x = 1; x <= pedirNum; x++) {
  acumulador += x;  
}

console.log(acumulador);