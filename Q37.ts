function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`I'm going to make a ${size} shirt.`);
    console.log(`It will say, "${message}"`);
  }
  
  make_shirt();
  
  make_shirt('medium');
  
  make_shirt('x-large', 'I love programming!');