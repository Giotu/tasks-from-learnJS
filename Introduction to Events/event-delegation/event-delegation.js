// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

document.querySelector("#container").addEventListener("click", (e) => {
  if (e.target.closest(".remove-button")) {
    e.target.closest(".pane").remove();
  }
});

// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

document.querySelector("#tree").addEventListener("click", (e) => {
  if (e.target.closest("span")) {
    e.target.closest("span").nextElementSibling.hidden =
      !e.target.closest("span").nextElementSibling.hidden;
  }
});

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:

document.querySelector("#grid").addEventListener("click", (e) => {
  if (!e.target.closest("th")) return;
  const type = e.target.dataset.type;
  let sort;
  let index = e.target.cellIndex;
  switch (type) {
    case "number":
      sort = function (a, b) {
        return a.cells[index].innerHTML - b.cells[index].innerHTML;
      };
      break;
    case "string":
      sort = function (a, b) {
        return a.cells[index].innerHTML.localeCompare(b.cells[index].innerHTML);
      };
  }

  const arrRows = [...e.currentTarget.rows].slice(1);
  arrRows.sort(sort);
  e.currentTarget.tBodies[0].append(...arrRows);
});
