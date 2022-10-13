import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Array<{
    slug: string;
    frontmatter: string;
  }>;
};

export async function getStaticProps() {
  const files = fs.readdirSync("markdown");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`markdown/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

function Markdown({ posts }: Props) {
  console.log(posts[0]);

  return <div>{posts[0].slug}</div>;
}

export default Markdown;
