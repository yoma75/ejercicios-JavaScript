// CARPETA NUMEROS

let notas = [];
let suma = 0;

let codigo = parseInt(prompt('Código estudiante:'));
let nombre = prompt('Nombre estudiante:');
let materia = prompt('Nombre materia:')


while (notas.length < 3) { 
   let noticas = parseFloat(prompt('Digite notas:'));
   notas.push(noticas)
} 

console.log(notas);

for (const x of notas) {
   suma += x / notas.length;
}

// operador ternario:
let mensaje = (suma >= 4.0) ? `\nEl estudiante ${nombre} identificado con el código ${codigo} obtuvo un promedio de: ${suma}, en la asignatura de: ${materia} por tal motivo SI APROBO` : `\nEl estudiante ${nombre} identificado con el código ${codigo} obtuvo un promedio de: ${suma}, en la asignatura de: ${materia} por tal motivo NO APROBO`;

console.log(mensaje);