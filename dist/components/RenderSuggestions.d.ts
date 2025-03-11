import { SuggestionKeyDownProps } from "@tiptap/suggestion";
import { RenderSuggestionsProps } from "../types";
declare const RenderSuggestions: () => {
    onStart: (props: RenderSuggestionsProps) => void;
    onUpdate(props: RenderSuggestionsProps): void;
    onKeyDown(props: SuggestionKeyDownProps): boolean;
    onExit(): void;
};
export default RenderSuggestions;
