function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("I'm going to make a ".concat(size, " shirt."));
    console.log("It will say, \"".concat(message, "\""));
}
make_shirt();
make_shirt('medium');
make_shirt('x-large', 'I love programming!');
