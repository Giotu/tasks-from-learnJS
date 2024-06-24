// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

// function makeCounter() {
//   let counter = 0;
//   function f() {
//     return counter++;
//   }

//   f.set = function (value) {
//     counter = value;
//   };

//   f.decrease = function () {
//     counter--;
//   };
//   return f;
// }

function makeCounter() {
  function func() {
    return func.counter++;
  }

  func.counter = 0;

  func.set = function (value) {
    this.counter = value;
  };

  func.decrease = function () {
    this.counter--;
  };

  return func;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
