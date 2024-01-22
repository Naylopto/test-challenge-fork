/*a. Función FizzBuzz: - Desarrolle una función que acepte un número 
y evalúe las siguientes condiciones: 
- Si es divisible por 3, devuelva 'Fizz'. 
- Si es divisible por 5, devuelve 'Buzz'. 
- Si es divisible por 3 y 5, devuelve 'FizzBuzz'.
 - En caso contrario, devolver el número original.*/

 function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    } else if (number % 5 == 0) {
        return "Buzz";
    } else if (number % 3 == 0) {
        return "Fizz"
    } else {
        return num;
    }
}
module.exports = fizzBuzz
