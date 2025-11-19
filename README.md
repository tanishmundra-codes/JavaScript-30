## 30-Day JavaScript Plan

### Week 1: The Foundation - "Hello, Browser!" 👋

Day 1:

Logic: LeetCode JS - "Hello World Function" (#2667)

Practical: Create index.html and script.js. Add one button. When clicked, make it alert('Hello, World!').

Theory: Read - "What is an onclick event?", "What is a JavaScript function?"
<hr>

Day 2:

Logic: LeetCode JS - "Counter" (#2620)

Practical: Build the LeetCode Counter in HTML. Create a p tag (for the number) and two button tags (+ and -). Make them update the number in the p tag.

Theory: Read - "document.querySelector", "element.addEventListener('click')", "element.innerText".
<hr>

Day 3:

Logic: LeetCode JS - "Sleep" (#2621) (This is your first gentle intro to async!)

Practical: Build the "Input Mirror." Add an input box and a p tag. Make whatever you type in the input appear live in the p tag.

Theory: Read: "let vs const", "The 'input' event".
<hr>

Day 4:

Logic: LeetCode JS - "Apply Transform Over Each Element in Array" (Map) (#2635)

Practical: In your JS, create an array: let fruits = ['Apple', 'Banana', 'Cherry']. Use .map() to turn this into an HTML string and put it on the page.

Theory: Read: "What is the DOM?", "JS .map() vs for loop".
<hr>

Day 5:

Logic: LeetCode JS - "Filter Elements from Array" (#2634)

Practical: Build a simple "Search Filter." Use your fruits list from yesterday. Add an input. As the user types, filter the list to only show matching fruits.

Theory: Read: "JavaScript .filter()", "String .toLowerCase().includes()".
<hr>

Day 6:

Logic: LeetCode JS - "Array Reduce Transformation" (#2626)

Practical: Build a "Sum Calculator." Have an input where the user can type numbers (e.g., "5, 8, 3"). When they click a "Sum" button, use .split(','), .map(Number), and .reduce() to show the total.

Theory: Read: "What is .reduce()?" (Explain it: "It flattens an array to a single value").
<hr>

Day 7:

Logic: LeetCode JS - "Function Composition" (#2629)

Practical: Build a "Password Toggle." Add a password input and a "Show/Hide" button. Clicking the button should change the input type from password to text and back.

Theory: Read: "Element .setAttribute()", "JavaScript if/else".
<hr>

### Week 2: Getting Data - "The Communicator" 🗣️

Day 8:

Logic: LeetCode JS - "Memoize" (#2623) (This is tough and famous. Read the solution and understand why it works).

Practical: Your first API call. Use fetch('https://jsonplaceholder.typicode.com/todos/1'). Use .then() and console.log() the resulting data.

Theory: Read: "What is fetch()?", "What is a Promise?" (Simple: "A box for a value that hasn't arrived yet").
<hr>

Day 9:

Logic: LeetCode JS - "Promise Time Limit" (#2637)

Practical: Do yesterday's fetch again, but this time using async/await. Write an async function, use await fetch(), and wrap it in a try...catch block.

Theory: Read: "async/await vs .then()", "What is JSON?".
<hr>

Day 10-12 (Mini-Project): The To-Do List

Practical: Build a To-Do list.

An input to add a task.

An "Add" button.

An ul where new tasks appear as li items.

Bonus: Add a "Delete" button to each li that removes it.

Theory: Read: "Event Delegation" (This is a critical interview concept for this exact project), "element.remove()".
<hr>

Day 13-14 (Mini-Project): Simple Weather App

Practical: Get a free API key from OpenWeatherMap.

Build an input for a city name.

On button click, fetch the weather for that city.

Display the temperature and description (e.g., "Clouds") on the page.

Theory: Read: "How to use an API Key?", "What is try...catch for error handling?".\
<hr>

### Week 3: Data Structures in JS 📂

Day 15:

Logic (C++ to JS): Solve "Two Sum" (LeetCode #1) in JavaScript. Use a Map or an Object {}.

Practical: Build a "Stopwatch" with Start, Stop, and Reset buttons.

Theory: Read: "setInterval()", "clearInterval()".
<hr>

Day 16:

Logic (C++ to JS): Solve "Valid Parentheses" (LeetCode #20). Use a JS Array [] as your stack (with .push() and .pop()).

Practical: Build a "Modal" (a popup box) that shows when you click a button and hides when you click an "X" button.

Theory: Read: "CSS display: none vs display: block".
<hr>

Day 17:

Logic (C++ to JS): The "Sort Trap". Create let nums = [10, 2, 5]. Try nums.sort(). See it fail. Fix it with nums.sort((a, b) => a - b).

Practical: Fetch a list of users from https://jsonplaceholder.typicode.com/users. Display their names in a table.

Theory: Read: "Why does JavaScript's .sort() need a compare function?".
<hr>

Day 18-21 (Mini-Project): Rock, Paper, Scissors Game

Logic: Math.random() to generate the computer's choice.

Practical: Build the UI. 3 buttons (Rock, Paper, Scissors). A "Winner" text. A "Score" tracker.

Theory: Read: "What is setTimeout()?" (to make the computer's choice feel less instant).
<hr>

### Week 4: The Interview Polish ✌️

Day 22:

Logic: LeetCode JS - "Debounce" (#2627) (A famous senior-level interview question. Read the solution. Understand the concept).

Practical: Apply "Debounce" to your "Search Filter" from Day 5. (So it only searches after you stop typing).

Theory: Explain "Debounce" in simple terms (e.g., "In an elevator, it waits for the door to close. It doesn't move every time one person gets in.").
<hr>

Day 23:

Logic: LeetCode JS - "Event Emitter" (#2694) (Another famous one. Just understand the idea of on and emit).

Practical: Add localStorage to your To-Do List (Day 10) so the tasks are still there when you refresh the page.

Theory: Read: "What is localStorage?", "JSON.stringify vs JSON.parse".
<hr>

Day 24-26 (Capstone Mini-Project): Simple Blog UI

Practical: Use https.jsonplaceholder.typicode.com.

Page 1 (Home): Fetch all posts (/posts) and display them as a list of titles.

Page 2 (Post): When you click a title, show the full post content for that post (e.g., fetch /posts/1). (You can do this by showing/hiding divs, no need for two files).

Theory: Read: "What is an API? (Explain it like I'm 5)".
<hr>

Day 27:

Logic: Review any LeetCode JS problem you failed or didn't understand.

Practical: Refactor your Weather App. Make it look nice with CSS. Add an error message if the city is not found.

Theory: Read: "== vs ===", "What are 'Truthy' and 'Falsy' values?".
<hr>

Day 28:

Logic: Review "Promise" syntax (.then, async/await).

Practical: Refactor your To-Do List. Clean up the code. Add comments explaining what each function does.

Theory: Read: "What is the Event Loop?" (Simple version: "It's the system that lets JS handle setTimeout and fetch without stopping the whole page").
<hr>

Day 29-30: Mock Interview & Review

Practical: Pick your 3 favorite mini-projects. Open them and explain them out loud to an empty chair. "This is my Weather App. This function getWeather is async... I used try...catch to handle errors..." This is the most important step.

Theory: Go through a list of "Top 10 Junior JS Interview Questions" and answer them out loud.
