// Найдите координаты точек относительно окна браузера
// В ифрейме ниже располагается документ с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:
// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

const field = document.querySelector("#field");
const coords = field.getBoundingClientRect();
const coordsEl = document.querySelector("#coords");
console.log(coords);
console.log(`1 point: ${coords.x}:${coords.y}`);
console.log(`2 point: ${coords.right}:${coords.bottom}`);
console.log(`3 point: ${coords.x + field.clientLeft}:${coords.y + field.clientTop}`);
console.log(
  `4 point: ${coords.right - field.clientLeft}:${coords.bottom - field.clientTop}`
);

document.body.addEventListener("click", (e) => {
  console.log(e);
  coordsEl.innerHTML = `${e.clientX} : ${e.clientY}`;
});

///////////////////

// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи.
// Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
// Это предотвратит расхождение элементов при прокрутке страницы.
// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.

function createSomeTestElement(text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.className = "note";
  return div;
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

const blockquote = document.querySelector("blockquote");

function positionAt(anchor, position, elem) {
  const coords = getCoords(anchor);

  if (position === "right") {
    elem.style.top = coords.top + "px";
    elem.style.left = coords.right + "px";
  }
  if (position === "top") {
    elem.style.top = coords.top - elem.offsetHeight + "px";
    elem.style.left = coords.left + "px";
  }
  if (position === "bottom") {
    elem.style.top = coords.bottom + "px";
    elem.style.left = coords.left + "px";
  }
}

function showNote(anchor, position, text) {
  const div = createSomeTestElement(text);
  document.body.append(div);
  positionAt(anchor, position, div);
}

showNote(blockquote, "right", "some text");
