//Tasks from chatGPT
// Задача на поверхностное копирование: Создайте объект person1 с несколькими свойствами. Затем создайте объект person2,
//  который является поверхностной копией person1 с использованием Object.assign().
//   Измените одно из свойств person2 и проверьте, изменилось ли это свойство в person1.

const person1 = {
	name: "Grisha",
	surname: "Yeager",
	status: "clown",
	info: {
		sex: "male",
		job: "doctor",
	},
};

const person2 = Object.assign({}, person1);
person2.name = "Eren";
person2.info.job = "clown";
console.log(person1, person2);

// Задача на клонирование объектов с вложенными объектами: Создайте объект student1, который содержит вложенный объект.
//  Создайте функцию для глубокого копирования объекта. Используйте эту функцию, чтобы создать объект student2,
// который является глубокой копией student1. Измените одно из свойств во вложенном объекте для student2 и проверьте,
//  изменилось ли это свойство в student1.

let student = {
	name: "Lesha",
	age: 25,
	surname: "Obama",
	info: {
		sex: "male",
		status: "student",
	},
};

function copyFull(obj) {
	let newObj = {};
	for (let key in obj) {
		if (typeof obj[key] !== "object") {
			newObj[key] = obj[key];
		} else {
			newObj[key] = copyFull(obj[key]);
		}
	}
	return newObj;
}

let result = copyFull(student);

result.info.status = "programmist";
result.age = 25.5;
console.log(student, result);
