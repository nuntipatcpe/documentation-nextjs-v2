import React from "react";
import fs from "fs";
import matter from "gray-matter";

import { sortArray } from "@/utils/array.util";
import { Posts } from "../models/post.model";

import Home from "@/components/pages/home";

export async function getStaticProps() {
  let folderName = "backend";
  const files = fs.readdirSync(`markdown/data/${folderName}`);
  //sort by popula
  const posts = sortArray(
    files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(
        `markdown/data/${folderName}/${fileName}`,
        "utf-8"
      );
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    })
  );
  return {
    props: {
      posts,
    },
  };
}

const frontend = ({ posts }: Posts) => {
  let markdown = "backend";
  return <Home posts={posts} link={markdown} />;
};

export default frontend;
