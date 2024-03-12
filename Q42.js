function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// Array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Dynamoo"];
magicians = make_great(magicians);
show_magicians(magicians);
