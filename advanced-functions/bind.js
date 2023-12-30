// Что выведет функция?

// function f() {
// 	console.log(this); // ?
// }

// let user = {
// 	g: f.bind(null),
// };

// user.g();

//null в строгом режиме и window без 'use strict'

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

function askPassword(ok, fail) {
	let password = prompt("Password?", "");
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: "Вася",

	loginOk() {
		console.log(`${this.name} logged in`);
	},

	loginFail() {
		console.log(`${this.name} failed to log in`);
	},
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
	let password = prompt("Password?", "");
	if (password == "rockstar") ok();
	else fail();
}

let user2 = {
	name: "John",

	login(result) {
		alert(this.name + (result ? " logged in" : " failed to log in"));
	},
};

askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false)); // ?
