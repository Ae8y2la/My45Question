var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Greece", "New York", "Monaco", "Eygpt"];
// Print the original order
console.log("Original order:");
console.log(placesToVisit);
// Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show the original order
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);
// Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
