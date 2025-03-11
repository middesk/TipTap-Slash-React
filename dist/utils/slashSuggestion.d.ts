import { Extension } from "@tiptap/core";
import { SlashSuggestionOptions } from "../types";
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        slashSuggestion: {
            setSlashSuggestion: () => ReturnType;
        };
    }
}
declare const SlashSuggestion: Extension<SlashSuggestionOptions, any>;
export default SlashSuggestion;
