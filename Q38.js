function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('paris', 'France');
describe_city('London', 'England');
describe_city('Karachi');
