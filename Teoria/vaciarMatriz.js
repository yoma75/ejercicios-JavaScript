// Puede asignar su variable a una matriz vacía ( []) para borrarla. Si bien esta opción es bastante rápida, debe tener en cuenta las referencias a la matriz original, ya que permanecerán sin cambios. Además, no funciona para matrices declaradas como const.

let a = [1, 2, 3, 4];
a = [];
console.log(a);


// Establecer su longitud en 0
// Una mejor opción es establecer el length de la matriz en 0. Esta opción también es bastante rápida y tiene el beneficio adicional de trabajar con variables const .

let a = [1, 2, 3, 4];
a.length = 0;
console.log(a);


// pop()es una opción muy anticuada
let a = [1, 2, 3, 4];
while (a.length) a.pop();
console.log(a);


