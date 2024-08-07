"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode } from "@lexical/rich-text";
import Theme from "./plugins/Theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

export function Editor() {
    const initialConfig = {
        namespace: "Editor",
        nodes: [HeadingNode],
        onError: (error: Error) => {
            console.error(error);
            throw error;
        },
        theme: Theme,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="editor-container size-full">
                <ToolbarPlugin />

                <div className="editor-inner h-[1100px]">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="editor-input h-full" />
                        }
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                </div>
            </div>
        </LexicalComposer>
    );
}
