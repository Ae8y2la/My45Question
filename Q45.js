var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function store_car_info(manufacturer, model, options) {
    var carObject = {
        manufacturer: manufacturer,
        model: model,
        options: __assign({}, options)
    };
    return carObject;
}
// Call the function with required information and additional name-value pairs
var carInfo = store_car_info("Ferrari", "Ferrari SF90 Stradale", { color: "purple", hasSunroof: false });
// Print the returned object to verify the stored information
console.log(carInfo);
