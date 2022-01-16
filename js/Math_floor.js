// CARPETA METODOS

// Math.floor: retorna un numero entero
// (Math.random() * 10): escoge al azar un numero entre 0 a 10

const numero = Math.floor(Math.random() * 10)
console.log(numero);

// operador ternario
let mensaje = ((numero % 2) == 0) ? `El numero ${numero} es par`: `El numero ${numero} es impar`
console.log(mensaje);

