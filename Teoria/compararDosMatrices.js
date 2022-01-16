// Comparación de igualdad
// La comparación de dos matrices en JavaScript utilizando los operadores de igualdad estrictos o sueltos ( ==o ===) dará como resultado con mayor frecuencia false, incluso si las dos matrices contienen los mismos elementos en el mismo orden. Esto se debe al hecho de que las matrices y los objetos se comparan por referencia y no por valor en JavaScript, lo que significa que esta solución no produce el resultado deseado:

const a = [1, 2, 3];
const b = [1, 2, 3];

a === b; // false


// JSON.stringify(), lo que nos permite serializar cada matriz y luego comparar las dos cadenas serializadas. 

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

let x = equals(a, b); // true
console.log(x);















