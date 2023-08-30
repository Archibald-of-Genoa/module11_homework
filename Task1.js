const arr1 = [
    1,
    2,
    3,
    4,
    5,
    'six',
    7,
    8,
    9,
    0,
    null
]

let even = 0;
let odd = 0;
let zero = 0;

const evenOrOdd = (arr) => {
    arr.forEach((e) => {

        if (typeof e === 'number' && !isNaN(e)) {
            if (e % 2 !== 0) {
                odd++;
            } else if (e == 0) {
                zero++;
            } else {
                even++;
            }
        }
    });

    console.log(`Чётных чисел: ${even}`);
    console.log(`Нечётных чисел: ${odd}`);
    console.log(`Нулей: ${zero}`);
}
evenOrOdd(arr1)
