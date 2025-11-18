// In your JS, create an array: let fruits = ['Apple', 'Banana', 'Cherry'].
//  Use .map() to turn this into an HTML string (<ul><li>Apple</li>...</ul>) and put it on the page.

let fruits = ['Apple', 'Banana', 'Cherry'];
let ulList = document.querySelector("#list");


let fruitsList = fruits.map((element) => {
    // new list item created
    let newListItem = document.createElement("li"); 

    // added text to it
    newListItem.innerText = element;

    //append it to ul
    ulList.appendChild(newListItem);
});
