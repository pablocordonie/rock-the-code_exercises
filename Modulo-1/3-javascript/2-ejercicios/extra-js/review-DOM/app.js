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

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries_2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const createTitleAndImageInsideNewDivs = (arr) => {

    for (const country of arr) {

        const divElement = document.createElement('div');

        divElement.innerHTML = `
        <h4>${country.title}</h4>
        <img src="${country.imgUrl}" />
        `;

        document.body.appendChild(divElement);
    }
}

createTitleAndImageInsideNewDivs(countries_2);