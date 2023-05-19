function Telefono(numero) {
  this.numero = numero;
  this.numLlamadas = 0;
  this.llamar = function () {
    return this.numLlamadas++;
  };
}

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

function Recta(a, b) {
  this.a = a;
  this.b = b;
}

const puntoA = new Punto(2, 3);
const puntoB = new Punto(5, 7);

const rectaAB = new Recta(puntoA, puntoB);

console.log(puntoA); // { x: 2, y: 3 }
console.log(puntoB); // { x: 5, y: 7 }

console.log(rectaAB); // { punto1: { x: 2, y: 3 }, punto2: { x: 5, y: 7 } }
