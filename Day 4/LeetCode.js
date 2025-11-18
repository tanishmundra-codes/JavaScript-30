// LeetCode JS - "Apply Transform Over Each Element in Array" (Map) (#2635)

let arr= [1,2,3];

function plusOne(element, index) {
    return element + 1;
}

var map = function (arr, fn) {
    let newArr = new Array();

    arr.forEach((e, i) => {
        let ele = fn(e, i);
        newArr.push(ele);
    })

    return newArr;
}  

console.log(map(arr, plusOne));