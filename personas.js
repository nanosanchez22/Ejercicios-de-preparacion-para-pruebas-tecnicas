// Función constructora "Persona"
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.esMayorEdad = function () {
    return this.edad >= 18;
  };
}

// Crear un array de objetos persona
const personas = [
  new Persona("Juan", 25),
  new Persona("María", 17),
  new Persona("Carlos", 30),
];

// Función para calcular la edad promedio del grupo de personas
function calcularEdadPromedio(personas) {
  let sumaEdades = 0;
  for (let i = 0; i < personas.length; i++) {
    sumaEdades += personas[i].edad;
  }
  const edadPromedio = sumaEdades / personas.length;
  return edadPromedio;
}

// Ejemplo de uso:
console.log(persona.esMayorEdad()); // false

const persona1 = new Persona("Ana", 20);
console.log(persona1.esMayorEdad()); // true

console.log(personas); // Array de objetos persona
const edadPromedio = calcularEdadPromedio(personas);
console.log(edadPromedio); // Edad promedio del grupo de personas
