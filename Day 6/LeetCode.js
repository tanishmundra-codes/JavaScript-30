// LeetCode JS - "Array Reduce Transformation" (#2626)

function fn(accum, val){
    return accum + val;
}

let init = 0;
let nums = [1,2,3,4,5];

var reduce = function(nums, fn, init) {
    let accum = init;

    nums.forEach((e, i) => {
        accum = fn(accum, e);
    });

    return accum;
};

console.log(reduce(nums, fn, init));