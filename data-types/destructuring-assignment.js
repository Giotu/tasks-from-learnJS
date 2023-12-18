// У нас есть объект:

let user = {
	name: "John",
	years: 30,
};
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// ваш код должен быть с левой стороны:
// ... = user
let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// У нас есть объект salaries с зарплатами:

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
	if (Object.keys(salaries).length === 0) {
		return null;
	}
	let max = 0;
	let resultName = "";
	for (const [name, salary] of Object.entries(salaries)) {
		if (max < salary) {
			max = salary;
			resultName = name;
		}
	}
	return resultName;
}

console.log(topSalary(salaries));
