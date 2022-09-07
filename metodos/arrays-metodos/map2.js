const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Jhon",
    lastname: "Suarez",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];


const nombreCompleto = students.map(estudiante => {
  return `${estudiante.name} ${estudiante.lastname}`
})

console.log(nombreCompleto);
// ['Jill Doe', 'John Doe', 'Jack Doe', 'Jhon Suarez', 'Jane Doe']

// ---------------------------------------------------------------------------------------------------

const nombres = students.map(estudiante => {
  return {
    fullname: `${estudiante.name} ${estudiante.lastname}`,
    age: `${estudiante.age}`,
    curso: `${estudiante.course}`
  }
});

console.log(nombres); 
// {fullname: 'Jill Doe', age: '24', curso: 'Marketing'} 
// {fullname: 'John Doe', age: '22', curso: 'Web Development'} 
// {fullname: 'Jack Doe', age: '20', curso: 'Accounting'} 
// {fullname: 'Jhon Suarez', age: '23', curso: 'Web Development'}
// {fullname: 'Jane Doe', age: '20', curso: 'Financial Management'}

// ---------------------------------------------------------------------------------------------------

const names = students.map(estudiante => {
  return {
    ...estudiante,
    title: `${estudiante.name} - ${estudiante.course}`
  }
});

console.log(names);
// {name: 'Jill', lastname: 'Doe', age: 24, course: 'Marketing', title: 'Jill - Marketing'} 
// {name: 'John', lastname: 'Doe', age: 22, course: 'Web Development', title: 'John - Web Development'}
// {name: 'Jack', lastname: 'Doe', age: 20, course: 'Accounting', title: 'Jack - Accounting'}
// {name: 'Jhon', lastname: 'Suarez', age: 23, course: 'Web Development', title: 'Jhon - Web Development'} 
// {name: 'Jane', lastname: 'Doe', age: 20, course: 'Financial Management', title: 'Jane - Financial Management'}

// ---------------------------------------------------------------------------------------------------

const modificarCurso = students.map(estudiante => {
  return {
    ...estudiante,
   course: 'Programacion'
  }
});

console.log(modificarCurso);
// {name: 'Jill', lastname: 'Doe', age: 24, course: 'Programacion'}
// {name: 'John', lastname: 'Doe', age: 22, course: 'Programacion'}
// {name: 'Jack', lastname: 'Doe', age: 20, course: 'Programacion'}
// {name: 'Jhon', lastname: 'Suarez', age: 23, course: 'Programacion'} 
// {name: 'Jane', lastname: 'Doe', age: 20, course: 'Programacion'}

// ---------------------------------------------------------------------------------------------------

// un map dentro de otro map
const doblarEdad = students.map(estudiante => {
  return {
    ...estudiante,
   course: 'Programacion'
  }
})
  .map(estudiante => ({...estudiante, age:estudiante.age * 2}))  // en vez de return, colocar ({codigo})

console.log(doblarEdad);
// {name: 'Jill', lastname: 'Doe', age: 48, course: 'Programacion'}
// {name: 'John', lastname: 'Doe', age: 44, course: 'Programacion'}
// {name: 'Jack', lastname: 'Doe', age: 40, course: 'Programacion'}
// {name: 'Jhon', lastname: 'Suarez', age: 46, course: 'Programacion'} 
// {name: 'Jane', lastname: 'Doe', age: 40, course: 'Programacion'}
