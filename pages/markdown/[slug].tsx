import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Layout from "@/components/layouts";

type Props = {};

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
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

function Markdown({ frontmatter, content }: any) {
  return <Layout>{content}</Layout>;
}

export default Markdown;
