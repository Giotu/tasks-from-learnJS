// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
// 	let timerId = setInterval(() => {
// 		if (from <= to) {
// 			console.log(from++);
// 		} else {
// 			clearInterval(timerId);
// 		}
// 	}, 1000);
// }

function printNumbers(from, to) {
	setTimeout(function run() {
		if (from <= to) {
			console.log(from++);
			setTimeout(run, 1000);
		}
	}, 1000);
}

printNumbers(8, 10);
