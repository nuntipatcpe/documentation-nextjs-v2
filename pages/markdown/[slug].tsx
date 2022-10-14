import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Code from "@/components/Code";

export async function getStaticPaths() {
  const files = fs.readdirSync("markdown");
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
  const fileName = fs.readFileSync(`markdown/${slug}.md`, "utf-8");
  const { content } = matter(fileName);
  return {
    props: {
      content,
    },
  };
}

function MarkdownPage({ content }: any) {
  return (
    <div className="markdown">
      <div className="home">
        <Link href={"/"}>
          <a>
            {"Documentation v2"}
            {/* {frontmatter.title} */}
          </a>
        </Link>
      </div>
      <div className="content">
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
    </div>
  );
}

export default MarkdownPage;
