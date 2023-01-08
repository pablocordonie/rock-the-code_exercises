/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const createLiElementsInsideANewUl = (arr) => {
    const ulElement = document.createElement('ul');
    for (country of arr) {
        const liElement = document.createElement('li');
        liElement.innerText = country;
        ulElement.appendChild(liElement);
    }
    return ulElement;
}

document.body.appendChild(createLiElementsInsideANewUl(countries));

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const pToRemove = document.querySelector('.fn-remove-me');

pToRemove.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const createLiElementsInsideAnExistingDiv = (arr) => {
    const ulElement = document.createElement('ul');
    for (car of arr) {
        const liElement = document.createElement('li');
        liElement.innerText = car;
        ulElement.appendChild(liElement);
    }
    return ulElement;
}

const dataFunctionDiv = document.querySelector('[data-function="printHere"]');
dataFunctionDiv.appendChild(createLiElementsInsideAnExistingDiv(cars));