// Build a "Sum Calculator." Have an input where the user can type numbers (e.g., "5, 8, 3").
// When they click a "Sum" button, use .split(','), .map(Number), and .reduce() to show the total.

let inputBox = document.querySelector("#inputBox");
let btn = document.querySelector("#sumBtn");
let result = document.querySelector("#result");

// new array to store the number and sum them by using map


inputBox.addEventListener("input", (e) => {
    var arr = [];
    arr = e.target.value.split(",");
    
    let sum = 0;
    arr.map((num) => {
        sum = sum + Number(num);
    })

    result.innerText = sum;
})




