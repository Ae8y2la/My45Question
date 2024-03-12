//  Define variables
var blue = "blue";
var uppercaseBlue = "blue";
var five = 5;
var ten = 10;
var colours = ["red", "green", "yellow"];
// test for equality and inequality with string 
console.log("Is blue equal to blue?");
console.log(blue == "blue");
console.log("\nIs blue is not equal to blue?");
console.log(blue != "blue");
// Tests using the lower case function
console.log("\nIs blue equal to blue after converting to lowercase?");
console.log(uppercaseBlue.toLowerCase() == "blue");
console.log("\nIs blue is not equal to blue after converting to lowercase?");
console.log(uppercaseBlue.toLowerCase() != "blue");
// test for equality and inequality with number
console.log("\nIs five equal to ten?");
console.log(five == 10);
console.log("\nIs five not equal to ten?");
console.log(five != 10);
// test for greater than and equal to  with number
console.log("\nIs five greater than ten?");
console.log(five > 10);
console.log("\nIs five greater than or equal to ten?");
console.log(five >= 10);
// test for less than and eqaual to with number
console.log("\nIs five less than ten?");
console.log(five < 10);
console.log("\nIs five less than or equal to ten?");
console.log(five <= 10);
// Test using "and" and "or" operators
console.log("\n ten is not equal to 5 and ten is greater than 5?");
console.log(ten != 5 && ten > 5);
console.log("\n ten is not equal to 5 and ten is greater than 5?");
console.log(ten != 5 && ten > 20);
// Test whether an item is in a array
console.log("\nIs green in the array of colours?");
console.log(colours.indexOf("green") != -1);
console.log("\nIs green not in the array of colours?");
console.log(colours.indexOf("green") == -1);
// Test whether an item is not in a array
console.log("\nIs green not in the array of colours?");
console.log(colours.lastIndexOf("green") == -1);
console.log("\nIs green in the array of colours?");
console.log(colours.lastIndexOf("green") != -1);
