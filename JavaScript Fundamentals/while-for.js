// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--);
}
//1

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let a = 0;
while (a < 3) {
  alert(`number ${a++}!`);
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let value;
do {
  value = prompt("Введите число больше 100");
  if (value === null) break;
} while (+value <= 100);

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

loop: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue loop;
    }
  }
  console.log(i);
}
