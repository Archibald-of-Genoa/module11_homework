/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

const timer = function (a, b) {
    let current = a;

    const intervalId = setInterval(function () {
        if (current <= b) {
            console.log(current);
            current++;
        } else {
            clearInterval(intervalId)
        }
    }, 1000);
}

timer(5, 15)