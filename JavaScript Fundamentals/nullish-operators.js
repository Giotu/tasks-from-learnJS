// Что выведет код ниже?
console.log(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

// Что будет выведено в итоге?
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

console.log(city); // Берлин

// Перепишите этот код используя операторы нулевого слияния и присваивания.

// let num1 = 10,
//   num2 = 20,
//   result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;
