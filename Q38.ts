function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('paris', 'France');
  describe_city('London', 'England');
  describe_city('Karachi');