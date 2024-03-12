let placesToVisit = ["Tokyo", "Greece", "New York", "Monaco", "Eygpt"];

// Print the original order
console.log("Original order:");
console.log(placesToVisit);

// Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show the original order
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show the original order
console.log("\nOriginal order after sorting in reverse alphabetical order:");
console.log(placesToVisit);

// Reverse the order of the list
console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Reverse the order of the list again to get back to original order
console.log("\nBack to original order after reversing:");
placesToVisit.reverse();
console.log(placesToVisit);

// Sort array in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit.sort());

// Sort array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
