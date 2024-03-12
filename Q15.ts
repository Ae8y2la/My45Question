let guestList = ["Aeyla" , "Mutanza" , "Zara" , "Amna"];

let dontcome = guestList[0];

console.log(dontcome, "cannot come");

guestList.splice(0, 0, "Yamna");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`)); 