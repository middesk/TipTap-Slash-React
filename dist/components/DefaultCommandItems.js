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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var createHeadingCommand = function (level) {
    return function (_a) {
        var editor = _a.editor, range = _a.range;
        editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: level })
            .run();
    };
};
var DefaultCommandItems = [
    {
        title: "Heading 1",
        icon: (_jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-h-1" }, { children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M19 18v-8l-2 2" }), _jsx("path", { d: "M4 6v12" }), _jsx("path", { d: "M12 6v12" }), _jsx("path", { d: "M11 18h2" }), _jsx("path", { d: "M3 18h2" }), _jsx("path", { d: "M4 12h8" }), _jsx("path", { d: "M3 6h2" }), _jsx("path", { d: "M11 6h2" })] }))),
        command: createHeadingCommand(1),
    },
    {
        title: "Heading 2",
        icon: (_jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-h-2" }, { children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" }), _jsx("path", { d: "M4 6v12" }), _jsx("path", { d: "M12 6v12" }), _jsx("path", { d: "M11 18h2" }), _jsx("path", { d: "M3 18h2" }), _jsx("path", { d: "M4 12h8" }), _jsx("path", { d: "M3 6h2" }), _jsx("path", { d: "M11 6h2" })] }))),
        command: createHeadingCommand(2),
    },
    {
        title: "Heading 3",
        icon: (_jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-h-3" }, { children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M19 14a2 2 0 1 0 -2 -2" }), _jsx("path", { d: "M17 16a2 2 0 1 0 2 -2" }), _jsx("path", { d: "M4 6v12" }), _jsx("path", { d: "M12 6v12" }), _jsx("path", { d: "M11 18h2" }), _jsx("path", { d: "M3 18h2" }), _jsx("path", { d: "M4 12h8" }), _jsx("path", { d: "M3 6h2" }), _jsx("path", { d: "M11 6h2" })] }))),
        command: createHeadingCommand(3),
    },
    {
        title: "Heading 4",
        icon: (_jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-h-4" }, { children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M20 18v-8l-4 6h5" }), _jsx("path", { d: "M4 6v12" }), _jsx("path", { d: "M12 6v12" }), _jsx("path", { d: "M11 18h2" }), _jsx("path", { d: "M3 18h2" }), _jsx("path", { d: "M4 12h8" }), _jsx("path", { d: "M3 6h2" }), _jsx("path", { d: "M11 6h2" })] }))),
        command: createHeadingCommand(4),
    },
    {
        title: "Heading 5",
        icon: (_jsxs("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-h-5" }, { children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" }), _jsx("path", { d: "M4 6v12" }), _jsx("path", { d: "M12 6v12" }), _jsx("path", { d: "M11 18h2" }), _jsx("path", { d: "M3 18h2" }), _jsx("path", { d: "M4 12h8" }), _jsx("path", { d: "M3 6h2" }), _jsx("path", { d: "M11 6h2" })] }))),
        command: createHeadingCommand(5),
    },
];
export default DefaultCommandItems;
//# sourceMappingURL=DefaultCommandItems.js.map