function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Dynamoo"];

magicians = make_great(magicians);

show_magicians(magicians);
