var guestList = ["Aeyla", "Mutanza", "Zara", "Amna"];
var dontcome = guestList[0];
console.log(dontcome, "i cant come");
guestList.splice(0, 0, "Yamna");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
