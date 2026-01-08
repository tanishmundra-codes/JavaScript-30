function fn(a, b, c) {
    return a + b + c;
}

var newFn = function(fn) {
    let called = false;
    
    return function(...args) {
        if (!called) {      
            called = true; 
            return fn(...args);
        }
        return undefined;
    }
};

let once = newFn(fn);

let calls = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

calls.forEach((args) => {
    const result = once(...args); 
    console.log(result);
});