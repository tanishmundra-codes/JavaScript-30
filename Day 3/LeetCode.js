// LeetCode JS - "Sleep" (#2621)

let millis = 2000;

var sleep = async function(millis){
    let myPromise = new Promise((reolve, reject) => {
        setTimeout(() => {
            reolve(millis)
        }, millis)
    });

    myPromise.then((value) => {
        console.log(value);
    });
}
console.log("I am outside the promise")
sleep(millis);