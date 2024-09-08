let slider = document.querySelector(".slider");
const coordsSlider = slider.getBoundingClientRect();

document.querySelector(".thumb").addEventListener("mousedown", (e) => {
  const thumb = e.target.closest(".thumb");

  let shiftX = e.pageX - thumb.getBoundingClientRect().left;
  if (!thumb) return;
  moveAt(e.pageX);

  function moveAt(pageX) {
    if (pageX < coordsSlider.left + shiftX) {
      pageX = coordsSlider.left + shiftX;
    }
    if (pageX + 10 - shiftX > coordsSlider.right) {
      pageX = coordsSlider.right - (10 - shiftX);
    }
    thumb.style.left = pageX - coordsSlider.left - shiftX + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener(
    "mouseup",
    (e) => {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});
