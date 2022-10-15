import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Code from "@/components/Code";
import LayoutBase from "@/components/layouts/layoutBase";

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
    <LayoutBase>
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
    </LayoutBase>
  );
}

export default howToUse;
