/*Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function firstNum (num) {
    return function (secondNum) {
        return num + secondNum;
    }
}

const add5 = firstNum(5);

const result = add5(10)

console.log(result);