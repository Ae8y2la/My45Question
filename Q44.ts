function make_sandwich(...items: string[]): void {
    console.log(`Ordering a sandwich with the following items: ${items.join(', ')}`);
  }
  
  make_sandwich('ham', 'cheese', 'lettuce');
  make_sandwich('cheese', 'mayo', 'tomato');
  make_sandwich('capsicum', 'mayo', 'BBQ chicken', 'cheese');