// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
	console.log(
		str
			.split("-")
			.map((elem, index) => (index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)))
			.join("")
	);
};

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b) {
	return arr.filter((elem) => elem >= a && elem <= b);
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:

let newArr = [5, 3, 8, 1];

filterRangeInPlace(newArr, 1, 4); // удалены числа вне диапазона 1..4

console.log(newArr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

// Сортировать в порядке по убыванию
let sortArr = [5, 2, 1, -10, 8];
sortArr.sort((a, b) => b - a);
// ... ваш код для сортировки по убыванию

console.log(sortArr); // 8, 5, 2, 1, -10

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arrCopy = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrCopy);

function copySorted(arr) {
	return [...arr].sort();
}

console.log(sorted); // CSS, HTML, JavaScript
console.log(arrCopy); // HTML, JavaScript, CSS (без изменений)

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((elem) => elem.name);

console.log(names); // Вася, Петя, Маша

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map((elem) => ({
	fullName: `${elem.name}  ${elem.surname}`,
	id: elem.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr3 = [vasya3, petya3, masha3];

sortByAge(arr3);

// теперь: [vasya, masha, petya]
console.log(arr3[0].name); // Вася
console.log(arr3[1].name); // Маша
console.log(arr3[2].name); // Петя

function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено
// как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
let shuffleArr = [1, 2, 3];

shuffle(shuffleArr);
// arr = [3, 2, 1]

shuffle(shuffleArr);
// arr = [2, 1, 3]

shuffle(shuffleArr);
// arr = [3, 1, 2]
function shuffle(arr) {
	console.log(arr.sort(() => Math.random() - 0.5));
}

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:

let vasyaObj = { name: "Вася", age: 25 };
let petyaObj = { name: "Петя", age: 30 };
let mashaObj = { name: "Маша", age: 29 };

let arrAverage = [vasyaObj, petyaObj, mashaObj];

console.log(getAverageAge(arrAverage)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
	return arr.reduce((acc, item) => acc + item.age, 0) / arr.length;
}

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

function unique(arr) {
	let newArr = [];
	for (const elem of arr) {
		if (newArr.includes(elem)) {
			continue;
		} else {
			newArr.push(elem);
		}
	}
	return newArr;
}

let strings = [
	"кришна",
	"кришна",
	"харе",
	"харе",
	"харе",
	"харе",
	"кришна",
	"кришна",
	":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Например:

let usersArr = [
	{ id: "john", name: "John Smith", age: 20 },
	{ id: "ann", name: "Ann Smith", age: 24 },
	{ id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(usersArr);

function groupById(arr) {
	return arr.reduce((acc, elem) => {
		acc[elem.id] = elem;
		return acc;
	}, {});
}

/*
// после вызова у нас должно получиться:

usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
console.log(usersById);

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// let calc = new Calculator();
// (calc.calculate("3 + 7")); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и
// функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8

function Calculator() {
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
	};

	this.calculate = function (str) {
		let [first, operator, last] = str.split(" ");
		return this.methods[operator](+first, +last);
	};

	this.addMethod = function (name, func) {
		this.methods[name] = func;
	};
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result1 = powerCalc.calculate("2 * 3");
let result2 = powerCalc.calculate("9 / 3");
let result3 = powerCalc.calculate("2 ** 3");
console.log(result1);
console.log(result2);
console.log(result3);
