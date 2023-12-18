// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

let setDate = new Date(2012, 1, 20, 3, 12);
console.log(setDate);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"

function getWeekDay(date) {
	let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
	return days[date.getDay()];
}

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let d = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date));

function getLocalDay(date) {
	let day = date.getDay();
	return day === 0 ? 7 : day;
}

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let date2 = new Date(2015, 0, 2);

console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
	let newDate = new Date(date);
	newDate.setDate(newDate.getDate() - days);
	return newDate.getDate();
}

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0));

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000; // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
	let date = new Date();
	return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
	return (
		3600 * 24 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
	);
}

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
	let newDate = new Date();
	let diff = newDate - date;
	if (diff <= 1000) {
		return "прямо сейчас";
	} else if (diff <= 60000) {
		return `${Math.round(diff / 1000)} секунд назад`;
	} else if (diff <= 3600000) {
		return `${Math.round(diff / 60000)} минут назад`;
	} else {
		return `${date.getDate()}.${
			date.getMonth() + 1
		}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
	}
}
