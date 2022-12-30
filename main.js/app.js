// let countries = ["Oapan", "Amerika", "Venesuela"];

// alert(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (неправильно)

// alert(countries.sort((a, b) => a.localeCompare(b))); // Amerika,Benesuela,Japan (правильно!)
// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter((item) => item.id < 3);

// alert(someUsers.length); // 2
// let arr = [1, 2, 15];

// arr.sort(function (a, b) {
//   return a - b;
// });

// alert(arr); // 1, 2, 15

let names = "Вася, Петя, Маша";

let arr = names.split(",");
alert(arr);
