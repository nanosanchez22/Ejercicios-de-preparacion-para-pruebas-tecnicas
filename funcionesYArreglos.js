function copiarArreglo(arr) {
  return [...arr];
}
//console.log(copiarArreglo([1, 2, 3]));
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function promedio(arr) {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  let promedio = suma / arr.length;
  return promedio;
}
console.log(promedio(arr));
