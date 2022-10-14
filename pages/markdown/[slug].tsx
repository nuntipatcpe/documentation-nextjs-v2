import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Code from "@/components/Code";
import LayoutMarkdown from "@/components/layouts/layoutlayoutHeaderMarkdown";

export async function getStaticPaths() {
  const files = fs.readdirSync("markdown/data");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`markdown/data/${slug}.md`, "utf-8");
  const { content } = matter(fileName);
  return {
    props: {
      content,
    },
  };
}

function MarkdownPage({ content }: any) {
  return (
    <LayoutMarkdown>
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
    </LayoutMarkdown>
  );
}

export default MarkdownPage;
