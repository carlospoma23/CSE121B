/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInformation = {
  name: "Carlos Poma",
  photo: "images/myPicture.jpg",
  favoriteFoods: ["Ceviche", "Lomo Saltado", "Pollo a la brasa"],
  hobbies: ["Play the guitar", "Play soccer", "Learn about technology"],
  placesLived: [
    {
      place: "PERU",
      length: "35 years",
      language: "Spanish",
    },
    {
      place: "USA",
      length: "3 years",
      language: "English",
    },
  ],
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
function setBasicInfo(info) {
  const myName = document.getElementById("name");
  const myPicture = document.getElementById("photo");

  myName.textContent = info.name;
  myPicture.src = info.photo;
  myPicture.alt=info.name;
  
}

function setFavorityFood(info) {
  const myFoods = document.getElementById("favorite-foods");
  info.favoriteFoods.forEach((food) => {
    let listFood = document.createElement("li");
    listFood.textContent = food;
    myFoods.append(listFood);
  });
  
}

function setHobbies(info) {
  const myHobbies = document.getElementById("hobbies");
  info.hobbies.forEach((hobby) => {
    let listHobby = document.createElement("li");
    listHobby.textContent = hobby;
    myHobbies.append(listHobby);
  });
}


function setPlacesLived(info){
  
  info.placesLived.forEach((element) => {
    let dtPlace = document.createElement("dt");
    let ddLength=document.createElement("dd");
    let ddLanguage=document.createElement("dd");
    
    dtPlace.innerHTML = `${element.place} :`;
    ddLength.innerHTML = `- ${element.length}`;
    ddLanguage.innerHTML= `- ${element.language}`;

    let dlElement = document.getElementById("places-lived");
    dlElement.appendChild(dtPlace); 
    dlElement.appendChild(ddLength);
    dlElement.appendChild(ddLanguage);

  });

}


setBasicInfo(myInformation);
setFavorityFood(myInformation);
setHobbies(myInformation);
setPlacesLived(myInformation);

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
