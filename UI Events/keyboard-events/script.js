function runOnKeys(func, ...keys) {
  let keysDown = new Set();

  document.addEventListener("keydown", (e) => {
    console.log(e.code);
    keysDown.add(e.code);

    for (let key of keys) {
      if (!keysDown.has(key)) {
        return;
      }
    }

    keysDown.clear();
    func();
  });

  document.addEventListener("keyup", (e) => {
    keysDown.delete(e.code);
  });
}

runOnKeys(() => alert("Hi"), "KeyH", "KeyI");
