// Build a "Sum Calculator." Have an input where the user can type numbers (e.g., "5, 8, 3").
// When they click a "Sum" button, use .split(','), .map(Number), and .reduce() to show the total.

let inputBox = document.querySelector("#inputBox");
let btn = document.querySelector("#sumBtn");
let result = document.querySelector("#result");

var arr = [];

inputBox.addEventListener("input", (e) => {
    arr = e.target.value.split(',');
    console.log(arr)
});

btn.addEventListener('click', (e) => {
    let newArr = arr.map((num) => {
       return Number(num);
    });

    let total = newArr.reduce((prev,curr) => {
        return prev + curr;
    })

    result.innerText = total;
});