const students = [
  {
    name: "Andres",
    lastname: "Perez",
    age: 24,
    course: "Marketing",
  },
  {
    name: "Oscar",
    lastname: "Nieto",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Karmen",
    lastname: "Cortes",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Roberto",
    lastname: "Katz",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Pedro",
    lastname: "Mejia",
    age: 20,
    course: "Financial Management",
  },
];


const resultado = students.filter(estudiante => estudiante.course === 'Web Development')
console.log(resultado);
// {name: 'Oscar', lastname: 'Nieto', age: 22, course: 'Web Development'}
// {name: 'Roberto', lastname: 'Katz', age: 23, course: 'Web Development'}

// --------------------------------------------------------------------------------------------

console.log(students.filter(estudiante => estudiante.age > 21))
// {name: 'Andres', lastname: 'Perez', age: 24, course: 'Marketing'} 
// {name: 'Oscar', lastname: 'Nieto', age: 22, course: 'Web Development'}
// {name: 'Roberto', lastname: 'Katz', age: 23, course: 'Web Development'}
