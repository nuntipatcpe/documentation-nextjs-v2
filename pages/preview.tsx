import Code from "@/components/Code";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Preview({}: Props) {
  const [text, setText] = useState("");
  return (
    <div className="preview">
      <div className="preview_box1">
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <h3>Write here</h3>
        <span />
      </div>
      <div className="preview_box2">
        <span />
        <h3>Preview</h3>
        <span />
      </div>
      <textarea
        className="preview_area"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
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
  );
}
