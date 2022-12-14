// 1. Dada la función "printPersons" que recibe un array de objetos llamado "persons",
// y un string "property", completa la función para que recorra dicho array con un
// bucle e invoque un console.log con la propiedad "property" de cada objeto

const persons = [
  { name: 'Jon', surname: 'Snow' },
  { name: 'Daenerys', surname: 'Targaryen' }
];

const printPersons = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    const person = persons[i];
    if (person[key] === 'Jon' || 'Snow' || 'Daenerys' || 'Targaryen') {
      console.log(person[key]);
    }
  }
};

printPersons(persons, 'name');
printPersons(persons, 'surname');

// 2. Crea la función addProperty para que reciba un objeto, una propiedad y valor nuevos,
// y un boolean. Si el boolean es true, que cree una copia de dicho objeto, añada la
// nueva propiedad + valor y lo retorne. Si el boolean es false, que retorne directamente
// el mismo objeto (misma referencia)

const person = {
  name: 'Pablo',
  surname: 'Cordonié'
};

const addProperty = (object, key, value, boolean) => {
  if (boolean) {
    const copyTruePerson = Object.assign(object, object);
    copyTruePerson[key] = value;
    return copyTruePerson;
  } else {
    const copyFalsePerson = Object.assign(object, object);
    return copyFalsePerson;
  }
};

addProperty(person, 'oldSurname', 'García', true);

// 3. Crea la función getPeopleWeight para que reciba un array con [clave, valor,...]
// donde "clave" es el nombre de las personas y "valor" su peso en kg, y devuelva
// un objeto con solo las personas (clave) y su peso (valor) que tengan un peso
// par y por encima de 60kg.

const peopleArr = ['Juan', 73, 'Maria', 64, 'Martin', 74, 'Sofia', 55];
const peopleObject = {};

const getPeopleWeight = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (value % 2 === 0 && value > 60) {
      peopleObject[key] = value;
    }
  }
  console.log(peopleObject);
  return peopleObject;
};

getPeopleWeight(peopleArr);

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printPersons,
  addProperty,
  getPeopleWeight,
};
// ///////////////////////////////////////////////////////////////
