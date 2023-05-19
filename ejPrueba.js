console.log("Hello");
/* const arr = [5, 4, 9, 1, 3, 2, 9, 77, 0, 5];

function ordenarMenorAMayor(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let menor = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < menor) {
        menor = arr[j];
      }
    }
    newArr.push(menor);
  }
  return newArr;
}
ordenarMenorAMayor(arr);
 console.log(ordenarMenorAMayor(arr)); */

function ordenarMenorAMayor(arr) {
  const newArr = [...arr]; // Create a copy of the original array
  for (let i = 0; i < newArr.length - 1; i++) {
    let menor = i;
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[menor]) {
        menor = j;
      }
    }
    // Swap elements
    const a = newArr[i];
    newArr[i] = newArr[menor];
    newArr[menor] = a;
  }
  return newArr;
}

// Example usage:
const arr = [5, 4, 9, 1, 3, 2, 9, 77, 0, 5];
const sortedArray = ordenarMenorAMayor(arr);
console.log(sortedArray);
