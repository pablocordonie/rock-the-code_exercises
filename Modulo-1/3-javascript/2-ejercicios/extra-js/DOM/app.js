// 1. Dado el documento index.html:

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**

const button = document.querySelector('.showme');

console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const mainTitle = document.getElementById('pillado');

console.log(mainTitle);

// 1.3 Usa querySelector para mostrar por consola todos los p

const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon = document.querySelectorAll('.pokemon');

console.log(allPokemon);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

const allCharacters = document.querySelectorAll('[data-function="testMe"]');

console.log(allCharacters);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

const thirdCharacter = document.querySelector('span:nth-of-type(3)');

console.log(thirdCharacter);

// 2. Dado el documento index_2.html:

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement('div');

document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const firstDiv = document.createElement('div');

const paragraph = document.createElement('p');

firstDiv.appendChild(paragraph);

document.body.appendChild(firstDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const secondDiv = document.createElement('div');

document.body.appendChild(secondDiv);

for (let i = 0; i < 6; i++) {
    const newP = document.createElement('p');
    secondDiv.appendChild(newP);
}