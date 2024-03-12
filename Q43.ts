function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => {
      console.log(magician);
  });
}
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      great_magicians.push(magician + ' the Great');
    }
  
    return great_magicians;
  }
  
  const magicians: string[] = ['Harry Houdini', 'Dynamo', 'Teller'];
  const great_magicians: string[] = make_great(magicians.slice());
  
  console.log('Original magicians:');
  show_magicians(magicians);

  console.log('\nGreat magicians:');
show_magicians(great_magicians);
  