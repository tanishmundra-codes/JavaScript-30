// LeetCode JS - "Function Composition" (#2629)

var compose = function (functions) {

    if (functions.length == 0) {
        return function (x) {
            return x;
        }
    }


    return functions.reduceRight(function (prevfn, currfn) {
        return function (x) {
            return currfn(prevfn(x));
        };
    });
};
