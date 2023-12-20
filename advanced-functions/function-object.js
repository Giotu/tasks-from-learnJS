// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

// function makeCounter() {
// 	let count = 0;

// 	function counter() {
// 		return count++;
// 	}

// 	counter.set = function (num) {
// 		count = num;
// 	};
// 	counter.decrease = function () {
// 		count -= 1;
// 	};
// 	return counter;
// }

function makeCounter() {
	function counter() {
		return counter.count++;
	}

	counter.count = 0;

	counter.set = function (num) {
		this.count = num;
	};
	counter.decrease = function () {
		this.count -= 1;
	};
	return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
