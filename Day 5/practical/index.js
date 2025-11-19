let searchInput = document.querySelector("#Search");
let fruitsList = document.querySelector("#fruits-list");

let listItemNode = fruitsList.querySelectorAll("li"); 

searchInput.addEventListener('input', () => {
    // Get the search term and convert it to lowercase once.
    const searchTerm = searchInput.value.toLowerCase();

    // Iterate directly over the HTML <li> elements.
    listItemNode.forEach((li) => {
        const fruitName = li.textContent.toLowerCase();
        
        // Check if the fruit name includes the search term.
        if (fruitName.includes(searchTerm)) {
            // Show the element if it matches
            li.style.display = ''; 
        } else {
            // Hide the element if it doesn't match
            li.style.display = 'none'; 
        }
    });
});