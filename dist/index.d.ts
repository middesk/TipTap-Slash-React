import { Editor, Extension } from '@tiptap/core';
import { SuggestionOptions } from '@tiptap/suggestion';

interface CommandItem {
    title: string;
    icon?: React.ReactNode;
    command?: (props: {
        editor: Editor;
        range: Range;
    }) => void;
    disabled?: boolean;
}
interface CustomCommandItem {
    title: string;
    icon?: React.ReactNode;
    command: (props: {
        editor: Editor;
        range: Range;
    }) => void;
}
interface Range {
    from: number;
    to: number;
}
interface SlashSuggestionOptions {
    suggestion?: Partial<SuggestionOptions>;
    commandItems?: CommandItem[];
    options?: any;
}

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        slashSuggestion: {
            setSlashSuggestion: () => ReturnType;
        };
    }
}
declare const SlashSuggestion: Extension<SlashSuggestionOptions, any>;

declare const filterCommandItems: (query: string | undefined, commandItems?: CommandItem[]) => CommandItem[];

export { CustomCommandItem, SlashSuggestion, filterCommandItems };
