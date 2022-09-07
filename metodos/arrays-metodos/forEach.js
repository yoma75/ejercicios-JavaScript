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
    name: "Ryan Jhon",
    lastname: "Ray",
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


students.forEach((estudiante, index ) => {
  console.log(estudiante,index);
});
// {name: 'Jill', lastname: 'Doe', age: 24, course: 'Marketing'} 0
// {name: 'John', lastname: 'Doe', age: 22, course: 'Web Development'} 1
// {name: 'Jack', lastname: 'Doe', age: 20, course: 'Accounting'} 2
// {name: 'Ryan Jhon', lastname: 'Ray', age: 23, course: 'Web Development'} 3
// {name: 'Jane', lastname: 'Doe', age: 20, course: 'Financial Management'} 4


students.forEach((estudiante) => {
  console.log(estudiante.course);
})
// Marketing
// Web Development
// Accounting
// Web Development
// Financial Management


const nombreCompleto = [];

students.forEach((estudiante) => {
  nombreCompleto.push(`${estudiante.name} ${estudiante.lastname}`);
})

console.log(nombreCompleto);
// ['Jill Doe', 'John Doe', 'Jack Doe', 'Ryan Jhon Ray', 'Jane Doe']
