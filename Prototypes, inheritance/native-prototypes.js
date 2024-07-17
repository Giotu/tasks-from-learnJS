// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000);

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

Function.prototype.defer = function (ms) {
  return (...args) => {
    setTimeout(this, ms, ...args);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2, 3);
