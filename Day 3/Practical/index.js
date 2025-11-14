let inputBox = document.querySelector("#inputBox");
let paraContainer = document.querySelector("#paragraphContainer");

// when type in input that shows on paragraph 
// innetText change
// listen to the input -> change in paragraph

inputBox.addEventListener('input',(e) => {
    let text = e.target.value;
    paraContainer.innerText = text;
})
