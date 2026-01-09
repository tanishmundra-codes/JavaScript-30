// memoization

function square(n) {
    return n * n;
}

function memoize(func) {
    let cache = {};

    return function (...args) {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        } else {
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

let effTime = memoize(square);
console.time();
console.log(effTime(7));
console.timeEnd();

console.log("After cached value");
console.time();
console.timeEnd();
