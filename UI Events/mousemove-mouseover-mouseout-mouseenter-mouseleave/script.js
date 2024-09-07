// Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.
// Только одна подсказка может быть показана в любой момент времени.
let tooltip;

document.querySelector("#house").addEventListener("mouseover", (e) => {
  // if (e.target.closest("#roof")) {
  //   console.log(e.target.closest("#roof").dataset.tooltip);
  // }
  const target = e.target.closest("[data-tooltip]");

  if (!target) return;

  tooltip = createTooltip(target, target.dataset.tooltip);
});

document.querySelector("#house").addEventListener("mouseout", (e) => {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
});

function createTooltip(anchor, text) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = text;
  document.body.append(tooltip);

  const coords = anchor.getBoundingClientRect();

  let top = coords.top - tooltip.offsetHeight - 5;
  let left = coords.left + anchor.offsetWidth / 2 - tooltip.offsetWidth / 2;
  if (left < 0) {
    left = 5;
  }
  if (top < 0) {
    top = coords.bottom + 5;
  }

  tooltip.style.top = top + "px";
  tooltip.style.left = left + "px";

  return tooltip;
}
