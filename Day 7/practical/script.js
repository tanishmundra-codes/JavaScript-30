// Build a "Password Toggle." Add a password <input> and a "Show/Hide" button.
// Clicking the button should change the input type from password to text and back.

let inputBox = document.querySelector("#inputBox");
let toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener('click', (e) => {
    console.log("clicked on show");
    let value = inputBox.type;
    if(value == "password"){
        inputBox.type = "text";
    }else{
        inputBox.type = "password";
    }
})