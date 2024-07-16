//В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1) true

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2) null

delete animal.jumps;

console.log(rabbit.jumps); // ? (3) undefined

// У нас есть объекты:

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// 1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
//  pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// 2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen);
console.log(bed.glasses);

// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animalTwo = {
  eat() {
    this.full = true;
  },
};

let rabbitTwo = {
  __proto__: animalTwo,
};

rabbitTwo.eat();

//rabbitTwo

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  eat(food) {
    if (!this.hasOwnProperty("stomach")) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach);
