import React, { useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useSelector } from "react-redux";
import { searchSelector } from "@/store/slices/postSlice";

import { redundancyArray, sortArray } from "@/utils/array.util";
import { Posts } from "../models/post.model";
import Image from "next/image";
import Layout from "@/components/layouts";
import Home from "@/components/pages/home";

export async function getStaticProps() {
  const files = fs.readdirSync("markdown/data/cyber");
  //sort by popula
  const posts = sortArray(
    files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(
        `markdown/data/cyber/${fileName}`,
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

const cyber = ({ posts }: Posts) => {
  return <Home posts={posts} link={"cyber-markdown"} />;
};

export default cyber;
