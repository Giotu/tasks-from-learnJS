// Task1
// createTextNode vs innerHTML vs textContent
// важность: 5
// У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text));
// elem.innerHTML = text;
// elem.textContent = text;

// 1 и 3, так как во втором случае можно вставить html

// Task2
// В примере ниже вызов table.remove() удаляет таблицу из документа.
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
// Почему так происходит?

/* <table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> */

// HTML в задаче некорректен

// Task3
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// let input;
// const ul = document.createElement("ul");

// do {
//   input = prompt("Input text", "");
//   if (input) {
//     const li = document.createElement("li");
//     li.textContent = input;
//     ul.append(li);
//   }
// } while (input);

// document.body.append(ul);

// Task4
// Создайте дерево из объекта
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
// Синтаксис:

// let container = document.getElementById('container');
// createTree(container, data);

// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

// Решение через метода DOM

function createTree(container, options) {
  if (!Object.keys(options).length) return;

  const ul = document.createElement("ul");

  for (const key in options) {
    const li = document.createElement("li");
    li.append(key);
    createTree(li, options[key]);
    ul.append(li);
  }

  container.append(ul);
}

createTree(document.body, data2);

// Решение через innerHTML

function createTreeinnerHTML(container, options) {
  if (!Object.keys(options).length) return;

  const ul = `<ul>${Object.keys(options)
    .map((key) => {
      const innerUL = createTreeinnerHTML(null, options[key]);
      return `<li>${key} ${innerUL ? innerUL : ""}</li>`;
    })
    .join("")}</ul>`;

  if (container) {
    container.innerHTML = ul;
  }
  return ul;
}

// createTreeinnerHTML(document.body, data);

// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

const ulAnimal = document.querySelector(".animal");
const liAnimal = document.querySelectorAll("li");
for (let li of liAnimal) {
  let count = li.querySelectorAll("li").length;
  if (count) {
    li.firstChild.data += `[${count}]`;
  }
}

// Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели,
// каждый день – <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

function createCalendar(elem, year, month) {
  let countDays = new Date(year, month, 0).getDate();
  let firstDay = getLocalDay(new Date(year, month - 1));
  let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const table = document.createElement("table");
  const tr = document.createElement("tr");
  table.append(tr);

  days.forEach((day) => {
    const th = document.createElement("th");
    th.append(day);
    tr.append(th);
  });

  // for (let i = 0; i <= countTR; i++) {
  //   const tr = document.createElement("tr");
  //   for (let i = 1; i <= 7; i++) {
  //     if (count > countDays) break;
  //     const td = document.createElement("td");
  //     if (count === startDay || i === startDay) {
  //       td.append(count++);
  //       startDay = count;
  //     }
  //     tr.append(td);
  //   }
  //   table.append(tr);
  // }
  let row = document.createElement("tr");
  table.append(row);

  for (let i = 1; i < firstDay; i++) {
    let td = document.createElement("td");
    row.append(td);
  }

  for (let i = 1; i <= countDays; i++) {
    let td = document.createElement("td");
    if (row.children.length === 7) {
      row = document.createElement("tr");
      table.append(row);
    }
    td.append(i);
    row.append(td);
  }

  for (let i = row.children.length; i < 7; i++) {
    let td = document.createElement("td");
    row.append(td);
  }

  elem.append(table);
}

createCalendar(document.body, 2024, 9);
