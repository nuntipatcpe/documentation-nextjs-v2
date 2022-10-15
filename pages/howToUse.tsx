import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Code from "@/components/Code";
import LayoutMarkdown from "@/components/layouts/layoutlayoutHeaderMarkdown";

type Props = { content: string };

export async function getStaticProps() {
  const readFile = fs.readFileSync(`markdown/useage.md`, "utf-8");
  const { content } = matter(readFile);
  return {
    props: {
      content,
    },
  };
}

function howToUse({ content }: Props) {
  return (
    <LayoutMarkdown>
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
          {content}
        </Markdown>
      </div>
    </LayoutMarkdown>
  );
}

export default howToUse;
