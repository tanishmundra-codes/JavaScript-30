let arr = [1, 2, 3, 4, 5];


function fn(n) {
    return n > 3;
}

let filter = function (arr, fn) {
    let newArr = [];

    arr.forEach((e, i) => {
        if (fn(e, i)) {
            newArr.push(arr[i]);
        }
    });

    return newArr;
};

console.log(filter(arr, fn));