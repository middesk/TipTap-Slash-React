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
import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import RenderSuggestions from "../components/RenderSuggestions";
import { filterCommandItems } from "./filterCommandItems";
var SlashSuggestion = Extension.create({
    name: "slash-suggestion",
    addOptions: function () {
        var _this = this;
        return {
            suggestion: {
                char: "/",
                command: function (_a) {
                    var editor = _a.editor, range = _a.range, props = _a.props;
                    props.command({ editor: editor, range: range });
                },
                items: function (_a) {
                    var query = _a.query;
                    return filterCommandItems(query, _this.parent().commandItems);
                },
                render: function () {
                    var component;
                    return {
                        onStart: function (props) {
                            component = RenderSuggestions();
                            component.onStart(props);
                        },
                        onUpdate: function (props) {
                            component.onUpdate(props);
                        },
                        onKeyDown: function (props) {
                            var _a, _b;
                            if (props.event.key === "Escape") {
                                return true;
                            }
                            return (_b = (_a = component.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(component, props)) !== null && _b !== void 0 ? _b : false;
                        },
                        onExit: function () {
                            component.onExit();
                        },
                    };
                },
            },
            commandItems: [],
        };
    },
    addProseMirrorPlugins: function () {
        return [
            Suggestion(__assign(__assign({ editor: this.editor }, this.options.suggestion), { render: RenderSuggestions })),
        ];
    },
});
export default SlashSuggestion;
//# sourceMappingURL=slashSuggestion.js.map