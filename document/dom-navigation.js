// Task 1 Для страницы:
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

document.body.firstElementChild;
document.body.lastElementChild;
document.body.lastElementChild.lastElementChild;

// Task 2 Если elem – произвольный узел DOM-элемента…
// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// 1 - да
// 2 - нет, может быть текстовый узел

// Task 3 Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = "red";

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
	let td = table.rows[i].cells[i];
	td.style.backgroundColor = "red";
}
