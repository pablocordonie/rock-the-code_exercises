// 1. Crea la función printCar de forma que acepte un objeto "car"
// como argumento e invoque un console.log con su propiedad "model"

const car = {};
const printCar = (car) => console.log(car.model);
printCar(car);

// 2. Crea la función printCountry de forma que acepte dos argumentos, primero
// un objeto llamado "country" y después un string "key", e invoque un console.log
// con la propiedad "key" del objeto "country"

const country = {};
const printCountry = (countryObject, key) => console.log(countryObject[key]);
printCountry(country, 'city');

// 3. Crea la función "deleteProperties" de forma que acepte dos argumentos, primero
// un objeto llamado "person" y después un string "property". Dentro de la función,
// elimina dicha propiedad del objeto "person" e invoca un console.log del objeto

const person = {};
const deleteProperties = (object, prop) => {
  delete object[prop];
  return console.log(object);
}
deleteProperties(person, 'property');

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printCar,
  printCountry,
  deleteProperties,
};
// ///////////////////////////////////////////////////////////////
