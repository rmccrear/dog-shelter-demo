// problem domain: the Seattle Dog Rescue has tons of dogs who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each dog available on a website. There are hundreds of dogs, though, and only a few volunteers; it's too time-consuming to hand-code each dog's profile on their website. They need a better way.

// Each dog's profile should have:
// - name
// - random age assigned
// - a list of tricks
// - an image
// good with kids
// good with dogs
// good with other dogs
// breed

let state = {
  tableElm: document.getElementById("dog-table"),
  dogs: []
}

// Prototype of Dog
// Constructor (like a factory)
function Dog(name, breed, age, tricks) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.tricks = tricks;
}

Dog.prototype.oneYearLater = function() {
  this.age++;
}

Dog.prototype.render = function() {
  let dogRow = document.createElement("tr");

  let dogNameTD = document.createElement("td");
  dogNameTD.textContent = this.name;
  dogRow.appendChild(dogNameTD);

  let dogBreedTD = document.createElement("td");
  dogBreedTD.textContent = this.breed;
  dogRow.appendChild(dogBreedTD);

  let dogAgeTD = document.createElement("td");
  dogAgeTD.textContent = this.age;
  dogRow.appendChild(dogAgeTD);

  state.tableElm.appendChild(dogRow);
}

let dog1 = new Dog("Oso", "Rottweiler", 2, ["spin", "roll over", "fetch"]);
let dog2 = new Dog("Rover", "Lab", 5, []);
let dog3 = new Dog("Coffee", "Beagle", 7, ["shake"]);
console.log(dog1, dog2, dog3);

state.dogs.push(dog1);
state.dogs.push(dog2);
state.dogs.push(dog3);

console.log(state.dogs);

for (let dog of state.dogs) {
  dog.oneYearLater();
}

for (let dog of state.dogs) {
  dog.render();
}


// Object literal
// let dog1 = {
//   name: "Oso",
//   breed: "Rottweiler",
//   isGoodWithKids: false,
//   isGoodWithOtherDogs: true,
//   isGoodWithCats: false,
//   isAggressive: true,
//   tricks: ["spin", "roll over", "fetch"],
//   age: 0,
//   imgSrc: "images/oso.jpg"
// }

// TODO: dynamically generate dog objects using form data

// 'use strict';

// let parent = document.getElementById("dogProfiles");

// let dog = dog1;
// let dogProfile = document.createElement("article");
// let dogH2 = document.createElement("h2");
// dogH2.textContent = `${dog.name} -- ${dog.breed}`;
// dogProfile.appendChild(dogH2);

// if(dog.isGoodWithOtherDogs) {
//   let dogP = document.createElement("p");
//   dogP.textContent = `${dog.name} is good with other dogs.`;
//   dogProfile.appendChild(dogP);
// }

// if(dog.isGoodWithKids) {
//   let dogP = document.createElement("p");
//   dogP.textContent = `${dog.name} is good with kids.`;
//   dogProfile.appendChild(dogP);
// }

// if(dog.isGoodWithCats) {
//   let dogP = document.createElement("p");
//   dogP.textContent = `${dog.name} is good with cats.`;
//   dogProfile.appendChild(dogP);
// }
// if(dog.isAggressive) {
//   let dogP = document.createElement("p");
//   dogP.textContent = `CAUTION: ${dog.name} is aggresive with strangers.`;
//   dogProfile.appendChild(dogP);
// }

// let dogImg = document.createElement("img");
// dogImg.src = dog.imgSrc;
// dogImg.style.height = "150px";
// dogProfile.appendChild(dogImg);

// let dogUL = document.createElement("ul");
// for(let i=0; i<dog.tricks.length; i++) {
//   let dogLI = document.createElement("li");
//   dogLI.textContent = dog.tricks[i];
//   dogUL.appendChild(dogLI);
// }
// dogProfile.appendChild(dogUL);

// parent.appendChild(dogProfile);

// attach those elements to the parent in the DOM.

// object literals
// bracket and dot notation
// math.random
// add dogs to the page
// each dog gets an Article
// each dog's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild
