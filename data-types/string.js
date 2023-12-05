// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

console.log(ucFirst("вася")); // Вася

function ucFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function checkSpam(str) {
	let newStr = str.toLowerCase();
	return newStr.includes("xxx") || newStr.includes("viagra");
}

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxlength) => {
	if (str.length > maxlength) {
		str = str.slice(0, maxlength - 1) + "…";
	}
	return str;
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:

console.log(extractCurrencyValue("$120") === 120); // true

function extractCurrencyValue(str) {
	return Number(str.slice(1));
}
