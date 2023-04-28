/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var myName="Carlos Poma";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById('name').innerHTML=myName;

// Step 3: declare and instantiate a variable to hold the current year
 var currentYear;
 currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent=currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
var myPicture='images/myPicture.jpg';

// Step 6: copy your image into the "images" folder
//done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src=myPicture;
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

const myFavoriteFoods=["Ceviche", "Lomo Saltado", "Pollo a la brasa"];

// Step 2: place the values of the favorite foods variable into the HTML file

document.getElementById('food').innerHTML=myFavoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food

var anotherFavoriteFood ="Caldo de Gallina";

// Step 4: add the variable holding another favorite food to the favorite food array
myFavoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2
document.getElementById('food').innerHTML=myFavoriteFoods;

// Step 6: remove the first element in the favorite foods array

myFavoriteFoods.shift();

// Step 7: repeat Step 2
document.getElementById('food').innerHTML=myFavoriteFoods;

// Step 8: remove the last element in the favorite foods array

myFavoriteFoods.pop();

// Step 7: repeat Step 2

document.getElementById('food').innerHTML=myFavoriteFoods;

