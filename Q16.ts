// Creating a Guest List Array
let guestList = ["Aeyla","Mutanza","Zara","Amna"];

// Making variables for those guest who cannot come
let dontcome = guestList[0];

// Print the name of guest who cannot come
console.log(dontcome, "cannot come");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Yamna");

// Message Print for Bigger Table
console.log("Good News! We have found a Bigger table for Dinner");

// Adding a new guest at starting index  of array
guestList.unshift("Sammi");

// Adding a new guest at ending index of array
guestList.push("Alina");

// Adding one new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Neha");

// Print Message of our Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me`));

