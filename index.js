// Write your code here!
document.querySelector('main').remove()
let newHeader = document.createElement('h1')
//newHeader.setAttribute('id', 'victory') (another wat to code it)
newHeader.id = 'victory'
newHeader.textContent = 'Josh is the champion'


// From this point forward, many of the labs will work a little differently from ones you've done before. Specifically, the tests will mock the process of 1) running JavaScript code in the browser and 2) seeing the results of that code represented in the DOM. Take a look at test/indexTest.js to see the tests' descriptions of the changes your code should be making to the DOM elements.

// Note that you do not need to create functions for this lab. Just create the line or lines of JavaScript necessary to pass each test. As usual, you will write your code in the index.js file.

// One final note: the last test in the test/indexTest.js file is looking for the text "YOUR-NAME is the champion" inside your newly created DOM node. While there are a number of ways you could accomplish this, you should use either the textContent (Links to an external site.) or innerHTML (Links to an external site.) property to set the text inside your DOM node. The innerText property would technically work as well; however, the tests won't pass if you use this approach, and generally it's not a good practice to use innerText when setting the contents of an element. This StackOverflow answer (Links to an external site.) does a good job explaining some differences between these properties.