// Iteración #1: Variables

// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

const myFavoriteHero = 'Hulk';

// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50;

// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.

let h = 5;
let y = 10;

// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let z = h + y;

console.log(z);

// Iteración #2: Variables avanzadas

// 2.1 Dado el siguiente javascript, cambia el valor de la propiedad const  a 25.

const character = { name: 'Jack Sparrow', age: 10 };

character.age = 25;

console.log(character);

/* 2.2 Declara 3 variables con los nombres y valores siguientes:
		  firstName = 'Jon'; 
		  lastName = 'Snow'; 
		  personAge = 24;
		  Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/

const firstName = 'Jon';
const lastName = 'Snow';
const personAge = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${personAge} años y me gustan los lobos`);

/* 2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

console.log(`La suma del precio de ${toy1.name} y ${toy2.name} es ${toy1.price + toy2.price}`);

/* 2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.basePrice;
console.log(car1);

car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car2);

// Iteración #3: Operadores

// 3.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

window.alert(10 * 5);

// 3.2 Divide 10 por 2 y muestra el resultado en un alert.

window.alert(10 / 2);

// 3.3 Muestra mediante un alert el resto de dividir 15 por 9.

window.alert(15 % 9);

/* 3.4 Usa el correcto operador de asignación que resultará en x = 15, teniendo dos variables y = 10 y z = 5. */

y = 10;
z = 5;

x = y + z;

console.log(x);

/* 3.5 Usa el correcto operador de asignación que resultará en x = 50,
teniendo dos variables y = 10 y z = 5. */

y = 10;
z = 5;

x === y * z;

console.log(x);

// Iteración #4: Arrays

// 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 4.2 Cambia el primer elemento de avengers a "IRONMAN".

avengers[0] = 'IRONMAN';

// 4.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

avengers[2] = 'BLACK PANTHER';

alert(avengers.length);

/* 4.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array. */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push('Morty', 'Summer');

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters_2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters_2.pop();

console.log(rickAndMortyCharacters_2[0], rickAndMortyCharacters_2[rickAndMortyCharacters_2.length - 1]);

// 4.6 Elimina el segundo elemento del array y muestra el array por consola.

const rickAndMortyCharacters_3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters_3.splice(1, 1);

console.log(rickAndMortyCharacters_3);

// Iteración #5: Condicionales

// 5.1 En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
	console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
	console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
	console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
	console.log("number3 es distinto a number1");
}

if (number3 * 5 == number1) {
	console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
	console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
	console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// Iteración #6: Bucles

// 6.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i += 1) {
	console.log(i);
}

/* 6.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

for (let i = 0; i < 10; i += 1) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

/* 6.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

for (let i = 0; i <= 10; i++) {
	if (i === 10) {
		console.log('Dormido');
	} else {
		console.log('Intentando dormir');
	}
}