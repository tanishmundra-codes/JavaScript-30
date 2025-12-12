// Build a simple "Search Filter." Use your fruits list from yesterday. 
// Add an <input>. As the user types, filter the list to only show matching fruits.

let searchInput = document.querySelector("#Search");
let fruitsList = document.querySelector("#fruits-list");

let listItemNode = fruitsList.querySelectorAll("li"); 

searchInput.addEventListener('input', () => {

    const searchTerm = searchInput.value.toLowerCase();

    listItemNode.forEach((li) => {
        const fruitName = li.textContent.toLowerCase();  
      
        if (fruitName.includes(searchTerm)) {
            li.style.display = ''; 
        } else {
            li.style.display = 'none'; 
        }
    });
});