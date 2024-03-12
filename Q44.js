function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Ordering a sandwich with the following items: ".concat(items.join(', ')));
}
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('cheese', 'mayo', 'tomato');
make_sandwich('capsicum', 'mayo', 'BBQ chicken', 'cheese');
