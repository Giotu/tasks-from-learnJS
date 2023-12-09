// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// let ul = document.createElement("ul");
// document.body.append(ul);

// while (true) {
// 	let text = prompt("Input value li");
// 	if (text === "" || text === null) break;
// 	let li = document.createElement("li");
// 	li.textContent = text;
// 	ul.append(li);
// }

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:
let data = {
	Рыбы: {
		форель: {},
		лосось: {},
	},

	Деревья: {
		Огромные: {
			секвойя: {},
			дуб: {},
		},
		Цветковые: {
			яблоня: {},
			магнолия: {},
		},
	},
};

let data2 = {};

// Выберите один из двух способов решения этой задачи:
// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

//Способ 1

function createTree(container, obj) {
	if (Object.keys(obj).length === 0) return;
	let ul = document.createElement("ul");
	for (let key in obj) {
		let li = document.createElement("li");
		li.textContent = key;
		ul.append(li);
		if (Object.keys(obj[key]).length === 0) {
			continue;
		} else {
			createTree(li, obj[key]);
		}
	}
	container.append(ul);
}

createTree(document.body, data);
