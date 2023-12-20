// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:

function sum(a) {
	return function (b) {
		return a + b;
	};
}

console.log(sum(14)(4));

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

/* .. ваш код для inBetween и inArray */

function inBetween(a, b) {
	return function (x) {
		return x >= a && x <= b;
	};
}
function inArray(array) {
	return function (x) {
		return array.includes(x);
	};
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// У нас есть массив объектов, который нужно отсортировать:

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

function byField(str) {
	return function (a, b) {
		return a[str] > b[str] ? 1 : -1;
	};
}
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.
