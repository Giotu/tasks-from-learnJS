const start = Date.now();

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function f() {
    f.calls.push([...arguments]);
    return func.apply(this, arguments);
  }
  f.calls = [];

  return f;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function delay(func, ms) {
  return function () {
    setTimeout(() => {
      func.apply(this, arguments);
    }, ms);
  };
}

function f() {
  console.log(...arguments);
}
// const obj = {
//   name: "Dobryak",
//   age: 20,
//   getInfo() {
//     console.log(this.age + " " + this.name);
//   },
// };
// obj.getInfo = delay(obj.getInfo, 2000);

// obj.getInfo();

f = delay(f, 3000);

f(2, 5, 4);

// Задача — реализовать декоратор debounce.

function debounce(func, ms) {
  let idTimer;
  return function () {
    clearTimeout(idTimer);
    idTimer = setTimeout(() => func.apply(this, arguments), ms);
  };
}

function say(s) {
  console.log(s, Date.now() - start);
}

say = debounce(say, 3000);

say("hi");
setTimeout(() => say("hello"), 1500);
setTimeout(() => say("privet"), 2500);

// /Тормозящий (throttling) декоратор

function f2(a) {
  console.log(a);
}

function throttle(func, ms) {
  let isThrottled = false;
  let saveThis;
  let saveArgs;
  return function wrapper() {
    if (isThrottled) {
      saveArgs = arguments;
      saveThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (saveArgs) {
        wrapper.apply(saveThis, saveArgs);
        saveArgs = saveThis = null;
      }
    }, ms);
  };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f2, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3);
setTimeout(() => f1000(4), 1100);
setTimeout(() => f1000(5), 1300);
// setTimeout(() => f1000(6), 1900);
// setTimeout(() => f1000(7), 2100);
