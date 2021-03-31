"use strict";

/*Напишите функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value.
Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего,
что ввёл пользователь при вызовах метода read(),
с учётом начального значения startingValue.*/


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function read() {
    let userInput = +prompt("Your number: ");

    if (isNaN(userInput)) {
      console.log(`This is ${userInput}`);
      return;
    }

    this.value += userInput;
    return this.value;
  };
}

let object = new Accumulator(10);

console.log(object.read());
console.log(object.read());
console.log(object.read());
console.log(object.read());
