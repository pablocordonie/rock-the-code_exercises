// Iteración #1: Buscar el máximo

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return `El número ${numberOne} es el número más alto`;
    } else {
        return `El número ${numberTwo} es el número más alto`;
    }
}

sum(3, 6);

// Iteración #2: Buscar la palabra más larga

/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(arr) {

    let longestWord = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

findLongestWord(avengers);

// Iteración #3: Calcular la suma

/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        let number = arr[i];
        sum = sum + number;
    }
    return sum;
}

sumNumbers(numbers);

// Iteración #4: Calcular el promedio

/* Calcular un promedio es una tarea extremadamente común. */

const moreNumbers = [12, 21, 38, 5, 45, 37, 6];

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        let number = arr[i];
        sum = sum + number;
    }
    return sum / arr.length;
}

average(moreNumbers);

// Iteración #5: Calcular promedio de strings

/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'Rock', 8, 'Code'];

function averageWord(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            sum = sum + arr[i];
        } else {
            sum = sum + arr[i].length
        }
    }
    return sum / arr.length;
}

averageWord(mixedElements);

// Iteración #6: Valores únicos

/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. */

const foods = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(arr) {
    let uniqueFoods = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!uniqueFoods.includes(arr[i])) {
            uniqueFoods.push(arr[i]);
        }
    }
    return uniqueFoods;
}

removeDuplicates(foods);

// Iteración #7: Buscador de nombres

/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. */

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(arr, value) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === value) {
            return `${true}, ${arr[i]} está en la ${i + 1}th position del array`;
        }
    }
    return `${false}, no existe ningún nombre con el valor proporcionado`
}

finderName(names, 'Logan');

// Iteration #8: Contador de repeticiones

/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'rock',
    'code'
];

function repeatCounter(arr) {
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in counter) {
            counter[arr[i]]++;
        } else {
            counter[arr[i]] = 1;
        }
    }
    return counter;
}

repeatCounter(counterWords);