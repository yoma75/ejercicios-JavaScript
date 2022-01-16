// spread operator
let x = [1, 4, 5, 76, 12, 89];
let y = [...x];
console.log(y);


// Array.from()
let x = ['vaca', 'perro', 'elefante', 'mariposa'];
let y = Array.from(x);
console.log(y);


// slice(): se puede usar para crear una copia superficial de una matriz.
let autos = ['audi', 'renault', 'mazda', 'BMW'];
let copiaAutos = autos.slice();
console.log(copiaAutos);


// map()se puede usar para mapear cada elemento de una matriz a sí mismo para crear una nueva matriz.
let x = [1, 2, 3, 4];
let y = x.map(i => i);
console.log(y);


// filter()se puede usar para devolver true todos y cada uno de los elementos, lo que da como resultado una nueva matriz con todos los elementos de la matriz original.
let x = [1, 2, 3, 4, 556];
let y = x.filter(() => true);
console.log(y);


// Object.assign()se puede usar exactamente de la misma manera que se usa para crear un clon de un objeto, pero para una matriz en su lugar.
let x = [1, 2, 3, 4, 34];
let y = Object.assign([], x);
console.log(y);







