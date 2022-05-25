// EJERCICIO "TIPOS DE NUMERO CON ARREGLO"

/*
• Almacene en un arreglo de dimensión N, números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/

let i: number = 0;
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

let dimensionArreglo: number = Number(
  prompt("Por favor, ingrese el tamaño de su arreglo:")
);
let arreglo: number[] = new Array(dimensionArreglo);

for (i; i < dimensionArreglo; i++) {
  arreglo[i] = Number(
    prompt(`"Por favor, ingrese el número en la posición ${i}:`)
  );
  if (arreglo[i] > 0) {
    positivos = positivos + 1;
  } else if (arreglo[i] < 0) {
    negativos = negativos + 1;
  } else {
    ceros = ceros + 1;
  }
}

console.log("El arreglo ingresado es el siguiente:", arreglo);
console.log(
  "La cantidad de números positivos ingresados es:",
  positivos,
  "negativos:",
  negativos,
  "y ceros:",
  ceros
);
