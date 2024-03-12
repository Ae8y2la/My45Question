function store_car_info(manufacturer: string, model: string, options: { [key: string]: any }): { manufacturer: string, model: string, options: { [key: string]: any } } {
    const carObject = {
        manufacturer,
        model,
        options: { ...options }
    };
    return carObject;
}

// Call the function with required information and additional name-value pairs
const carInfo = store_car_info("Ferrari", "Ferrari SF90 Stradale", { color: "purple", hasSunroof: false });

// Print the returned object to verify the stored information
console.log(carInfo);
