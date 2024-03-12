function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push(magician + ' the Great');
    }
    return great_magicians;
}
var magicians = ['Harry Houdini', 'Dynamo', 'Teller'];
var great_magicians = make_great(magicians.slice());
console.log('Original magicians:');
show_magicians(magicians);
console.log('\nGreat magicians:');
show_magicians(great_magicians);
