// Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

// При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
// Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

document.querySelector(".list").addEventListener("click", (e) => {
  const elem = e.target;

  if (!elem.closest(".item")) return;
  if (!e.ctrlKey) {
    [...e.currentTarget.children].forEach((el) => {
      el.classList.remove("selected");
    });
  }
  elem.classList.toggle("selected");
});

// P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

// P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.