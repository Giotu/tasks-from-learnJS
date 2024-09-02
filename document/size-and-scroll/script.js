"use strict";

// Найти размер прокрутки снизу
// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
// Напишите соответствующее выражение для произвольного элемента elem.
// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.

const elem = document.querySelector(".test");
elem.addEventListener("scroll", function () {
  const scrollBottom = this.scrollHeight - this.scrollTop - this.clientHeight;
  console.log(scrollBottom);
});

// Узнать ширину полосы прокрутки
// Напишите код, который возвращает ширину стандартной полосы прокрутки.
// Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки
// (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.
// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

console.log(
  "Ширина полосы прокрутки:",
  elem.offsetWidth - elem.clientWidth - elem.clientLeft * 2
);

function centerBall() {
  const field = document.querySelector("#field");
  const ball = document.querySelector("#ball");
  ball.style.top = field.clientHeight / 2 - ball.clientHeight / 2 + "px";
  ball.style.left = field.clientWidth / 2 - ball.clientWidth / 2 + "px";
}

centerBall();
