// Creating a Guest List Array
var guestList = ["Aeyla", "Mutanza", "Zara", "Amna"];
// Making variables for those guest who cannot come
var dontcome = guestList[0];
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
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Neha");
// Print Message of our Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me")); });
