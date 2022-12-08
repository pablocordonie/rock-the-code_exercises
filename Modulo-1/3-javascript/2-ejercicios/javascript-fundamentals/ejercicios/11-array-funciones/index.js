// 1. Crea la función "getNewArray" que reciba un  array de frutas, y
// un string con otra fruta nueva, y luego retorne otro array igual (pero con
// otra referencia) pero habiéndole añadido en la primera posición la fruta nueva.
let fruits = ['banana', 'naranja', 'manzana'];
const newFruit = 'mango';

const getNewArray = (arr, fruit) => {
  const copyFruitsArray = arr.slice();
  copyFruitsArray.unshift(fruit);
  return copyFruitsArray;
};

getNewArray(fruits, newFruit);

// 2. Crea la función "modifyOriginalArray" que reciba un array de números o strings,
// le elimine la primera y la última posición y lo retorne (misma referencia)
const modifyOriginalArray = (arr) => {
  arr.shift();
  arr.pop();
  return arr;
};

modifyOriginalArray(fruits);

// --EXTRA-- Dado el array "colors", crea la función "getColors" que reciba un número
// como parámetro, cree una copia, y añada el color "black" en la última posición de
// dicha copia si el número es par, o añada el color "white" en la primera posición
// si es impar, y luego retorne dicho array
const colors = ['blue', 'red', 'gray'];

const getColors = (number) => {
  const copyColors = colors.slice();
  if (number % 2 === 0) {
    copyColors.push('black');
  } else {
    copyColors.unshift('white');
  }
  return copyColors;
};

getColors(3);

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { getNewArray, modifyOriginalArray, colors, getColors };
// ///////////////////////////////////////////////////////////////
