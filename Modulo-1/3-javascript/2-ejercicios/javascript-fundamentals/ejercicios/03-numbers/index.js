// 1. Asigna números a las variables "addend1" y "addend2", y asigna a la variable "sum"
// la suma de ambas
var addend1 = 3;
var addend2 = 2;
var sum = addend1 + addend2;

// 2. Asigna números a las variables "minuend" y "subtrahend", y asigna a la variable "subtraction"
// la resta de ambas
var minuend = 5;
var subtrahend = 3;
var subtraction = minuend - subtrahend;

// 3. Asigna números a las variables "factor1" y "factor2", y asigna a la variable "multiplication"
// la multiplicación de ambas
var factor1 = 3;
var factor2 = 2;
var multiplication = factor1 * factor2;

// 4. Asigna números a las variables "divisor" y "dividend", y asigna a la variable "division"
// la división de ambas
var divisor = 6;
var dividend = 2;
var division = divisor / dividend;

// 5. Asigna números a las variables "divisor1" y "dividend1", Luego asigna a la variable "rest"
// la operación para calcular el resto de la division entre "divisor1" y "dividend1"
var divisor1 = 9;
var dividend1 = 4;
var rest = divisor1 % dividend1;

// 6. Asigna el número 10 a la variable "base", y asigna a la variable "power"
// la variable "base" elevada a la tercera potencia (10^3)
var base = 10;
var power = base ** 3;

// 7. Asigna a la variable tipo string "numberAsString" el string de un número (Ej: '25'), y luego asigna
// a la variable "number" la transformación de "numberAsString" a tipo number
var numberAsString = "24";
var number = Number(numberAsString);

// 8. Asigna a la variable "validNumber" la comprobación de NaN con un número para que valga false,
// y asigna a la variable "notValidNumber" la comprobación de NaN con algo que no sea un número para que valga true.
var validNumber = isNaN(7);
var notValidNumber = isNaN("number");

// --EXTRA-- Asigna a la variable "extra" una operación de números que contenga al menos dos de las operaciones vistas
// (suma, resta, multiplicacion...) y que el resultado sea 33. Ej: 5 ** 2 + 10 - 2
var extra = 15 + 5 * 5 - 7;

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export {
  addend1,
  addend2,
  sum,
  minuend,
  subtrahend,
  subtraction,
  factor1,
  factor2,
  multiplication,
  divisor,
  dividend,
  division,
  divisor1,
  dividend1,
  rest,
  base,
  power,
  numberAsString,
  number,
  validNumber,
  notValidNumber,
  extra,
};
// ///////////////////////////////////////////////////////////////
