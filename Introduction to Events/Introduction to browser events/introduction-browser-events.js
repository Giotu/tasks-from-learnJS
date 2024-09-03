// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
document.querySelector("#hider").addEventListener("click", () => {
  const text = document.querySelector("#text");
  text.hidden = !text.hidden;
});

// Создайте кнопку, которая будет скрывать себя по нажатию.
const button = document.createElement("button");
button.textContent = "Скрыть";
document.body.append(button);
button.addEventListener("click", (e) => {
  e.currentTarget.hidden = true;
});

// Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// button.addEventListener("click", () => alert("1")); // этот
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2); //этот

// Пусть мяч перемещается при клике на поле
// Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;

const field = document.querySelector("#field");
const ball = document.querySelector("#ball");

field.addEventListener("click", function (e) {
  const coordsField = this.getBoundingClientRect();
  const ballHalfSize = ball.offsetWidth / 2;
  let left = e.clientX - coordsField.left - e.currentTarget.clientLeft - ballHalfSize;
  let top = e.clientY - coordsField.top - e.currentTarget.clientTop - ballHalfSize;

  const widthField = field.clientWidth;
  const heightField = field.clientHeight;

  if (left < ballHalfSize) {
    left = 0;
  }
  if (top < ballHalfSize) {
    top = 0;
  }
  if (left > widthField - ballHalfSize) {
    left = widthField - 2 * ballHalfSize;
  }
  if (top > heightField - ballHalfSize) {
    top = heightField - 2 * ballHalfSize;
  }

  ball.style.top = top + "px";
  ball.style.left = left + "px";
});

// Создать меню, которое по нажатию открывается либо закрывается
// P.S. HTML/CSS исходного документа можно и нужно менять.

const p = document.querySelector(".click");
const ul = document.querySelector(".list");
p.addEventListener("click", (e) => {
  p.classList.toggle("click__open");
  ul.classList.toggle("list__close");
});

// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const panes = document.querySelectorAll(".pane");
panes.forEach((pane) => {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.addEventListener("click", (e) => {
    if (e.target.closest(".remove-button")) {
      pane.remove();
    }
  });
});

// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const imagesLi = document.querySelectorAll(".item-list");
const countImage = imagesLi.length;
const widthImage = imagesLi[0].offsetWidth;
let count = 1;

btnNext.addEventListener("click", () => {
  if (countImage - count < 3) return;
  document.documentElement.style.setProperty("--translateX", `-${widthImage * count}px`);
  count += 1;
});

btnPrev.addEventListener("click", () => {
  const translate = document.documentElement.style.getPropertyValue("--translateX");
  if (!parseInt(translate)) return;
  document.documentElement.style.setProperty(
    "--translateX",
    `-${widthImage * --count - widthImage}px`
  );
});
