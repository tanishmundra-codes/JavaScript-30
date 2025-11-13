let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let changeText = document.getElementById('para');

let num = Number(changeText.innerText);

addBtn.addEventListener('click', (event) => {
    num = num + 1;
    changeText.innerText = num;
})

subBtn.addEventListener('click', (event) => {
    num = num - 1;
    changeText.innerText = num;
})