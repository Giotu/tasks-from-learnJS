// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
  return n === 1 ? 1 : n + sumTo(n - 1);
}
console.log(sumTo(5));

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7));

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// printList(list);

function printListRecursion(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursion(list.next);
  }
}

// printListRecursion(list);

// Выведите односвязный список из предыдущего задания в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

function printReverseList(list) {
  if (list) {
    printReverseList(list.next);
    console.log(list.value);
  }
}

// printReverseList(list);

function printReverseList2(list) {
  const arr = [];
  let current = list;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
// printReverseList2(list);
