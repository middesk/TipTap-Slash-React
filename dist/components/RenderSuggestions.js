import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";
import CommandsList from "./CommandsList";
var RenderSuggestions = function () {
    var reactRenderer;
    var popup;
    return {
        onStart: function (props) {
            reactRenderer = new ReactRenderer(CommandsList, {
                props: props,
                editor: props.editor,
            });
            if (!props.clientRect)
                return;
            popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: function () { return document.body; },
                content: reactRenderer.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
            });
        },
        onUpdate: function (props) {
            reactRenderer.updateProps(props);
            if (!props.clientRect)
                return;
            popup[0].setProps({
                getReferenceClientRect: props.clientRect,
            });
        },
        onKeyDown: function (props) {
            var _a;
            if (props.event.key === "Escape") {
                popup[0].hide();
                return true;
            }
            return (_a = reactRenderer.ref) === null || _a === void 0 ? void 0 : _a.onKeyDown(props);
        },
        onExit: function () {
            popup[0].destroy();
            reactRenderer.destroy();
        },
    };
};
export default RenderSuggestions;
//# sourceMappingURL=RenderSuggestions.js.map