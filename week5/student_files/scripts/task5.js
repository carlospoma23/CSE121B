/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var mydate = new Date();

// Step 2: Declare another variable to hold the day of the week

var dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

dayOfWeek = mydate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
var myMessage = "";
var myDay;
var messageWeek = "Hang in there";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
var messageWeekend = "Woohoo";
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (dayOfWeek) {
  case 1:
    myMessage = messageWeek;
    myDay = "Monday";
    break;
  case 2:
    myMessage = messageWeek;
    myDay = "Tuesday";
    break;
  case 3:
    myMessage = messageWeek;
    myDay = "Wednesday";
    break;
  case 4:
    myMessage = messageWeek;
    myDay = "Thursday";
    break;
  case 5:
    myMessage = messageWeek;
    myDay = "Friday";
    break;
  case 6:
    myMessage = messageWeekend;
    myDay = "Saturday";
    break;
  case 7:
    myMessage = messageWeekend;
    myDay = "Sunday";
    break;
  default:
    console.log("Sorry ");
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById("message1").textContent = myMessage;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = myDay;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

var lisOfTemples = [];

function output(list) {
  var articleElement = document.createElement("article");
  var h3Element = document.createElement("h3");
  var h4Element1 = document.createElement("h4");
  var h4Element2 = document.createElement("h4");
  var imgElement = document.createElement("img");
  var htmlIdTemples = document.getElementById("temples");
  h3Element.innerHTML = list.templeName;
  h4Element1.innerHTML = list.location;
  h4Element1.innerHTML = list.dedicated;

  articleElement.appendChild(h3Element);
  articleElement.appendChild(h4Element1);
  articleElement.appendChild(h4Element2);
  articleElement.appendChild(imgElement);
  htmlIdTemples.appendChild(articleElement);
}

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

async function getTemples(url) {
  const myList = await fetch(url);
  if (myList.ok) {
    const lisOfTemples = await myList.json();
  }
  output(lisOfTemples);
}

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
