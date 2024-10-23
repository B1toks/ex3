function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));


function filter(handler, array) {
    const result = [];
    array.forEach((item) => {
        if (handler(item)) {
            result.push(item);
        }
    });
    return result;
}

const datalist = [1, 2, 3, 4, 5, 6];
const filteredList = filter((a) => a % 2 !== 0, datalist);
console.log(filteredList); 


function pow(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(pow(2, 3));
console.log(pow(2, 10));


function powList(array, exponent) {
    return array.map(num => pow(num, exponent));
}

const numbers = [1, 2, 3, 4];
console.log(powList(numbers, 2));


function powAndFilter(array, exponent, minValue) {
    const powered = powList(array, exponent);
    return filter(num => num >= minValue, powered);
}

const nums = [1, 2, 3, 4];
console.log(powAndFilter(nums, 2, 5));


function sum(handler) {
    return function calc() {
        const numbers = handler();
        return numbers.reduce((acc, num) => acc + num, 0);
    };
}

function handler() {
    return [1, 2, 3, 4, 5];
}

const calc = sum(handler);
console.log(calc()); 


