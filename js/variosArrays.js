// CARPETA ARRAYS
// agrupar los arrays en grupos

const nombres = [
  ['Pablo', 'Maria', 'Pedro'],
  ['Diana', 'Juan', 'Federico'],
  ['Roberto', 'Daniel', 'Sandra']
]

// recorre todo el array nombres
for (let index = 0; index < nombres.length; index++) {
  const nombresitos = nombres[index];  // guarda cada uno de los arrays
  console.log('GRUPO', index + 1);  // Grupo 1, Grupo 2, Grupo 3


  // recorre los elementos de cada uno de los arrays
  for (let index2 = 0; index2 < nombresitos.length; index2++) {
    const name = nombresitos[index2];
    console.log('  ', name);    
  }    
  
  }
  
  // GRUPO 1
  //    Pablo
  //    Maria
  //    Pedro

  // GRUPO 2
  //    Diana
  //    Juan
  //    Federico

  // GRUPO 3
  //    Roberto
  //    Daniel
  //    Sandra