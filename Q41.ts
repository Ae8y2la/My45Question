function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ['Harry Houdini', 'Dynamo', 'Teller'];
  show_magicians(magicians);