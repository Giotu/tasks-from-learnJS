// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

console.log(ucFirst("вася")); // Вася

function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}
