import Code from "@/components/Code";
import LayoutMarkdown from "@/components/layouts/layoutlayoutHeaderMarkdown";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";

type Props = {};

export default function Preview({}: Props) {
  const [text, setText] = useState("");
  return (
    <LayoutMarkdown>
      <div className="preview">
        <h1>Write here</h1>
        <h1>Preview</h1>
        <textarea
          className="preview_area"
          onChange={(e) => setText(e.target.value)}
        >
          asdas
        </textarea>

        <div className="markdown">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: Code,
                },
              },
            }}
          >
            {text}
          </Markdown>
        </div>
      </div>
    </LayoutMarkdown>
  );
}
