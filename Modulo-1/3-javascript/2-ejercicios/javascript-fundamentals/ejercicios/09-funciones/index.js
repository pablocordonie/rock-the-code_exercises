// 1. Declara una función llamada "getLongString" que devuelva un string conteniendo al menos 6 caracteres.
// Ejemplo: getLongString() tiene que devolver un string de longitud igual o mayor a '123456'.
function getLongString() {
  const userString = '123456';
  if (userString.length >= 6) {
    return userString;
  }
}

getLongString();

// 2. Declara una función llamada "getInUpperCase" que devuelva el string pasado como argumento en MAYÚSCULAS.
// Ejemplo: getInUpperCase('thepower') tiene que devolver THEPOWER.
function getInUpperCase(text) {
  return text.toUpperCase();
}

getInUpperCase('thepower');

// 3. Declara una función llamada "sum" que devuelva dos números pasados como argumentos (a, b) sumados.
// Ejemplo: sum(2, 4) tiene que devolver 6.
function sum(a, b) {
  return a + b;
}

sum(2, 4);

// 4. Declara una función llamada "sliceUntil" que devuelva un trozo de un string pasado como argumento (usando .slice sobre este),
// que empiece en el índice 0 y acabe en el índice que tenga el valor del segundo argumento pasado a la función.
// Ejemplo: sliceUntil('thepower school', 6) tiene que devolver 'thepow'
function sliceUntil(text, limit) {
  return text.slice(0, limit);
}

sliceUntil('thepower school', 6);

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { getLongString, getInUpperCase, sum, sliceUntil };
// ///////////////////////////////////////////////////////////////
