import DefaultCommandItems from "../components/DefaultCommandItems";
export var filterCommandItems = function (query, commandItems) {
    var _a;
    if (commandItems === void 0) { commandItems = DefaultCommandItems; }
    var normalizedQuery = (_a = query === null || query === void 0 ? void 0 : query.toLowerCase().trim()) !== null && _a !== void 0 ? _a : "";
    if (!normalizedQuery) {
        return commandItems;
    }
    var matchingItems = commandItems.filter(function (item) {
        var title = item.title.toLowerCase();
        return (title.includes(normalizedQuery) ||
            normalizedQuery.split(" ").every(function (word) { return title.includes(word); }));
    });
    return matchingItems.length > 0
        ? matchingItems
        : [{ title: "No results found", disabled: true, command: function () { } }];
};
export default filterCommandItems;
//# sourceMappingURL=filterCommandItems.js.map