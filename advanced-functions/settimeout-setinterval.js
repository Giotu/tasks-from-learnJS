// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//   let curr = from;

//   let idTimer = setInterval(() => {
//     console.log(curr);
//     if (curr == to) {
//       clearInterval(idTimer);
//     }
//     curr++;
//   }, 1000);
// }

printNumbers(1, 6);

function printNumbers(from, to) {
  let curr = from;
  setTimeout(function tick() {
    console.log(curr);
    if (curr < to) {
      setTimeout(tick, 1000);
    }
    curr++;
  }, 1000);
}
