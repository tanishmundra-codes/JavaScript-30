// LeetCode JS - "Counter" (#2620)

var counter = function(num){
    return function() {
        return num++;
    }
}

let result = counter(1); // result is function here 
console.log(result());
console.log(result());


