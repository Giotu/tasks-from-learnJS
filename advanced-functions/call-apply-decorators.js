// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

function work(a, b) {
	console.log(a + b); // произвольная функция или метод
}

function spy(func) {
	wrapper.calls = [];
	function wrapper(...rest) {
		let result = func(...rest);
		wrapper.calls.push(rest);
		return result;
	}
	return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
	console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.

function f(arg) {
	console.log(arg);
}

function throttle(f, ms) {
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}
