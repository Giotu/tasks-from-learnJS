// Что выведет функция?

function f() {
	console.log(this); // ?
}

let user = {
	g: f.bind(null),
};

user.g();

//null в строгом режиме и window без 'use strict'
